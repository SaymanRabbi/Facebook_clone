import React, { useCallback, useEffect, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';
import { useSelector } from 'react-redux';
import PulseLoader from "react-spinners/PulseLoader";
import { createPost } from '../../func/post';
import { uploadImages } from '../../func/UploadImages';
import { updateCover } from '../../func/user';
import getCroppedImg from '../../Helpers/getCroppedImg';
import useClickoutside from '../../Helpers/useClickoutside';

const Cover = ({profile,visitor}) => {
    const [showCoverMenu, setShowCoverMenu] = useState(false);
    const [width, setWidth] = useState();
    const [loading,setLoading] = useState(false);
    const { user } = useSelector((state) => ({ ...state }));
    const [cover,setCover] = useState("")
    const [error, setError] = useState("");
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [croppedAreaPixles, setCroppedAreaPixels] = useState(null)
    const menuRef = useRef(null)
    const hightRef = useRef(null)
    const Refinput = useRef(null)
    const coverref = useRef(null)
    useEffect(()=>{
      setWidth(hightRef.current.clientWidth);
    },[window.innerWidth])
    useClickoutside(menuRef,()=>setShowCoverMenu(false))
    const handleImage = (e) => {
      let file = e.target.files[0];
      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/webp" &&
        file.type !== "image/gif"
      ) {
        setError(`${file.name} format is not supported.`);
        return;
      } else if (file.size > 1024 * 1024 * 5) {
        setError(`${file.name} is too large max 5mb allowed.`);
        return;
      }
  
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setCover(event.target.result);
      };
    };
    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels)
    }, [])
    const getCroppedImage = useCallback(async (show) => {
      try {
        const img = await getCroppedImg(cover, croppedAreaPixles);
        if(show){
          setCover(img);
          setZoom(1); 
          setCrop({ x: 0, y: 0 });
        }else{

          return img;
        }
      } catch (error) {
      }
    },[croppedAreaPixles])
    const updateCoverFunc = async () => {
      try {
        setLoading(true);
        let img = await getCroppedImage();
        let blob = await fetch(img).then(r => r.blob());
        const path = `${user.usrname}/cover_pictures`;
        let formData = new FormData();
        formData.append("file", blob);
        formData.append("path", path);
        const res =await uploadImages(formData, user.token,path);
        const update_pic = await updateCover(res[0].url,user.token);
        if(update_pic === "ok"){
        const New_profile = await createPost("profilePicture",null,null,res,user.id,user.token);
        if(New_profile === "ok"){
          setLoading(false);
          setCover("");
          coverref.current.src=`${res[0].url}`;
        }
        else{
          setLoading(false);
          setError(New_profile);
        }
        }
        else{
          setLoading(false);
          setError(update_pic);
        }
       
      } catch (error) {
        setLoading(false);
        setError(error?.messages);
      }
    }
    return (
  
            <div className="profile_cover" ref={hightRef}>
              {
                cover &&<div className="save_changes_cover">
                <div className="save_changes-left">
                  <i className='public_icon'>
                    Your Cover Photo is Public
                  </i>
                </div>
                <div className="save_changes_right">
                  <button className='blue_btn opacity_btn'>Cancel</button>
                  <button className='blue_btn' onClick={()=>updateCoverFunc()}>{
          loading ? <PulseLoader color="#fff" size={5} /> : 'Save'}</button>
                </div>
              </div>
              }
              <input type="file" ref={Refinput} hidden accept='image/jpeg,image/png,image/webp,image/gif'
              onChange={handleImage}
              />
              {error && (
            <div className="postError comment_error">
              <div className="postError_error">{error}</div>
              <button className="blue_btn" onClick={() => setError("")}>
                Try again
              </button>
            </div>
          )}
          {
            cover &&  <div className="cover_cropper" ref={coverref}>
            <Cropper
             image={cover}
             crop={crop}
             zoom={zoom}
             aspect={width / 350}
             onCropChange={setCrop}
             onCropComplete={onCropComplete}
             onZoomChange={setZoom}
             showGrid={true}
             objectFit='horizontal-cover'
           />
            </div>
          }
          {
            profile?.cover &&
            <img src={profile.cover} alt="cover" className="cover" />
          }
          {
            !visitor &&<div className="update_cover_wrapper">
            <div className="open_cover_update" onClick={()=>setShowCoverMenu(!showCoverMenu)}>
              <i className="camera_filled_icon"></i>
              Add Cover Photo
            </div>
            {
              showCoverMenu && <div className="open_cover_menu" ref={menuRef}>
                <div className="open_cover_menu_item hover1">
                  <i className="photo_icon">
                  </i>
                  Select Photo
                </div>
                <div className="open_cover_menu_item hover1" onClick={()=>Refinput.current.click()}>
                  <i className="upload_icon">
                  </i>
                  Upload Photo
                </div>
              </div>
            }
          </div>
          }
        </div>
       
    );
};

export default Cover;
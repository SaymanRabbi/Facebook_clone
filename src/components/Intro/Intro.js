import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import Bio from './Bio';
import EditeDetails from "./EditeDetails";
import './Intro.css';
const Intro = ({detailss,visitor,setOtherName}) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [visible, setVisible] = useState(false);
  const [details, setDetails] = useState();
  useEffect(() => {
    setDetails(detailss);
    setInfos(detailss);
  }, [detailss]);
  const initial = {
    bio: details?.bio ? details.bio : "",
    otherName: details?.otherName ? details.otherName : "",
    job: details?.job ? details.job : "",
    workplace: details?.workplace ? details.workplace : "",
    highSchool: details?.highSchool ? details.highSchool : "",
    college: details?.college ? details.college : "",
    currentCity: details?.currentCity ? details.currentCity : "",
    hometown: details?.hometown ? details.hometown : "",
    relationship: details?.relationship ? details.relationship : "",
    instagram: details?.instagram ? details.instagram : "",
  };
  const [infos, setInfos] = useState(initial);
  const [showBio, setShowBio] = useState(false);
  const [max, setMax] = useState(infos?.bio ? 100 - infos?.bio.length : 100);
  const updateDetails = async () => {
    try {
      const { data } = await axios.put(
        `https://facebook-server.onrender.com/updateDetails`,
        {
          infos,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setShowBio(false);
      setDetails(data);
      setOtherName(data?.otherName)
    } catch (error) {
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfos({ ...infos, [name]: value });
    setMax(100 - e.target.value.length);
  };
  return (
    <div className="profile_card">
      <div className="profile_card_header">Intro</div>
      {details?.bio && !showBio && (
        <div className="info_col">
          <span className="info_text">{details?.bio}</span>
          {!visitor && (
            <button
              className="gray_btn hover1"
              onClick={() => setShowBio(true)}
            >
              Edit Bio
            </button>
          )}
        </div>
      )}
      {!details?.bio && !showBio && !visitor && (
        <button
        className="gray_btn hover1 w100"
        onClick={() => setShowBio(true)}
      >
        Add Bio
      </button>
      )}
      {showBio && (
        <Bio
          infos={infos}
          max={max}
          handleChange={handleChange}
          setShowBio={setShowBio}
          updateDetails={updateDetails}
          placeholder="Add Bio"
          name="bio"
        />
      )}
      {details?.job && details?.workplace ? (
        <div className="info_profile">
          <img src="../../../icons/job.png" alt="" />
          works as {details?.job} at <p>{details?.workplace}</p>
        </div>
      ) : details?.job && !details?.workplace ? (
        <div className="info_profile">
          <img src="../../../icons/job.png" alt="" />
          works as {details?.job}
        </div>
      ) : (
        details?.workplace &&
        !details?.job && (
          <div className="info_profile">
            <img src="../../../icons/job.png" alt="" />
            works at {details?.workplace}
          </div>
        )
      )}
      {details?.relationship && (
        <div className="info_profile">
          <img src="../../../icons/relationship.png" alt="" />
          {details?.relationship}
        </div>
      )}
      {details?.college && (
        <div className="info_profile">
          <img src="../../../icons/studies.png" alt="" />
          studied at {details?.college}
        </div>
      )}
      {details?.highSchool && (
        <div className="info_profile">
          <img src="../../../icons/studies.png" alt="" />
          studied at {details?.highSchool}
        </div>
      )}
      {details?.currentCity && (
        <div className="info_profile">
          <img src="../../../icons/home.png" alt="" />
          Lives in {details?.currentCity}
        </div>
      )}
      {details?.hometown && (
        <div className="info_profile">
          <img src="../../../icons/home.png" alt="" />
          From {details?.hometown}
        </div>
      )}
      {details?.hometown && (
        <div className="info_profile">
          <img src="../../../icons/instagram.png" alt="" />
          <a
            href={`https://www.instagram.com/${details?.instagram}`}
            target="_blank"
          >
            {details?.instagram}
          </a>
        </div>
      )}
      {!visitor && (
        <button className="gray_btn hover1 w100" onClick={()=>setVisible(true)}>Edit Details</button>
      )}
      {
        visible && !visitor && <EditeDetails details={details} handleChange={handleChange} updateDetails={updateDetails} infos={infos} setVisible={setVisible}/>
      }
      {!visitor && (
        <button className="gray_btn hover1 w100">Add Hobbies</button>
      )}
      {!visitor && (
        <button className="gray_btn hover1 w100">Add Featured</button>
      )}
    </div>
  );
};

export default Intro;
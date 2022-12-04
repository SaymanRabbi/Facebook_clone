import { useState } from "react";
import Bio from "./Bio";

const Detail = ({ header, img, value, placeholder, name,handleChange,updateDetails,infos }) => {
    const [show, setShow] = useState(true);
  return (
    <div>
      <div className="details_header">{header}</div>
      <div className="add_details_flex " onClick={()=>setShow(true)}>
        {value ? (
          <div className="info_profile no_underline">
            <img src={`../../../icons/${img}.png`} alt="" />
            {value}
            <i className="edit_icon"></i>
          </div>
        ) : (
          <>
            <i className="rounded_plus_icon"></i>
            Add {header}
          </>
        )}
      </div>
      {show && <Bio placeholder={placeholder} name={name} handleChange={handleChange} updateDetails={updateDetails} infos={infos} detail setShow={setShow}/> }
    </div>
  );
};

export default Detail;
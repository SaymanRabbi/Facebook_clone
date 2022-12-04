import { useState } from "react";
import Bio from "./Bio";

const Detail = ({ img, value, placeholder, name,handleChange,updateDetails,infos,text,relationShip }) => {
    const [show, setShow] = useState(false);
  return (
    <div>
      <div className="add_details_flex " onClick={()=>setShow(true)}>
        {value ? (
          <div className="info_profile">
            <img src={`../../../icons/${img}.png`} alt="" />
            {value}
            <i className="edit_icon"></i>
          </div>
        ) : (
          <>
            <i className="rounded_plus_icon"></i>
            <span className="underline">Add {text}</span>
            
          </>
        )}
      </div>
      {show && <Bio placeholder={placeholder} name={name} handleChange={handleChange} updateDetails={updateDetails} infos={infos} detail setShow={setShow} relationShip={relationShip}/> }
    </div>
  );
};

export default Detail;
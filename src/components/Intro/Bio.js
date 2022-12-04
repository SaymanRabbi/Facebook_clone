import React from 'react';

const Bio = ({ infos,
  handleChange,
  max,
  setShowBio,
  placeholder,
  updateDetails, detail,setShow,name,relationShip}) => {
    return (
      <div className="add_bio_wrap">
      {
        relationShip ? <select className='select' name="relationship" value={infos.relationship} onChange={handleChange}>
          <option value="Single">Single</option>
          <option value="In a relationship">In a relationship</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
        </select>:<textarea
        placeholder={placeholder}
        name={name}
        value={infos?.[name]}
        maxLength={detail ? 30 : 100}
        className="textarea_blue details_input"
        onChange={handleChange}
      ></textarea>
      }
      {!detail && <div className="remaining">{max} characters remaining</div>}
      <div className="flex">
        <div className="flex flex_left">
          <i className="public_icon"></i>Public
        </div>
        <div className="flex flex_right">
          <button className="gray_btn" onClick={() =>!detail ? setShowBio(false):setShow(false)}>
            Cancel
          </button>
          <button className="blue_btn" onClick={() => {
            updateDetails()
            !detail ? setShowBio(false):setShow(false)
          }}>
            Save
          </button>
        </div>
      </div>
    </div>
      );
};

export default Bio;
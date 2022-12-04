import React from 'react';

const Bio = ({ infos,
  handleChange,
  max,
  setShowBio,
  updateDetails, detail,setShow,name}) => {
    return (
      <div className="add_bio_wrap">
      <textarea
        placeholder="Add Bio"
        name={name}
        value={infos?.name}
        maxLength="100"
        className="textarea_blue details_input"
        onChange={handleChange}
      ></textarea>
      {!detail && <div className="remaining">{max} characters remaining</div>}
      <div className="flex">
        <div className="flex flex_left">
          <i className="public_icon"></i>Public
        </div>
        <div className="flex flex_right">
          <button className="gray_btn" onClick={() =>!detail ? setShowBio(false):setShow(false)}>
            Cancel
          </button>
          <button className="blue_btn" onClick={() => updateDetails()}>
            Save
          </button>
        </div>
      </div>
    </div>
      );
};

export default Bio;
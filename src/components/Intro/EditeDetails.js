import React from 'react';
import Detail from './Detail';

const EditeDetails = ({details,handleChange,updateDetails,infos}) => {
    return (
       
            <div className="blur">
              <div className="postBox infosBox">
                <div className="box_header">
                  <div className="small_circle">
                    <i className="exit_icon"></i>
                  </div>
                  <span>Edit Details</span>
                </div>
                <div className="details_wrapper scrollbar">
                  <div className="details_col">
                    <span>Customize Your Intro</span>
                    <span>Details you select will be public</span>
                  </div>
                  <div className="details_header">Other Name</div>
                  <Detail
                    value={details?.otherName}
                    img="studies"
                    text="Other Name"
                    placeholder="Add other name"
                    name="otherName"
                    handleChange={handleChange}
                    updateDetails={updateDetails}
                    infos={infos}
                  />
                  <div className="details_header">Work</div>
                  <Detail
                    value={details?.job}
                    img="job"
                    text="job"
                    placeholder="Add Job Title"
                    name="job"
                    handleChange={handleChange}
                    updateDetails={updateDetails}
                    infos={infos}
                  />
                  <div className="details_header">workplace</div>
                  <Detail
                    value={details?.workplace}
                    img="job"
                    text="workplace"
                    placeholder="Add Workplace"
                    name="workplace"
                    handleChange={handleChange}
                    updateDetails={updateDetails}
                    infos={infos}
                  />
                  <div className="details_header">Education</div>
                  <Detail
                    value={details?.highSchool}
                    img="studies"
                    text="High School"
                    placeholder="Add High School Name"
                    name="highSchool"
                    handleChange={handleChange}
                    updateDetails={updateDetails}
                    infos={infos}
                  />
                  <Detail
                    value={details?.college}
                    img="studies"
                    text="College"
                    placeholder="Add College Name"
                    name="college"
                    handleChange={handleChange}
                    updateDetails={updateDetails}
                    infos={infos}
                  />
                  <div className="details_header">Current City</div>
                  <Detail
                    value={details?.currentCity}
                    img="home"
                    text="a currentCity"
                    placeholder="Add currentCity"
                    name="currentCity"
                    handleChange={handleChange}
                    updateDetails={updateDetails}
                    infos={infos}
                  />
                  <div className="details_header">Home Town</div>
                  <Detail
                    value={details?.hometown}
                    img="home"
                    text="a hometown"
                    placeholder="Add hometown"
                    name="hometown"
                    handleChange={handleChange}
                    updateDetails={updateDetails}
                    infos={infos}
                  />
                  <div className="details_header">instagram</div>
                  <Detail
                    value={details?.instagram}
                    img="instagram"
                    text="Instagram"
                    placeholder="Add instagram"
                    name="instagram"
                    handleChange={handleChange}
                    updateDetails={updateDetails}
                    infos={infos}
                  />
                </div>
              </div>
            </div>
          
    );
};

export default EditeDetails;
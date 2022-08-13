import './Stroy.css'
import { ArrowRight, Plus } from "../../../svg";
import { stories } from "../../../data/home";
import Stroy from './Stroy';
const Stroies = () => {
    return (
        <div className="stories">
        <div className="create_story_card">
          <img
            src="../../../images/default_pic.png"
            alt=""
            className="create_story_img"
          />
          <div className="plus_story">
            <Plus color="#fff" />
          </div>
          <div className="story_create_text">Create Story</div>
        </div>
        {stories.map((story, i) => (
          <Stroy  story={story} />
        ))}
        <div className="white_circle">
          <ArrowRight color="#65676b" />
        </div>
      </div>
    );
};

export default Stroies;
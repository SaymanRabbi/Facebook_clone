import './Stroy.css'
import { ArrowRight, Plus } from "../../../svg";
import { stories } from "../../../data/home";
import Stroy from './Stroy';
import {useMediaQuery} from 'react-responsive'
const Stroies = () => {
  const query1175px = useMediaQuery({query: "(max-width: 1175px)"});
  const query1030px = useMediaQuery({query: "(max-width: 1030px)"});
  const max =query1030px?5: query1175px? 4: stories.length;
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
        {stories.slice(0,max).map((story, i) => (
          <Stroy  story={story} />
        ))}
        <div className="white_circle">
          <ArrowRight color="#65676b" />
        </div>
      </div>
    );
};

export default Stroies;
import { useRef, useState } from "react";
import { SavedPost } from "../../func/post";
import useClickoutside from "../../Helpers/useClickoutside";
import Menuitem from "./Menuitem";

const PostMenu = ({
    postUserId,
    userId,
    imagesLength,
    setShowMenu,
    token,
    id,setCheackSaved,cheackSaved
  }) => {
    const [test, setTest] = useState(postUserId === userId ? true : false);
    const menu = useRef(null);
    useClickoutside(menu, () => setShowMenu(false));
    const savedHandeler = async() => {
      SavedPost(id,token)
    }
    return (
      <ul className="post_menu" ref={menu}>
        {test && <Menuitem icon="pin_icon" title="Pin Post" />}
        {
          cheackSaved ?<div onClick={()=>savedHandeler()}>
          <Menuitem
            icon="save_icon"
            title="UnSave"
            subtitle="Remove this to your saved items."
          />
          </div>:<div onClick={()=>savedHandeler()}>
          <Menuitem
            icon="save_icon"
            title="Save Post"
            subtitle="Add this to your saved items."
          />
          </div>
        }
        
        <div className="line"></div>
        {test && <Menuitem icon="edit_icon" title="Edit Post" />}
        {!test && (
          <Menuitem
            icon="turnOnNotification_icon"
            title="Turn on notifications for this post"
          />
        )}
        {imagesLength && <Menuitem icon="download_icon" title="Download" />}
        {imagesLength && (
          <Menuitem icon="fullscreen_icon" title="Enter Fullscreen" />
        )}
        {test && <Menuitem img="../../../icons/lock.png" title="Edit audience" />}
        {test && (
          <Menuitem
            icon="turnOffNotifications_icon"
            title="Turn off notifications for this post"
          />
        )}
        {test && <Menuitem icon="delete_icon" title="Turn off translations" />}
        {test && <Menuitem icon="date_icon" title="Edit Date" />}
        {test && (
          <Menuitem icon="refresh_icon" title="Refresh share attachment" />
        )}
        {test && <Menuitem icon="archive_icon" title="Move to archive" />}
        {test && (
          <Menuitem
            icon="trash_icon"
            title="Move to trash"
            subtitle="items in your trash are deleted after 30 days"
          />
        )}
        {!test && <div className="line"></div>}
        {!test && (
          <Menuitem
            img="../../../icons/report.png"
            title="Report post"
            subtitle="i'm concerned about this post"
          />
        )}
      </ul>
    );
};

export default PostMenu;
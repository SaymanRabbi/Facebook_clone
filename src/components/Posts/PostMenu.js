import { useRef, useState } from "react";
import useClickoutside from "../../Helpers/useClickoutside";
import Menuitem from "./Menuitem";

const PostMenu = ({
    postUserId,
    userId,
    imagesLength,
    setShowMenu,
  }) => {
    const [test, setTest] = useState(postUserId === userId ? true : false);
    console.log(test);
    const menu = useRef(null);
    useClickoutside(menu, () => setShowMenu(false));
    return (
      <ul className="post_menu" ref={menu}>
        {test && <Menuitem icon="pin_icon" title="Pin Post" />}
        <Menuitem
          icon="save_icon"
          title="Save Post"
          subtitle="Add this to your saved items."
        />
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
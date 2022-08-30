import './leftsidebar.css';

import {
  Home,
  Tag,
  FlutterDash,
  NotificationsNone,
  MailOutline,
  BookmarkBorder,
  List,
  PersonOutline,
  MoreHorizRounded,
  LogoutOutlined,
  AddCommentOutlined
  
} from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { AuthContext } from '../../State/AuthContext';
import { useContext } from 'react';
import { Avatar, Tooltip } from '@mui/material';

const LeftSideBar = (props) => {
  const {user,dispatch } = useContext(AuthContext);
  const avatarStyle = {
    fontSize: "1rem"
  };

  const logout = () => {
    alert ('Logging you out')
    dispatch({type:'LOGOUT'})
  }

  return (
    <div className="leftsidebar">
      <aside className="sidebar">
        <nav>
          <div className='header'>
            <Link to="/" className="app-link">
              <FlutterDash className="app-icon" />
              <span className="app-icon-name">Chirp</span>
            </Link>
          </div>
          <div className="nav-list">
              <Link to="/" className="left-link">
                <Home className="left-icon" />
                <span className="left-icon-name">Home</span>
              </Link>
              <Link to="/" className="left-link">
                <Tag className="left-icon" />
                <span className="left-icon-name">Explore</span>
              </Link>
              <Link to="/" className="left-link">
                <NotificationsNone className="left-icon" />
                <span className="left-icon-name">Notifications</span>
              </Link>
              <Link to="/" className="left-link">
                <MailOutline className="left-icon" />
                <span className="left-icon-name">Messages</span>
              </Link>
              <Link to="/" className="left-link">
                <BookmarkBorder className="left-icon" />
                <span className="left-icon-name">Bookmarks</span>
              </Link>
              <Link to="/" className="left-link">
                <List className="left-icon" />
                <span className="left-icon-name">Lists</span>
              </Link>
              <Link to="/" className="left-link">
                <PersonOutline className="left-icon" />
                <span className="left-icon-name">Profile</span>
              </Link>
              <Link to="/" className="left-link">
                <MoreHorizRounded className="left-icon" />
                <span className="left-icon-name">More</span>
              </Link>
          </div>
          <div className="btn-post" onClick={props.onShowNewPost}>Post</div>
        </nav>
      </aside>

      <footer>
        <div className="useraccount">
            <div className="photo">
              {/* <img className= "profile-img" alt="self" src="./prasad_image.jpg" /> */}
              <Avatar sx={avatarStyle}>{user.initials}</Avatar>
            </div>
            <div className='username'>
              <div className="name">{user.username}</div>
              <div className="userid">{user.email}</div>
            </div>
            <div className='logout'>
              <Tooltip title="Log Out)">
                <LogoutOutlined className="left-icon" onClick={logout}/>
              </Tooltip>
            </div>
        </div>
        
      </footer>
    </div>
  );
};
export default LeftSideBar;

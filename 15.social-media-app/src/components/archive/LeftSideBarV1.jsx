import './leftsidebar.css'
import {
    MenuOpen, Home, Tag, FlutterDash, NotificationsNone, MailOutline, BookmarkBorder, List, PersonOutline, MoreHorizRounded
  } from "@mui/icons-material";
import { useState } from 'react';
import {Link} from 'react-router-dom'



const LeftSideBar = () => {
    const [showSidebar , setShowSideBar] = useState(false);
  return (
    <div className = {`leftsidebar ${showSidebar ? "space-toggle" : null }`} >
        <header className={`header ${showSidebar ? "space-toggle" : null }`}>
            <div className="header-toggle" onClick={()=> setShowSideBar(!showSidebar)}>
                <MenuOpen/>
            </div>
        </header>
        <aside className ={`sidebar ${showSidebar ? 'show' :null }`}>
            <nav>
                <div>
                    <Link to="/" className="app-link">
                        <FlutterDash className="app-icon" />
                        <span className="app-icon-name">Flutter</span>
                    </Link>

                    <div className="nav-list">
                        <Link to="/" className='left-link'>
                            <Home className="left-icon" />
                            <span className="left-icon-name">Home</span>
                        </Link>
                        <Link to="/" className='left-link'>
                            <Tag className="left-icon" />
                            <span className="left-icon-name">Explore</span>
                        </Link>
                        <Link to="/" className='left-link'>
                            <NotificationsNone className="left-icon" />
                            <span className="left-icon-name">Notifications</span>
                        </Link>
                        <Link to="/" className='left-link'>
                            <MailOutline className="left-icon" />
                            <span className="left-icon-name">Messages</span>
                        </Link>
                        <Link to="/" className='left-link'>
                            <BookmarkBorder className="left-icon" />
                            <span className="left-icon-name">Bookmarks</span>
                        </Link>
                        <Link to="/" className='left-link'>
                            <List className="left-icon" />
                            <span className="left-icon-name">Lists</span>
                        </Link>
                        <Link to="/" className='left-link'>
                            <PersonOutline className="left-icon" />
                            <span className="left-icon-name">Profile</span>
                        </Link>
                        <Link to="/" className='left-link'>
                            <MoreHorizRounded className="left-icon" />
                            <span className="left-icon-name">More</span>
                        </Link>
                    </div>
                </div>
                <button className="btn-large">Tweet</button>
            </nav>
        </aside>
        
        <footer>
            <div class="useraccount">
                    <button className="account">
                        <div className="photo">
                        <img
                            alt="Prasad"
                            src=""
                        />
                        </div>
                        <div>
                            <div className="name">Prasad</div>
                            <div className="username">@prasadn</div>
                        </div>
                    </button>
            </div>
        </footer>   

    </div>
  )
}
export default LeftSideBar
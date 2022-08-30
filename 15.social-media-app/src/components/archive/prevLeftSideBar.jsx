import './leftsidebar.css'
import {
    Home, Tag, FlutterDash, NotificationsNone, MailOutline, BookmarkBorder, List, PersonOutline, MoreHorizRounded
  } from "@mui/icons-material";


import React from 'react'

const LeftSideBar = () => {
  return (
    <div className='leftsidebar'>
        <div className="left-container">
            <ul className= "left-list">
                <li className="listitem">
                    <FlutterDash className="left-icon" />
                    <span className="left-icon-text">Social</span>
                </li>
                <li className="listitem">
                    <Home className="left-icon" />
                    <span className="left-icon-text">Home</span>
                </li>
                <li className="listitem">
                    <Tag className="left-icon" />
                    <span className="left-icon-text">Explore</span>
                </li>
                <li className="listitem">
                    <NotificationsNone className="left-icon" />
                    <span className="left-icon-text">Notifications</span>
                </li>
                <li className="listitem">
                    <MailOutline className="left-icon" />
                    <span className="left-icon-text">Messages</span>
                </li>
                <li className="listitem">
                    <BookmarkBorder className="left-icon" />
                    <span className="left-icon-text">Bookmarks</span>
                </li>
                <li className="listitem">
                    <List className="left-icon" />
                    <span className="left-icon-text">Lists</span>
                </li>
                <li className="listitem">
                    <PersonOutline className="left-icon" />
                    <span className="left-icon-text">Profile</span>
                </li>
                <li className="listitem">
                    <MoreHorizRounded className="left-icon" />
                    <span className="left-icon-text">More</span>
                </li>
            </ul>
            <button className="btn-large">Tweet</button>

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
      </div>
    </div>
  )
}

export default LeftSideBar
import { Avatar } from '@mui/material';
import './rightsidebar.css'

const RightSideBar = () => {
  const avatarStyle = {
    fontSize: "0.9rem",
    height:32,
    width:32
};
  return  (
    <div className='rightsidebar'>
      <div className="rightsb-container">
        <div className="post-popular">
            <div className="section-title">Top Recent Posts</div>
            <div className="section-details">
              <div className="section-detail">
                <p className='post-title'>Kohli is back </p>
                <p className='like-count'>2000 likes</p>
              </div>
              <div className="section-detail">
                <p className='post-title'>Can India win T-20 World cup ? </p>
                <p className='like-count'>2000 comments</p>
              </div>
            </div>
        </div>
        <div className="people-follow">
          <div className="section-title">Who to follow</div>
          <div className="section-details">
            <div className="section-detail">
              {/* <img className="user-image" src="/assets/person/prasad_image.jpg" alt="" /> */}
              <Avatar className='avatar' sx={avatarStyle}>MR</Avatar>
              <span className='to-follow-name'>Mark Ruffalo</span>
              <div className="btn-follow">Follow</div>
            </div>
            <div className="section-detail">
              {/* <img className="user-image" src="/assets/person/prasad_image.jpg" alt="" /> */}
              <Avatar className='avatar' sx={avatarStyle}>RD</Avatar>
              <span className='to-follow-name'>Robert  Downey Jr</span>
              <div className="btn-follow">Follow</div>
            </div>
            <div className="section-detail">
              {/* <img  className="user-image" src="/assets/person/prasad_image.jpg" alt="" /> */}
              <Avatar className='avatar' sx={avatarStyle}>SE</Avatar>
              <span className='to-follow-name'>Steve Evans</span>
              <div className="btn-follow">Follow</div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
};

export default RightSideBar


        
import './newpost.css';
import { useState,useContext, useRef,forwardRef } from 'react';
import { AuthContext } from '../../State/AuthContext';
import {
  ClearOutlined,
  LabelOutlined,
  SentimentSatisfiedAltOutlined,
} from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewPost = ({showClosebtn,onClose,getNewFeed}) => {
  const { user } = useContext(AuthContext);
  const postText = useRef();
  const avatarStyle = {
    fontSize: "1rem",
    height:32,
    width:32
  };
  // MuiAlert
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
 
  const savePost = (e) => {
    e.preventDefault();
    let allPosts = JSON.parse(localStorage.getItem('allPosts')) || []; // if null - VERY first Get for app
    let maxPostID = Math.max(...allPosts.map(post => post.postID)) || 0 ; // if null - first fetch
    const newPost = {
      postID: maxPostID + 1,
      postedByName: user.username,
      postedByInitials: user.initials,
      postedByemailID: user.email, // unique user ID
      postedByUsrID: '',
      postMsg: postText.current.value,
      likeCount: null,
      createdOn: Date.now(), //Timestamp
      updatedOn: null,
    };
    allPosts.push(newPost);
    localStorage.setItem('allPosts', JSON.stringify(allPosts));
    // MUI Alert Message
    setOpen(true);
    // alert('Post Successful');
    postText.current.value ='';//clear text
    getNewFeed();// Refresh the feed now

  };

  return (
    <div className="post">
      <div className="post-container">
        <form className="post-form" onSubmit={savePost}>
          <div className="post-top">
            <Avatar sx={avatarStyle} >{user.initials}</Avatar>
            <textarea
              placeholder={`What's up -  ${user.username} ?`}
              className="postInput"
              maxLength={280}
              rows={4}
              wrap="hard"
              ref={postText}
            />
            {
              showClosebtn && <ClearOutlined className='icon-response' fontSize='small' onClick={onClose}/>
            }
            
          </div>
          <hr className="postSeparator" />
          <div className="post-bottom">
            <div className="postOptions">
              <div className="postOption">
                <Tooltip title="Tag (Not Functional)">
                  <LabelOutlined className="postIcon" fontSize='small' />
                </Tooltip>
              </div>
              <div className="postOption">
                <Tooltip title="Emojis (Not Functional)">
                  <SentimentSatisfiedAltOutlined className="postIcon"  fontSize='small'/>
                </Tooltip>
              </div>
            </div>
            <button className="postButton" type="submit">
              Post
            </button>
          </div>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Comment Posted Successfuly!
        </Alert>
      </Snackbar>
      
    </div>
  );
};

export default NewPost;

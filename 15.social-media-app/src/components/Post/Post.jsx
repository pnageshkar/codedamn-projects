import './post.css'
import { FavoriteBorder,Favorite, ModeCommentOutlined, ClearOutlined} from '@mui/icons-material'
import {format} from 'timeago.js';
import { useContext, useEffect, useState } from "react";
import {AuthContext} from '../../State/AuthContext';
import { Avatar, Tooltip } from '@mui/material';
import { pink } from '@mui/material/colors';

const Post = ({post,removePost,updLikeCount}) => {
    const [likeCount, setLikeCount] = useState(post.likeCount ? post.likeCount : 0);
    const [isLiked, setIsLiked] = useState(false);
    //const [user, setUser] = useState({});
    const { user } = useContext(AuthContext);
    const avatarStyle = {
        fontSize: "0.9rem",
        height:28,
        width:28
    };
    
    useEffect(() => {
        updLikeCount(post.postID,likeCount);
    },[likeCount]);

    const likeCountHandler = ()=> {
        // console.log(`before clicking 'Like' -value : ${isLiked} and  LikeCount: ${likeCount}`);
        // console.log(`after clicking 'Like' -value : ${isLiked}`)
        setLikeCount(isLiked ? likeCount=>likeCount - 1 : likeCount=>likeCount + 1);
        setIsLiked(!isLiked);
        // console.log(`after clicking 'Like', LikeCount: ${likeCount}`)
        // console.log(post.postID,likeCount);
    }

    return (
        <div className='post'>
            <div className="post-container">
                <div className="post-header">
                    <div className="head-left">
                        <Avatar className='avatar' sx={avatarStyle}>{post.postedByInitials}</Avatar>
                        <span className= "user-name">{post.postedByName} </span>
                        <span className= "user-id">{post.postedByemailID} </span>
                        <span className= "post-time">{format(post.createdOn)}</span>
                    </div>
                    {/* {console.log(post.postedByemailID,user.email)} */}
                    { post.postedByemailID === user.email  ?
                        (
                        <div className="head-right" onClick={() => removePost(post.postID)}>
                            <Tooltip title="Delete Post">
                                <ClearOutlined className='icon-response' fontSize='small'/>
                            </Tooltip>
                        </div>
                        ) :
                        ''
                        
                    } 
                </div>
                <div className="post-main">
                    <span className="post-text">{post.postMsg}</span>
                </div>
                <div className="post-footer">
                    <div className="foot-left">
                        <div className='post-response'>
                            {
                                isLiked ? <Favorite style={{ color:pink[300] }} className='icon-response' fontSize='small' onClick={likeCountHandler}/>
                                :
                                <FavoriteBorder className='icon-response' fontSize='small' onClick={likeCountHandler}/>
                            }
                            <span className="likeCounter">{likeCount ? likeCount : ''}</span>
                        </div>
                        <div className='post-response'>
                            <Tooltip title="Comment (Not Functional)">
                                <ModeCommentOutlined className='icon-response' fontSize='small'/>
                            </Tooltip>
                            <span className="replyCounter">3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Post
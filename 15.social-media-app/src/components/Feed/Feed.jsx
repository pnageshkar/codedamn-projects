import Post from '../Post/Post'
import NewPost from '../NewPost/NewPost'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../State/AuthContext";
import './feed.css'

const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  const [newFeed, setNewFeed] = useState(false);
  const { user } = useContext(AuthContext);

 
  useEffect(()=> {
    let allPosts = JSON.parse(localStorage.getItem('allPosts')) || [];
    allPosts.sort((post1, post2) => {
      return new Date(post2.createdOn) - new Date(post1.createdOn);
    }) //sort the posts based on time-line
    setPosts(allPosts)

  },[newFeed])

  const deletePost = (postid)=> {
    let updatedPosts = posts.filter((post)=> post.postID !== postid)
    setPosts(updatedPosts)
    localStorage.setItem('allPosts',JSON.stringify(updatedPosts))
    runFreshFeed();//trigger re-render
  }
  
  const runFreshFeed =()=> {
    setNewFeed(newFeed => !newFeed)
  }

  const updateLikeCount = (postid,newlikeCount) => {
  
    const updatedPosts = posts.map((post) => {
      if (post.postID === postid) {
        return {...post, likeCount:newlikeCount};
      } else {
        return post;
      }})
    setPosts(updatedPosts)
    // use updatedPosts instead of posts because useState update is asynchronous 
    localStorage.setItem("allPosts",JSON.stringify(updatedPosts))
    //  setNewFeed(!newFeed)//  TBD:is it needed ?
  }

  return (
    <div className='feed'>
      <div className="feed-container">
        { user ? <NewPost  showClosebtn= {false} onClose={false}  getNewFeed= {runFreshFeed}/> : ''}
        
        { posts.length ?
          posts.map((indpost) => <Post key= {indpost.postID} post={indpost} removePost={deletePost}  updLikeCount = {updateLikeCount}/>)
          :
          'No Posts Created So far'
         }
      </div>
      
    </div>
  )
}

export default Feed
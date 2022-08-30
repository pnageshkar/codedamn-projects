import { useState, useContext } from 'react';
// import { AppContext } from './State/AppContext';
import Feed from '../../components/Feed/Feed';
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar';
import NewPostModal from '../../components/NewPost/NewPostModal';
import RightSideBar from '../../components/RightSideBar/RightSideBar';

import './home.css';

const Home = () => {
  const [showNewPost, setShowNewPost] = useState(false);
  // const [feedToggle, setFeedToggle] = useState(false);

  // const updateFeed = () => {
  //   setFeedToggle(!feedToggle);
  //   alert(feedToggle) //every change will rerender feed
  // };

  const showNewPostHandler = () => {
    setShowNewPost(true);
  };
  const hideNewPostHandler = () => {
    setShowNewPost(false);
  };

  return (
    <div className="main-container">
      {showNewPost && (
        // <NewPostModal onClose={hideNewPostHandler} getNewFeed={updateFeed} />
        <NewPostModal onClose={hideNewPostHandler}  />
      )}
      <LeftSideBar onShowNewPost={showNewPostHandler} />
      {/* <Feed toggleFeed={feedToggle} getNewFeed={updateFeed} /> */}
      <Feed />
      <RightSideBar />
    </div>
  );
};

export default Home;

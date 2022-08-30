import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import NewPost from './NewPost';
import './newpostmodal.css';


const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      {/* <NewPost showClosebtn= {true} onClose={props.onClose} getNewFeed = {props.getNewFeed}/> */}
      <NewPost showClosebtn= {true} onClose={props.onClose} />
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const NewPostModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        // <ModalOverlay onClose={props.onClose} getNewFeed = {props.getNewFeed}/>
        <ModalOverlay onClose={props.onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default NewPostModal;
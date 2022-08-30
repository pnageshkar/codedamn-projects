
import { Link } from 'react-router-dom';
import './pagenotfound.css'

const PageNotFound = () => {
  return (
    <div class="pagenotfound">
      <h1>404</h1>
      <h3> Sorry, This Page does not exist !</h3>
      <p>
      <Link to= "/" >Return Home</Link>
      </p>
    </div>

  )
};


export default PageNotFound;

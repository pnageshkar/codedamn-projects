import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <h1 className='text-9xl'>404</h1>
      <h3 className='text-7xl mb-6'> Sorry, This Page does not exist !</h3>
      <p>
      <Link to= "/" >Return Home</Link>
      </p>
    </div>

  )
};


export default PageNotFound;
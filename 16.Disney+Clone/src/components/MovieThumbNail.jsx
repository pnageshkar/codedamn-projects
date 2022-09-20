import React from 'react'

function MovieThumbNail({key,movie}) {
  return (
 
    <div className='min-w-[200px] rounded-lg mx-2 shadow-xl cursor-pointer border-2 border-slate-800 border-opacity-10 hover:rounded-lg transform hover:scale-110   transition duration-300'>
       <img className="h-full w-full rounded-lg"
        src={movie.cardImg}
        objectfit="cover"
        alt={movie.title}
        />
    </div>
    
  );
}

export default MovieThumbNail
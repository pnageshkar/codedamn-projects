import React from 'react';
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieThumbNail from './MovieThumbNail'

function MovieCollection({category,movlist}) {
  // console.log(category);
  // console.log(movlist);
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  let sectionHeading;
  switch (category) {
    case 'recommend' :
      sectionHeading = 'Recommended for You';
      break;
    case 'new' :
      sectionHeading = 'New to Disney+';
      break;
    case 'original' :
      sectionHeading = 'Originals';
      break;
    case 'trending' :
      sectionHeading = 'Trending';
      break;
    default:
       break;
  } 

  return (
      <div className='w-11/12  relative flex flex-col space-y-2 my-10  mx-auto '>
        <h2 className="font-semibold">{sectionHeading}</h2>
    
          <Slider {...sliderSettings} >
            {movlist?.filter((movie_item)=> movie_item.type === category)?.map((movie) => (
                <MovieThumbNail key={movie.id} movie={movie} />
            ))}
          </Slider>
      </div>
  )
}

export default MovieCollection
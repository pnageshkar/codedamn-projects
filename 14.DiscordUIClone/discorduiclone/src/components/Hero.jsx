import React from 'react'
import Navbar from '../components/Navbar';
import LeftHeaderImg from '../assets/left_bg_landing_header.svg';
import RightHeaderImg from '../assets/right_bg_landing_header.svg';
import CenterHeaderImg from '../assets/center_bg_landing_header.svg';

const Hero = () => {
  return (
    <div className="flex flex-col items-center relative min-h-[626px] h-full w-full mx-auto bg-ultraBlue text-white">
        <Navbar />
        <div id="hero-content" className='z-10 mx-auto flex flex-col items-start lg:items-center justify-between w-11/12 pt-8 md:pt-12 lg:pt-32'>
          <h3 className='w-full font-heading font-bold text-white text-left text-3xl md:text-5xl lg:text-center lg:text-[3.5rem] z-10 px-4  '>
            IMAGINE A PLACE...
          </h3>
          <p className='text-left md:text-left lg:text-center w-full md:w-2/3 mt-4 md:mt-8  text-sm sm:text-base leading-8 md:leading-9 lg:leading-10  lg:text-xl z-10   px-4'>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className=" z-10 flex flex-col items-start space-y-4 lg:flex-row lg:items-center lg:justify-center lg:space-x-6 lg:space-y-0 w-full  mx-auto  mt-4 sm:mt-6 ">
            <button className="flex items-center justify-center text-sm sm:text-xl font-medium  py-3 px-6 md:py-4 md:px-8 space-x-2  bg-white text-black rounded-full  hover:text-ultraBlue">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="icon-2tQ9Jt mr-2"
              >
                <g fill="currentColor">
                  <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                  <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                </g>
              </svg>
              <span className="">Download for Windows</span>
            </button>

            <button className=" text-center text-sm sm:text-xl font-medium py-3 px-6 md:py-4 md:px-8 text-white bg-black hover:bg-[#36393f] rounded-full ">
              <span className="">Open Discord in your browser</span>
            </button>
          </div>
          <div id="hero-images" className=" bg-ultraBlue" >
            <img className="object-[-90px] h-[200px]  absolute bottom-0 md:hidden lg:block lg:h-[352px] lg:left-1/2 lg:ml-[-930px] z-[2]" src={LeftHeaderImg} alt="left background"/>
            <img className="hidden absolute md:block md:bottom-0 md:top-auto md:left-0 z-0" src={CenterHeaderImg} alt="Center background"/>
            <img className="hidden absolute md:block bottom-0 left-1/2 z-[2] lg:ml-[380px]" src={RightHeaderImg} alt="Right background"/>
          </div>

        </div>
        
    </div>
  )
}

export default Hero
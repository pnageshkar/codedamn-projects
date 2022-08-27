import React from 'react';
import LeftHeaderImg from '../assets/left_bg_landing_header.svg';
import RightHeaderImg from '../assets/right_bg_landing_header.svg';
import CenterHeaderImg from '../assets/center_bg_landing_header.svg';

const Main = () => {
  return (
    <div className=" w-full mx-auto  p-2 relative overflow-hidden bg-ultraBlue text-white">
      <div className="z-10 mx-auto flex flex-col items-center justify-between mt-10 md:mt-15">
          <h1 className='w-full text-white md:text-6xl md:text-center text-left text-3xl sm:text-4xl px-4  font-bold'>
            IMAGINE A PLACE...
          </h1>
          <p className='w-full md:w-3/4 lg:w-1/2 text-white md:mt-8 mt-4 sm:leading-8 leading-7 sm:text-base text-sm  tracking-normal md:text-center text-left px-4'>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div className=" z-10 flex flex-col md:flex-row items-center justify-center space-x-4 w-full xl:w-3/5  mx-auto mt-8 mb-8 pb-40">
            <button className="flex items-center justify-center  sm:w-6/12 md:w-5/12 lg:w-4/12 py-3 px-6 space-x-3 bg-white text-black rounded-full shadow-sm hover:text-ultraBlue">
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
              <span>Download for Mac</span>
            </button>

            <button className="sm:w-6/12 md:w-5/12 lg:w-4/12  py-3 px-6 text-white bg-black rounded-full shadow-sm">
              <p>Open Discord in your browser</p>
            </button>
          </div>
        
      </div>
      <div className="overflow-hidden">
        
        <img className="hidden absolute md:block bottom-0  z-0" src={CenterHeaderImg} alt="center background"/>
        <img className="object-[-90px] absolute bottom-0 md:hidden lg:block lg:h-[352px] lg:left-1/2 lg:ml-[-930px] z-[2]" src={LeftHeaderImg} alt="left background"/>
        <img className="hidden absolute md:block bottom-0 left-1/2 z-[2] lg:ml-[380px]" src={RightHeaderImg} alt="Right background"/>          
                   
                   
                    {/* <img className="object-[-90px] absolute bottom-0 md:hidden lg:block lg:h-[352px] lg:left-1/2 lg:-ml-[1030px] z-[2]" src={LeftHeaderImg} alt="left background"/>
                    <img className="hidden absolute md:block bottom-0 left-1/2 z-[2] lg:ml-[370px]" src={RightHeaderImg} alt="Right background"/>
                    <img className="hidden absolute md:block bottom-0 z-0" src={CenterHeaderImg} alt="center background"/> */}
                
      
        {/* <LeftHeaderImg className='block sm:hidden md:block w-72 md:w-1/2 xl:w-1/3 2xl:w-1/3 3xl:w-1/4 md:h-96 z-10 absolute bottom-0 md:-left-48 3xl:ml-112 sm:-ml-48 xl:ml-28 -mt-60 ' />
        <CenterHeaderImg className='hidden md:block z-0 absolute bottom-0 right-0 mt-10' />
        <RightHeaderImg className='hidden sm:block md:w-1/2 md:h-64 xl:h-80 z-10 absolute bottom-0 right-0 -mr-48' /> */}
        {/* <img
          src={LeftHeaderImg}
          alt="leftHeaderImage"
          className="block sm:hidden md:block w-72 md:w-1/2 xl:w-1/3 2xl:w-1/3 3xl:w-1/4 md:h-96 z-10 absolute bottom-0 md:-left-48 3xl:ml-112 sm:-ml-48 xl:ml-28 -mt-60 "
        /> */}

        {/* 1.Left Image - should be hidden between md-768 and lg-1024 
        2.Center Image should be hidden lower than 768
        3.Right Image should be hidden lower than 768 */}

        {/* <img
          src={centerBgLandingHeader}
          alt="centerBgLandingHeader"
          className="block absolute left-1/2 top-auto bottom-[-20px] sm:bottom-0 ml-[-880px] max-w-none"
        /> */}
        {/* 
        <img
          src={RightBgLandingHeader}
          alt="right_bg_landing_header"
          className="block absolute bottom-0 left-1/2 ml-[370px]"
        /> */}
      </div>
    </div>
  );
};

export default Main;

import React from 'react'
import InviteOnly from "../assets/invite_only_landing.svg"
import HangingOut from "../assets/hanging_out_easy_landing.svg"
import Fandom from "../assets/fandom_landing.svg"
import JustChilling from "../assets/just_chiling_landing.svg"
import TinyStars from "../assets/tiny_stars_landing.svg"


const Features = () => {
  return (
    <div className='h-full w-full '>
        <div className='max-w-screen-xl mx-auto px-6 py-14 md:py-20 lg:py-30  grid gap-x-5 gap-y-0 grid-cols-4 md:grid-cols-8 lg:grid-cols-12'>
            <img src={InviteOnly} alt="Invite Only" className='object-cover mt-6 col-span-full md:col-span-4 lg:col-span-7' />
            <div className='text-start flex flex-col justify-center items-start md:col-start-5 lg:col-start-9 col-span-full '>
                <h2 className=' font-bold [font-size:clamp(20px,4vw,40px)] md:text-5xl leading-loose '>Create an invite-only place where you belong</h2>
                <p className='mt-6 leading-relaxed [font-size:clamp(16px,2vw,20px)]'>Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.</p>
            </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-6 py-14 md:py-20 lg:py-30  grid gap-x-5 gap-y-0 grid-cols-4 md:grid-cols-8 lg:grid-cols-12 bg-softGray'>
            <img src={HangingOut} alt="Hanging Out" className='order-2 object-cover mt-6 col-span-full md:col-start-5 lg:col-start-6' />
            <div className='text-start flex flex-col justify-center items-start col-span-full md:col-span-4 lg:col-span-5'>
                <h2 className=' font-bold [font-size:clamp(20px,4vw,40px)] md:text-5xl leading-loose '>Where hanging out is easy</h2>
                <p className='mt-6 leading-relaxed [font-size:clamp(16px,2vw,20px)]'>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </div>
        </div>

        <div className='max-w-screen-xl mx-auto px-6 py-14 md:py-20 lg:py-30  grid gap-x-5 gap-y-0 grid-cols-4 md:grid-cols-8 lg:grid-cols-12'>
            <img src={Fandom} alt="Get Fandom" className='object-cover mt-6 col-span-full md:col-span-4 lg:col-span-7' />
            <div className='text-start flex flex-col justify-center items-start md:col-start-5 lg:col-start-9 col-span-full '>
                <h2 className=' font-bold [font-size:clamp(20px,4vw,40px)] md:text-5xl leading-loose '>From a few to fandom</h2>
                <p className='mt-6 leading-relaxed [font-size:clamp(16px,2vw,20px)]'>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </div>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 py-14 md:py-20 md:px-10 lg:py-30 text-left bg-softGray">
            <h2 className="[font-size:clamp(20px,4vw,40px)] md:text-center font-bold font-heading md:text-4xl leading-loose uppercase">
                Reliable tech for staying close
            </h2>
            <div className="mt-6 [font-size:clamp(16px,2vw,20px)] text-[#23272a] md:text-center md:px-16 xl:px-20 2xl:px-52">
                Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
            </div>
            <img className="w-full mt-6 xl:h-[735px]" src={JustChilling} alt="Just chilling"/>
        </div>

        <div className="w-full flex flex-col  items-center bg-softGray">
            <div className="w-full relative flex flex-col flex-wrap justify-center items-center  mb-14 md:mb-20 lg:mb-30">
                <div className=" w-full flex justify-center absolute top-0 overflow-hidden ">
                    <img className=" h-12  " src={TinyStars} alt="tiny stars"/>
                </div>
            
                <h4 className="mt-8 font-bold text-4xl text-center z-10">Ready to start your journey?</h4>
                <div className="flex justify-center">
                    <div className="bg-softBlue w-full md:w-auto text-white text-xl py-4 px-8 rounded-[28px] flex justify-center items-center hover:shadow-lg hover:shadow-black/25 hover:bg-[#7289da] mt-10 ">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="icon-2tQ9Jt mr-2"><g fill="currentColor"><path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path><path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path></g></svg>
                        <button className="font-medium">
                            Download for Windows
                        </button>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    
    
  )
}

export default Features
import React from 'react'
import Logo from "../assets/discord_main_logo.svg";
import RegisterBg from "../assets/login_bg.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className='w-screen h-screen relative'>
        <img src={RegisterBg} alt="Background" className='fixed h-full w-full left-0 top-0 -z-10' />
        <div className=" h-full w-full bg-darkCharcoal md:bg-inherit md:z-10">
            <div className="absolute w-full flex justify-center pt-20 md:justify-start z-100">
                <img className="md:pl-8 md:fixed md:top-5" src={Logo} alt="Logo"/>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center ">
                <form className=" w-full max-w-[480px] p-8  rounded-md bg-darkCharcoal z-10">
                    <div className="flex flex-col justify-center text-center w-full ">
                        <h3 className="mb-2 text-white text-center font-bold text-2xl">Create an account</h3>
                        <div className="w-full mt-7 text-left">
                            <div className="mb-5">
                                <h5 className="text-[#b9bbbe] mb-2 font-medium text-sm w-full uppercase">Email</h5>
                                <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde]" type="email" />
                            </div>
                            <div className="mb-5">
                                <h5 className="text-[#b9bbbe] mb-2 font-medium text-sm w-full uppercase">UserName</h5>
                                <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde]" type="text" />
                            </div>
                            <div>
                                <h5 className="text-[#b9bbbe] mb-2 font-medium text-sm uppercase">Password</h5>
                                <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde] focus:border-none" type="password"/>
                            </div>
                        </div>
                       
                        <Link to="/dashboard">
                            <button className="text-white bg-[#5865F2] p-3 rounded-md mb-2 mt-12 w-full">
                                Continue
                            </button>
                        </Link>
                        <Link to="/login">
                            <div className="text-[#00AFF4] text-sm text-left ml-1">Already have an account?</div>
                        </Link>
                        
                    </div>

                   
                </form>

            </div>
        </div>
    </div>
  )
}

export default Register
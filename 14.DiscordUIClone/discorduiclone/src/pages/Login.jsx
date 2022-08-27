import React from 'react'
import { Link } from 'react-router-dom'
import QRCode from '../assets/qr_code.png'
import Logo from '../assets/discord_main_logo.svg'
import loginBg from '../assets/login_bg.svg'

const Login = () => {
  return (
    <div className='w-screen h-screen relative'>
        <img src={loginBg} alt="Background" className='fixed h-full w-full left-0 top-0 -z-10' />
        <div className=" h-full w-full bg-darkCharcoal md:bg-inherit md:z-10">
            <div className="absolute w-full flex justify-center pt-20 md:justify-start z-100">
                <img className="md:pl-8 md:fixed md:top-5" src={Logo} alt="Logo"/>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center ">
                <form className="flex justify-center  md:justify-between items-center bg-darkCharcoal p-8 w-full max-w-[784px] rounded-md z-10">
                    <div className="flex flex-col text-center max-w-[480px] md:w-[416px] md:h-[380px] w-full">
                        <div>
                            <h3 className="mb-2 text-white text-left font-bold text-2xl">Welcome back!</h3>
                            <p className="font-normal text-base text-left text-[#b9bbbe]">We're so excited to see you again!</p>
                        </div>
                        <div className="w-full mt-7 text-left">
                            <div className="mb-5">
                                <h5 className="text-[#b9bbbe] mb-2 font-medium text-sm w-full uppercase">Email or Phone Number</h5>
                                <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde]" type="email" />
                            </div>
                            <div>
                                <h5 className="text-[#b9bbbe] mb-2 font-medium text-sm uppercase">Password</h5>
                                <input className="w-full p-[10px] h-10 border-none rounded-md bg-[#202225] text-[#dcddde] focus:border-none" type="password"/>
                            </div>
                        </div>
                        <div className="text-left mt-1 text-[#00AFF4] text-sm cursor-pointer w-fit mb-5">
                            Forgot your password?
                        </div>
                        <Link to="/dashboard">
                            <button className="text-white bg-[#5865F2] p-3 rounded-md mb-2 w-full">
                                Log in
                            </button>
                        </Link>
                        <div className="mt-1 flex items-center">
                            <span className="text-sm text-[#72767D]">Need an account?</span>
                            <Link to="/register">
                                <div className="text-[#00AFF4] text-sm ml-1">Register?</div>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden md:flex w-full flex-col justify-center items-center text-center md:h-[344px] md:w-[240px]">
                        <img className="h-[176px] w-[176px] mb-8" src={QRCode} alt="Qr code"/>
                        <h3 className="text-white font-bold mb-2 text-2xl">Log in with QR Code</h3>
                        <div className="text-[#b9bbbe]">Scan this with the <strong>Discord mobile app</strong> to log in instantly.</div>
                    </div>

                </form>

            </div>
        </div>
    </div>
  )
}

export default Login
import React from "react"
import { MdCancel,MdExpandMore,MdNotifications,MdInbox,MdOutlineSearch,MdMic,MdHeadset,MdSettings,MdAddCircle } from "react-icons/md"
import SideBar from "../components/SideBar";
import BlockUser from "../assets/blocked_users_icon.svg"
import { RiGroupFill,RiPushpinFill,RiQuestionFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

const Channels = () => {
    return (
        <div className="flex">
            <SideBar/>
            {/* Below div is the container for all areas to right of the Sidebar */}
            <div className="right-sect-wrap flex flex-1 flex-col min-h-screen h-screen">
                <div className= "top-wrap flex h-12">
                    <div className="top-channel bg-[#2F3136] text-white  w-60  flex-none flex items-center justify-between ">
                        <div className="text-base pl-4 font-semibold">newLine</div>
                        <div className="pr-4"><MdExpandMore color="#FFF" size="24"/></div>
                    </div>
                    <div className="top-toolbar bg-[#36393F] text-white border-b border-[#2B2D32] flex-1 flex items-center justify-between px-4">
                        <div className="flex items-center">
                            <div className="text-gray-500 font-semibold text-2xl">#</div>
                            <div className="text-base font-semibold ml-2 text-white">javascript</div>
                        </div>
                        <div className="flex items-center">
                            <MdNotifications color="#B9BBBE" size="24" className="ml-4"/>
                            <RiPushpinFill color="#B9BBBE" size="24" className="ml-4"/>
                            <RiGroupFill color="#B9BBBE" size="24" className="ml-4"/>
                            <div className="search-wrapper ml-4">
                                <form className="form-search flex justify-between items-center rounded bg-[#202225]">
                                    <input type="text" placeholder="Search" className="bg-[#202225]  text-sm px-2 py-0.5 focus:outline-none"/>
                                    <MdOutlineSearch color="#B9BBBE" size="20" className="mx-2"/>
                                </form>
                            </div>
                            <MdInbox color="#B9BBBE" size="24" className="ml-4"/>
                            <RiQuestionFill color="#B9BBBE" size="24" className="ml-4"/>
                        </div>
                    </div>
                </div>
                {/* All areas below the top-bar */}
                <div className="flex-1 flex overflow-y-hidden">
                    <div className="channel-wrap w-60  flex-none  flex flex-col justify-between bg-[#2F3136]">
                        <div className="overflow-y-auto scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-800 text-white">
                            <ul className="px-4 py-3">
                                <li class="text-[#B9BBBE] hover:text-gray-100 hover:bg-[#36393F]">
                                    <a href="#" className="flex items-center">
                                        <span class="text-2xl">#</span>
                                        <span class="ml-2 text-base">rules</span>
                                    </a>
                                </li>
                            </ul>
                            <button class="flex items-center text-[#B9BBBE] hover:text-gray-100 hover:bg-[#36393F]">
                                <MdExpandMore  />
                                <h3 class="uppercase tracking-wide font-bold text-xs">Text Channels</h3>
                            </button>
                            <ul class="px-2 py-3 pt-2">
                                <li class="text-[#B9BBBE] px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                        <span class="text-2xl">#</span>
                                        <span class="ml-2 text-base">general</span>
                                    </a>
                                </li>
                                <li class="text-[#B9BBBE] px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">algorithms</span>
                                    </a>
                                </li>
                                <li class="text-[#B9BBBE] px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">announcements</span>
                                    </a>
                                </li>
                                <li class="text-[#B9BBBE] px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">blogging</span>
                                    </a>
                                </li>
                                <li class="text-[#B9BBBE] px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">course ideas</span>
                                    </a>
                                </li>
                                <li class="text-[#B9BBBE] px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">collaborators</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">machine learning</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">machine learning</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">machine learning</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">machine learning</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">machine learning</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">machine learning</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">machine learning</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 py-1 hover:text-gray-100 hover:bg-[#36393F] rounded">
                                    <a href="#" class="flex items-center">
                                    <span class="text-2xl">#</span>
                                    <span class="ml-2 text-base">machine learning</span>
                                    </a>
                                </li>
                            </ul>
                          
                        </div>
                        <div className="Chan-bottom flex items-center justify-between px-3 py-3 bg-[#292B2F] text-white">
                            <div class="flex-1 flex items-center">
                                <div class="flex items-center ">
                                    <FaDiscord size="24" className="bg-softRed rounded-full w-10 h-10 p-2"/>
                                    <div className="ml-2">
                                        <div className="text-white text-sm">Prasad</div>
                                        <div className="text-[#b9bbbe] text-xs">#8454</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <MdMic color="#B9BBBE" size="20" className="ml-3"/>
                                <MdHeadset color="#B9BBBE" size="20" className="ml-3"/>
                                <MdSettings color="#B9BBBE" size="20" className="ml-3"/>
                            </div>
                        </div>
                    </div>
                    <div className="chat-friends-wrap flex-1 flex justify-between">
                        <div className="chat-wrap bg-[#36393F] flex-1  flex flex-col justify-between">
                            <div className="overflow-y-auto scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-800 text-[#dcddde]">
                                <div className="chat-item flex items-center gap-2 px-2 py-2 mr-1 mt-3 hover:bg-[#292b2f]">
                                    <div className="avatar ml-2 shrink-none">
                                        <FaDiscord size="24" className="bg-softRed rounded-full w-10 h-10 p-2"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                        <a href="#" className="text-[#00b0f4] text-base hover:underline">Prasad</a>
                                            <span className="text-[#b9bbbe] text-xs ml-2">8/22/2022</span>
                                        </div>
                                        <p>@Mehul Mohan When will  the next youtube live session be hosted ? Looking forward to it.</p>
                                    </div>
                                </div>
                                <div class="relative flex py-2 mx-4 items-center">
                                    <div class="flex-grow border-t border-gray-600"></div>
                                    <span class="flex-shrink mx-4 text-xs text-gray-400">8/23/2022</span>
                                    <div class=" flex-grow border-t border-gray-600"></div>
                                </div>
                                <div className="chat-item flex items-center gap-2 px-2 py-2 mr-1 mt-3 hover:bg-[#292b2f]">
                                    <div className="avatar ml-2 shrink-none">
                                        <FaDiscord size="24" className="bg-softOrange rounded-full w-10 h-10 p-2"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <a href="#" className="text-[#00b0f4] text-base hover:underline">Mehul Mohan</a>
                                            <span className="text-[#b9bbbe] text-xs ml-2">8/23/2022</span>
                                        </div>
                                        <p>I'll schedule it this week.</p>
                                    </div>
                                </div>
                                <div className="chat-item flex items-center gap-2 px-2 py-2 mr-1 mt-3 hover:bg-[#292b2f]">
                                    <div className="avatar ml-2 shrink-none">
                                        <FaDiscord size="24" className="bg-softGreen rounded-full w-10 h-10 p-2"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <a href="#" className="text-[#00b0f4] text-base hover:underline">Ameya</a>
                                            <span className="text-[#b9bbbe] text-xs ml-2">8/23/2022</span>
                                        </div>
                                        <p>@Senior Moderators can anyone tell me how the enrollment works in codedamn? 
if I enroll in a different course than the current one that im doing and keep going between the two courses back and forth, will only one of them be tracked?</p>
                                    </div>
                                </div>
                                <div className="chat-item flex items-center gap-2 px-2 py-2 mr-1 mt-3 hover:bg-[#292b2f]">
                                    <div className="avatar ml-2 shrink-none">
                                        <FaDiscord size="24" className="bg-softOrange rounded-full w-10 h-10 p-2"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <a href="#" className="text-[#00b0f4] text-base hover:underline">Mehul Mohan</a>
                                            <span className="text-[#b9bbbe] text-xs ml-2">8/23/2022</span>
                                        </div>
                                        <p>Both the courses will be tracked separately. Did you find any issues on the platform?</p>
                                    </div>
                                </div>
                                <div className="chat-item flex items-center gap-2 px-2 py-2 mr-1 mt-3 hover:bg-[#292b2f]">
                                    <div className="avatar ml-2 shrink-none">
                                        <FaDiscord size="24" className="bg-[#757E8A] rounded-full w-10 h-10 p-2"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <a href="#" className="text-[#00b0f4] text-base hover:underline">Guru</a>
                                            <span className="text-[#b9bbbe] text-xs ml-2">8/23/2022</span>
                                        </div>
                                        <p>hi All - please help me react restaurant project is also having problems in one lab its not ticking the challenges though app working the way it should be also i copied the code of solution then also its not ticking the test cases</p>
                                    </div>
                                </div>
                                <div className="chat-item flex items-center gap-2 px-2 py-2 mr-1 mt-3 hover:bg-[#292b2f]">
                                    <div className="avatar ml-2 shrink-none">
                                        <FaDiscord size="24" className="bg-softGreen rounded-full w-10 h-10 p-2"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <a href="#" className="text-[#00b0f4] text-base hover:underline">Ameya</a>
                                            <span className="text-[#b9bbbe] text-xs ml-2">8/23/2022</span>
                                        </div>
                                        <p>let me take a look</p>
                                    </div>
                                </div>
                                
                                <div className="chat-item flex items-center gap-2 px-2 py-2 mr-1 mt-3 hover:bg-[#292b2f]">
                                    <div className="avatar ml-2 shrink-none">
                                        <FaDiscord size="24" className="bg-softRed rounded-full w-10 h-10 p-2"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <a href="#" className="text-[#00b0f4] text-base hover:underline">Prasad</a>
                                            <span className="text-[#b9bbbe] text-xs ml-2">8/23/2022</span>
                                        </div>
                                        <p>I finished the discord UI clone -please review and give me your feedback</p>
                                    </div>
                                </div>
                                {/* hr divider with date */}
                                <div class="relative flex py-2 mx-4 items-center">
                                    <div class="flex-grow border-t border-gray-600"></div>
                                    <span class="flex-shrink mx-4 text-xs text-gray-400">8/24/2022</span>
                                    <div class=" flex-grow border-t border-gray-600"></div>
                                </div>
                                <div className="chat-item flex items-center gap-2 px-2 py-2 mr-1 mt-3 hover:bg-[#292b2f]">
                                    <div className="avatar ml-2 shrink-none">
                                        <FaDiscord size="24" className="bg-softOrange rounded-full w-10 h-10 p-2"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <a href="#" className="text-[#00b0f4] text-base hover:underline">Mehul Mohan</a>
                                            <span className="text-[#b9bbbe] text-xs ml-2">8/23/2022</span>
                                        </div>
                                        <p>All, Please complete all your tasks on the dashboard by Monday</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#40444B] h-12 mb-6 flex items-center mx-4 border-t border-gray-600 rounded-md">
                                <MdAddCircle color="#B9BBBE" size="24" className="ml-4"/>
                                <div className="flex-1">
                                    <input type="text" className="w-full text-sm h-10 px-2 py-2 bg-[#40444B] text-gray-200 focus:outline-none" />
                                </div>
                                <div class="px-2 py-2 bg-[#40444B] rounded-r flex items-center h-10">
                                    <button className="h-10 bg-[#40444B] rounded-l text-[#B9BBBE] hover:text-white">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm448-288h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40zm-72 320h160c17.7 0 32-14.3 32-32V320H288v160z"></path></svg>
                                    </button>
                                    <button className="h-10 bg-[#40444B]  rounded-l text-[#B9BBBE] hover:text-white ml-3">
                                        <svg className="w-6 h-6"
                                            aria-hidden='false'
                                            viewBox='0 0 24 24'
                                        >
                                            <path
                                            fill='currentColor'
                                            d='M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM9.76445 11.448V15.48C8.90045 16.044 7.88045 16.356 6.74045 16.356C4.11245 16.356 2.66045 14.628 2.66045 12.072C2.66045 9.504 4.23245 7.764 6.78845 7.764C7.80845 7.764 8.66045 8.004 9.32045 8.376L9.04445 10.164C8.42045 9.768 7.68845 9.456 6.83645 9.456C5.40845 9.456 4.71245 10.512 4.71245 12.06C4.71245 13.62 5.43245 14.712 6.86045 14.712C7.31645 14.712 7.64045 14.616 7.97645 14.448V12.972H6.42845V11.448H9.76445ZM11.5481 7.92H13.6001V16.2H11.5481V7.92ZM20.4724 7.92V9.636H17.5564V11.328H19.8604V13.044H17.5564V16.2H15.5164V7.92H20.4724Z'
                                            ></path>
                                        </svg>
                                    </button>
                                    <button className="h-10 bg-[#40444B]  rounded-l text-[#B9BBBE] hover:text-white ml-3">
                                        <svg
                                            className="w-6 h-6"
                                            xmlns='http://www.w3.org/2000/svg'
                                            viewBox='0 0 36 36'
                                        >
                                            <path
                                            fill='currentColor'
                                            d='M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18'
                                            />
                                            <ellipse fill='#40444B' cx='11.5' cy='12.5' rx='2.5' ry='5.5' />
                                            <ellipse fill='#40444B' cx='24.5' cy='12.5' rx='2.5' ry='5.5' />
                                            <path
                                            fill='#4044B'
                                            d='M18 22c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z'
                                            />
                                            <path fill='#FFF' d='M9 23s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z' />
                                        </svg>
                                    </button>
                 
                                </div>
                            </div>
                        
                        </div>
                        <div className="friends-wrap bg-[#2F3136] text-white w-60 px-3 py-6 flex-none overflow-y-auto scrollbar-thin scrollbar-track-neutral-700 scrollbar-thumb-neutral-800">
                            <h3 class="uppercase tracking-wide font-bold text-xs text-[#B9BBBE] mb-2">July 2022 Accelerator — 5</h3>
                            <ul class="mb-6 truncate">
                                <li class="text-white px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                                    <a href="#" class="flex items-center">
                                    <FaDiscord size="20" className="bg-softOrange rounded-full w-8 h-8 p-2"/>
                                    <span class="text-[#00b0f4] text-base ml-2">Aditya</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                                    <a href="#" class="flex items-center">
                                    <FaDiscord size="20" className="bg-softGreen rounded-full w-8 h-8 p-2"/>
                                    <span class="text-[#00b0f4] text-base ml-2">Mary</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                                    <a href="#" class="flex items-center">
                                    <FaDiscord size="20" className="bg-softRed rounded-full w-8 h-8 p-2"/>
                                    <span class="text-[#00b0f4] text-base ml-2">Prasad</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                                    <a href="#" class="flex items-center">
                                    <FaDiscord size="20" className="bg-blue-300 rounded-full w-8 h-8 p-2"/>
                                    <span class="text-[#00b0f4] text-base ml-2">Ramesh</span>
                                    </a>
                                </li>
                                <li class="text-white px-2 hover:text-gray-200 hover:bg-gray-750 py-1 my-2">
                                    <a href="#" class="flex items-center">
                                    <FaDiscord size="20" className="bg-gray-500 rounded-full w-8 h-8 p-2"/>
                                    <span class="text-[#00b0f4] text-base ml-2">Tehseen</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
    )
}

export default Channels;
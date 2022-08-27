import React from "react"
import { BsPlus} from 'react-icons/bs';
import { FiDownload} from 'react-icons/fi';
import {FaCompass, FaDiscord} from 'react-icons/fa';
import newLine from '../assets/new_line.png'


const SideBar = ({icon, text="tooltip 💡"}) => (
    <div className="flex flex-col items-center flex-none min-h-screen h-screen w-16 px-2 py-2  bg-[#202225] ">
       <div className="sidebar-icons">            
            <SideBarIcon icon={<FaDiscord size="28"/>} text="Direct Messages" name='discord'/>
            <Divider />
            <div className = "p-2 flex items-center cursor-pointer group">
                <img src={newLine} className='relative object-cover' alt="New Line" />
                <span class="sidebar-tooltip text-sm tracking-wide group-hover:scale-100">New Line</span>
            </div>
            
            <SideBarIcon icon={<BsPlus size="32" />} text="Add a Server"/>
            <SideBarIcon icon={<FaCompass  size="20" />} text="Explore Public Servers"/>
            <Divider />
            <SideBarIcon icon={<FiDownload  size="20" />} text="Download Apps"/>
        </div> 
        
    </div>
    
)

const SideBarIcon = ({icon, text,name} ) => {
    if (name ==='discord') {
        return (
            <div className="sidebar-icon bkg-discord group">
                {icon}
                <span class="sidebar-tooltip text-sm tracking-wide group-hover:scale-100">
                    {text}
                </span>
            </div>
        )
    } else {
        return (
            <div className="sidebar-icon bkg-rest group">
                {icon}
                <span class="sidebar-tooltip text-sm tracking-wide group-hover:scale-100">
                    {text}
                </span>
            </div>
        )

    }
};
  
  
  const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;
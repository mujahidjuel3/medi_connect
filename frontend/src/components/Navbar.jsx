import React, { useState } from 'react'
import Logo from "../assets/assets_frontend/logo.png"
import MenuIcon from "../assets/assets_frontend/menu_icon.svg"
import Profile_pic from "../assets/assets_frontend/profile_pic.png"
import CrossIcon from "../assets/assets_frontend/cross_icon.png"
import Dropdown_icon from "../assets/assets_frontend/dropdown_icon.svg"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-gray-400 border-b-2'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={Logo} alt='logo' />
        <ul className='hidden md:flex items-start font-medium gap-5'>
            <NavLink to='/'>
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ? 
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={Profile_pic} alt='profile' />
                    <img className='w-2.5' src={Dropdown_icon} alt='dropdown' />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('my-apoinment')} className='hover:text-black cursor-pointer'>My Apoinments</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
                </div>
                :<button onClick={()=>navigate('login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'> Create account</button>

            }
            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={MenuIcon} alt='' />
            {/*------ Mobile Menu------*/}
            <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
                <div className='flex items-center justify-between px-5 py-6'>
                    <img className='w-36' src={Logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={CrossIcon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
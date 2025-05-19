import React from 'react'
import Group_profiles from '../assets/assets_frontend/group_profiles.png';
import Arrow_icon from '../assets/assets_frontend/arrow_icon.svg';
import Header_image from '../assets/assets_frontend/header_img.png';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px=20'>
        {/*....Left side....*/}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                Book Apoinment <br />
                With Trusted Doctors
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={Group_profiles} alt='groupprofiles' />
                <p >
                  Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block'/> schedule your apoinment hassle-free.</p>
            </div>
            <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                Book apoinment <img className='w-3' src={Arrow_icon} alt='arrow' />
            </a>
        </div>

        {/*....Right side....*/}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={Header_image} alt='header_image' />
        </div>
    </div>
  )
}

export default Header
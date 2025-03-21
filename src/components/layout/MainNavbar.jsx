import React from 'react'
import { Outlet } from 'react-router-dom'
import {Help, Home, Jobs, Mentorship, RightArrow, Search, Toggle, User } from '../../icons/icon';


const MainNavbar = () => {
    return (
        <nav>
            <div className='bg-white shadow w-full'>
                <div className='flex items-center justify-between md:mx-20 p-1 md:p-0'>
                    {/* Logo for small and medium screens */}
                    <div className='block md:hidden'>
                        <img src="/images/c-nicon2.png" alt="Career-nexus icon" className='h-12 w-auto' />
                    </div>
                    <div className='hidden md:block'>
                        <img src="/images/c-nlogo.png" alt="Career-Nexus logo" className="h-16 w-auto" />
                    </div>

                    {/* Search Box */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden flex-grow mx-4 md:mx-10">
                        <div className="flex items-center pl-3">
                            <Search />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-grow py-2 px-1 border-0 focus:outline-none focus:ring-0 w-full"
                        />
                    </div>
                    {/* Navigation Links for Medium Screens and Up */}
                    <div className='hidden md:flex items-center justify-center space-x-4 mx-4 md:mx-20'>
                        <div className='flex flex-col items-center'>
                            <Home className='mx-auto' />
                            <h1 className='text-xs'>Home</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Mentorship className='mx-auto' />
                            <h1 className='text-xs'>Mentorship</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Jobs className='mx-auto' />
                            <h1 className='text-xs'>Jobs & Biz</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <User className='mx-auto' />
                            <h1 className='text-xs'>About</h1>
                        </div>
                        <div className='flex flex-col items-center'>
                            <Help className='mx-auto' />
                            <h1 className='text-xs'>Help & Support</h1>
                        </div>
                    </div>
                    {/* Profile Picture */}
                    <div className='flex items-center px-4'>
                        <img src="/images/profile.png" alt="Profile picture" className="h-10 w-auto rounded-full" />
                    </div>
                </div>
            </div>
            <Outlet />
        </nav>
    )
}

export default MainNavbar

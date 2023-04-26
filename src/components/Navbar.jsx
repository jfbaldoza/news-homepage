import React from 'react'
import logo from "../assets/logo.svg"

const Navbar = () => {
    return (
        <header className='flex items-center justify-between'>
            <div>
                <img className=' m-8 ' src={logo} alt="logo" />
            </div>
            <nav>
                <ul className='flex md:gap-4 text-grayishblue font-primary fixed left-[30%] flex-col py-[10rem] px-8 gap-3 bg-white'>
                    <li><a href="">Home</a></li>
                    <li><a href="">New</a></li>
                    <li><a href="">Popular</a></li>
                    <li><a href="">Trending</a></li>
                    <li><a href="">Categories</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
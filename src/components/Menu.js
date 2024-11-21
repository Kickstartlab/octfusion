import React, { useState } from 'react'
import top from '../assets/top.png';




export default function Menu() {

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }


  return (

    <header>


      <div className=''>

        <div className="lg:flex hidden items-center justify-between font-poppins text-white-100 h-28">
          <a href="/" className="flex items-center gap-x-2">
            <img src={top} alt="Logo" className='w-12' />
            <p className='text-2xl font-semibold'><span className='font-extrabold'>OCT</span>Fusion</p>
          </a>

          <nav>
            <ul className="text-md flex justify-center gap-8 items-center text-white-70">
              <li><a href="#about" className="text-zinc-100">About Us</a></li>
              <li><a href="#services" className=" cursor-pointer">Our Services</a></li>
              <li><a href="#clients" className="cursor-pointer">Our Clients</a></li>
              <li><a href="#contact" className="cursor-pointer">Contact us</a></li>
            </ul>
          </nav>

          <a href="/">
            <button className="rounded-2xl btn-gradient px-8 py-3">
              Get In Touch
            </button>
          </a>
        </div>

        <div className="text-3xl text-center pb-8 lg:hidden flex justify-between items-center py-5" onClick={ToggleSidebar} >

          <a href="/" className="flex items-center gap-x-2">
            <img src={top} alt="Logo" className='w-10' />
            <p className='text-lg font-semibold'><span className='font-extrabold'>OCT</span>Fusion</p>
          </a>

          <i className="fa fa-bars"></i>
        </div>

        <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
          <div className='p-5'>
            <div className="flex items-center justify-between" onClick={ToggleSidebar}>

              <a href="/" className="flex items-center gap-x-2">
                <img src={top} alt="Logo" className='w-10' />
                <p className='text-lg font-semibold'><span className='font-extrabold'>OCT</span>Fusion</p>
              </a>

              <i className="fa fa-times text-2xl"></i>
            </div>

            <div className="sd-body mt-24">
              <ul className='space-y-12'>
                <li><a onClick={ToggleSidebar} href="#about" className="text-zinc-100">About Us</a></li>
                <li><a onClick={ToggleSidebar} href="#services" className=" cursor-pointer">Our Services</a></li>
                <li><a onClick={ToggleSidebar} href="#clients" className="cursor-pointer">Our Clients</a></li>
                <li><a onClick={ToggleSidebar} href="#contact" className="cursor-pointer">Contact us</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>

    </header >
  )
}

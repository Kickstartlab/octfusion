import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';




export default function Footer() {
  return (
    <div className="py-5">
      <footer className='container text-white-100 mx-auto lg:px-20 font-russo px-5'>
          <div className="lg:flex items-center justify-between lg:space-y-0 space-y-6">

            <div className=''>
              <ul className="text-md flex flex-wrap justify-center gap-6 items-center">
                <li><a href="#about" className="">About Us</a></li>
                <li><a href="#services" className="">Our Services</a></li>
                <li><a href="#clients" className="">Our Clients</a></li>
                <li><a href="#contact" className="">Contact us</a></li>
              </ul>
            </div>

            <div className='flex gap-3 items-center justify-center'>
              <a href=''>
                <img src={twitter} alt='twitter'></img>
              </a>

              <a href=''>
                <img src={telegram} alt='telegram'></img>
              </a>

              <a href=''>
                <img src={discord} alt='discord'></img>
              </a>
            </div>

          </div>
        <p className='pt-12 pb-5 text-center'> © Copyrights, {new Date().getFullYear()} OTCFusion. All Right Reserved.</p>

      </footer>
    </div>

  )
}

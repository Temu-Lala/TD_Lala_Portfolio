import React from 'react'
import './Footer.css'
import { Telegram } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
function Footer() {
  return (
    <div className='logo w-full  bg-transparent'>

<footer class=" ">
  <div class="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
    <div class=" text-center  ">
      <h2 class="text-3xl font-extrabold text-white sm:text-5xl ">
Temesgen Debebe: Your Full-Stack Software Engineering Solution
</h2>

      <p class="mx-auto mt-4  text-white ">
      I am Temesgen Debebe, and I am your one-stop shop for all your software development needs. With my diverse skillset and passion for technology, I can bring your ideas to life through custom-built web applications, mobile apps, desktop software, and more.

Whether you are a small startup or a large enterprise, I have the expertise and experience to deliver high-quality software solutions that meet your specific requirements. I am adept at working with various technologies and frameworks, ensuring that your project is built on a solid and reliable foundation.
      </p>

      <a
        href="#"
        class="upbutton bg-black mt-8 inline-block w-fit mx-auto rounded-full border border-black px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
      >
        Go To Up
      </a>
    </div>

    <div
      class=" border-t border-gray-100 pt-3 sm:flex sm:items-center  gap-10 lg:mt-24"
    >
     <div class=" name  align-middle flex flex-row  font-bold lg:pl-40  gap-12 text-xl">
       <div class="gap-56">
        <a href='https://t.me/TD_lala'>
< Telegram class = " w-14 h-14 fill-white hover:fill-blue-800 hover:animate-bounce"/>
</a>
       </div>
       <div>
        <WhatsApp  class = " w-14 h-14 fill-white hover:fill-green-600 hover:animate-bounce"/>
        
       </div>
       <div>
        <Instagram class = " w-14 h-14 fill-white hover:fill-red-400 hover:animate-bounce"/>
        
       </div>
       <div>
       <a href='https://github.com/Temu-Lala'>

        <GitHub class = " w-14 h-14 fill-white hover:fill-black hover:animate-bounce "/>
        </a>
       </div>
          


            
          </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
import React, { useEffect, useRef } from 'react'
import './Hero.css'
import Navbar from './Navbar'
import Myphoto from '../img/myphoto.png'
import Hero_3D from './Hero_3D'
import { Canvas } from '@react-three/fiber'
import { extend } from '@react-three/fiber';
import { Telegram } from '@mui/icons-material'
import { WhatsApp } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { GitHub } from '@mui/icons-material'
import {motion} from 'framer-motion'
extend({
  Canvas 
});
function Hero() {
 
  
 
  return (
   

    <div class = "  hero h-screen w-screen flex flex-col   " >
   
      

      <div class="flex justify-centerz bg-transparent">
      <Navbar/>
      </div>

      <div class=" h-screen  flex  justify-center w-screen justify-items-center flex-col md:flex-row md:gap-16">
        <div  class="left  flex justify-start items-center w-full flex-1   ">       
           <div class=" justify-start items-center w-full gap-20 ">

          <div class="  ">
        
          <p class=" name font-bold text-2xl  md:text-6xl pl-12 md:pl-24 ">
            
          <p class=" pt-40 md:pt-12 text-6xl md:text-9xl text-red-500 "  >HI I'm</p>
          TEMESGEN  DEBEBE</p>
          </div>
          <div class=" ">
          <p class="name pl-12 md:pl-24"> # Welcome to My Portfolio!


          </p></div>
          <div class=" name w-40 h-40 align-middle flex flex-row  font-bold pl-5 md:pl-24 md:pt-20 gap-12  md:text-[20px]">
       <div class="">
        <a href='https://t.me/TD_lala'>
< Telegram class = " w-10 h-10 md:w-14 md:h-14 fill-white hover:fill-blue-800 hover:animate-bounce"/>
</a>
       </div>
       <div>
        <WhatsApp  class = " w-10 h-10 md:w-14 md:h-14 fill-white hover:fill-green-600 hover:animate-bounce"/>
        
       </div>
       <div>
        <Instagram class = "w-10 h-10 md:w-14 md:h-14 fill-white hover:fill-red-400 hover:animate-bounce"/>
        
       </div>
       <div>
       <a href='https://github.com/Temu-Lala'>

        <GitHub class = " w-10 h-10 md:w-14 md:h-14 fill-white hover:fill-black hover:animate-bounce "/>
        </a>
       </div>
          


            
          </div>
          
        </div>
        </div>

        <div class="photo flex  w-full flex-1    ">

<img class=" right-side" src={Myphoto} />

        </div>
      </div>
    </div>
  )
}

export default Hero
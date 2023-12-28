import React from 'react'
import lala from '../img/lala2.png'
import ss from '../img/ss.png'
import ss2 from '../img/ss2.jpg'
import ss3 from '../img/ss3.png'
import cisco from '../img/cisco.jpg'
import rotate from '../img/rotate.gif'
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Bluehome from '../img/bluhome.png'
import { Link } from 'react-router-dom'
import './Who.css'
function Who() {
  return (
    <div id='who' className = " w-screen h-screen content-center items-center self-center relative  flex  flex-col  lg:flex-col gap-4 px-12 overflow-scroll">
    <div className='lg:h-[60vh] w-full flex flex-col lg:flex-row content-center items-center self-center justify-center gap-5'>
    <div class="container-card">
    <div class="group panel rounded-xl">
      <div className='absolute border border-solid bg-white w-64 lg:w-3/4  border-r-4 rounded-md text-center bottom-10 left-1/2 transform -translate-x-1/2 title-main z-10 group-hover:z-[-1] transition-all duration-300 text-blue-400'>Lala Live Chat</div>
      <div class="ring rounded-xl">
        <div class="card card1 relative rounded-xl"></div>
        
        <div class="border-card">
          <div class="slide z-20">
            <h6 class="para text-5xl font-semibold">Lala Live Chat</h6>
            <p className='para px-2'>This project is a real-time live chat application built with the following technologies</p>

           <div className='flex justify-center gap-5 lang'>
           <div className='tech'>
              <p className='para font-bold'>Frontend</p>
              <ul className='para'>
                <li>React</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className='tech'>
              <p className='para font-bold'>Backend</p>
              <ul className='para'>
                <li>Node.js</li>
                <li>Socket.io</li>
                <li>MySQL</li>
              </ul>
            </div>
           </div>
            <div className='w-ful'>
            <a className="mx-auto px-6 py-1 mt-1 bg-white text-black rounded-xl my-1 block w-fit btn" href="https://github.com/Temu-Lala/Lala-Chat" target='_blank'>View Code</a>
            
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="container-card">
    <div class="group panel rounded-xl">
      <div className='absolute border border-solid w-64 lg:w-3/4 bg-white border-r-4 rounded-md text-center bottom-10 left-1/2 transform -translate-x-1/2 title-main z-10 group-hover:z-[-1] transition-all duration-300 text-blue-400'>Daf Customer Support</div>
      <div class="ring rounded-xl">
        <div class="card card2 relative rounded-xl"></div>
        
        
        <div class="border-card">
          <div class="slide z-20">
            <h6 class="para text-5xl font-semibold">Daf Customer Support</h6>
            <p className='para px-2'>This project is a robust customer service application designed specifically for DAF Tech. It leverages the power of React for a seamless and intuitive user interface, while utilizing C# for efficient and reliable backend operations. </p>

           <div className='flex justify-center gap-5 lang'>
           <div className='tech'>
              <p className='para font-bold'>Frontend</p>
              <ul className='para'>
                <li>React</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className='tech'>
              <p className='para font-bold'>Backend</p>
              <ul className='para'>
                <li>ASP.net</li>
                <li>Socket.io</li>
                <li>MySQL</li>
              </ul>
            </div>
           </div>
            <div className='w-ful'>
            <a className="mx-auto px-6 py-1 mt-1 bg-white text-black rounded-xl my-1 block w-fit btn" href="https://github.com/Temu-Lala" target='_blank'>View Code</a>
            
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="container-card">
    <div class="group panel rounded-xl">
      <div className='absolute  text-center w-64 lg:w-3/4 bottom-10 left-1/2 transform -translate-x-1/2 border border-solid bg-white  border-r-4 rounded-md title-main z-10 group-hover:z-[-1] transition-all duration-300 text-blue-400'>DafTech  Tools</div>
      <div class="ring rounded-xl">
        <div class="card card3 relative rounded-xl"></div>
        
        <div class="border-card">
          <div class="slide z-20">
            <h6 class="para text-5xl font-semibold">DafTech  Tools</h6>
            <p className='para px-2'>This project is a robust customer service application designed specifically for DAF Tech. It leverages the power of React for a seamless and intuitive user interface, while utilizing C# for efficient and reliable backend operations.</p>

           <div className='flex justify-center gap-5 lang'>
           <div className='tech'>
              <p className='para font-bold'>Frontend</p>
              <ul className='para'>
                <li>React</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            
           </div>
            <div className='w-ful'>
            <a className="mx-auto px-6 py-1 mt-1 bg-white text-black rounded-xl my-1 block w-fit btn" href="https://github.com/Temu-Lala" target='_blank'>View Code</a>
            
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>
 
    </div>

    <div className='lg:h-[60vh] w-full flex flex-col lg:flex-row  content-center items-center self-center justify-center gap-5 '>
   
    <div class="container-card">
    <div class="group panel rounded-xl">
      <div className='absolute w-64 lg:w-3/4 border border-solid bg-white border-r-4 rounded-md text-center bottom-10 left-1/2 transform -translate-x-1/2 title-main z-10 group-hover:z-[-1] transition-all duration-300 text-blue-400'>Blue Homes</div>
      <div class="ring rounded-xl">
        <div class="card card4 relative rounded-xl"></div>
        
        <div class="border-card">
          <div class="slide z-20">
            <h6 class="para text-5xl font-semibold">Blue Homes</h6>
            <p className='para px-2'>HomeSell is a comprehensive web application meticulously designed to streamline the process of selling homes. Its user-friendly interface empowers both admins and customers, enabling efficient property management and seamless user experiences.</p>

           <div className='flex justify-center gap-5 lang'>
           <div className='tech'>
              <p className='para font-bold'>Frontend</p>
              <ul className='para'>
                <li>React</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className='tech'>
              <p className='para font-bold'>Backend</p>
              <ul className='para'>
                <li>Django</li>
                <li>Socket.io</li>
                <li>Django REST Framwork</li>
              </ul>
            </div>
           </div>
            <div className='w-ful'>
            <a className="mx-auto px-6 py-1 mt-1 bg-white text-black rounded-xl my-1 block w-fit btn" href="https://github.com/Temu-Lala/Sale-Home" target='_blank'>View Code</a>
            
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="container-card">
    <div class="group panel rounded-xl">
      <div className='absolute w-64 lg:w-3/4 border border-solid bg-white  border-r-4 rounded-md text-center bottom-10 left-1/2 transform -translate-x-1/2 title-main z-10 group-hover:z-[-1] transition-all duration-300 text-blue-400'>Cisco Certificate</div>
      <div class="ring rounded-xl">
        <div class="card card5 relative rounded-xl"></div>
        
        <div class="border-card">
          <div class="slide z-20">
            <h6 class="para text-5xl font-semibold">Cisco Certificate</h6>
            <p className='para px-2'>I have successfully earned a Cisco Networking Certificate from Debre Birhan University.</p>

            <div className='w-ful'>
            <a className="mx-auto px-6 py-1 mt-1 bg-white text-black rounded-xl my-1 block w-fit btn" href="../img/cisco.jpg" target='_blank'>View Certificate</a>
            
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>

    <div class="container-card">
    <div class="group panel rounded-xl">
      <div className='absolute border w-64 lg:w-3/4 border-solid bg-white  border-r-4 rounded-md text-center bottom-10 left-1/2 transform -translate-x-1/2 title-main z-10 group-hover:z-[-1] transition-all duration-300 text-blue-400'>3D Model</div>
      <div class="ring rounded-xl">
        <div class="card card6 relative rounded-xl"></div>
        
        <div class="border-card">
          <div class="slide z-20">
            <h6 class="para text-5xl font-semibold">3D Model</h6>
            <p className='para px-2'>Interact with 3D Models in a New Dimension: Double-Click to Rotate!</p>
          
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Who
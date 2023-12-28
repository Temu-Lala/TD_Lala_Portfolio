import React from 'react';
import './Contact.css';
import lala2 from '../img/lala2.png';
import Map from './Map';

const handleSubmit = (e) => {
  e.preventDefault();
};

function Contact() {
  return (
    <div id='contact' className="flex flex-col md:flex-row w-full h-screen items-center justify-center gap-8 md:gap-24">
      <div onSubmit={handleSubmit} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 justify-center flex-1 px-4">
        <div className="pt-8">
          <p className="text-4xl font-bold">Contact me</p>
        </div>
        <form className="pt-6">
          <div className="pb-4">
            <input
              className="bg-transparent border-4 border-white w-full h-12 rounded-lg text-white"
              type='text'
              placeholder='Name'
            />
          </div>
          <div className="pb-4">
            <input
              className="bg-transparent border-4 border-white w-full h-12 rounded-lg text-white"
              type='email'
              placeholder='Email'
            />
          </div>
          <div className="pb-4">
            <textarea
              className="bg-transparent border-4 border-white rounded-lg text-white w-full"
              id="message"
              placeholder='Write Your Message'
              name="message"
              rows="8"
              cols="50"
            ></textarea>
          </div>
          <div>
            <button type='submit' className="bg-cyan-400 text-black w-full h-12 rounded-lg">
              Send
            </button>
          </div>
        </form>
      </div>

      <div className="w-full flex-1 md:w-1/2 h-3/4 lg:w-2/3 xl:w-3/4">
        <div className="w-full h-full md:h-full">
          <iframe 
            src='https://www.google.com/maps/d/u/0/embed?mid=1xHkqT4b0eM0forH8h6-KLyzGDq8q2sc&ehbc=2E312F'
            width='100%'
            height='100%'
            title='Google Maps'
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;

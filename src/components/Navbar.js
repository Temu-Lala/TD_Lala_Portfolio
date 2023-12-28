import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Mycv from '../img/mycv.pdf'
import Logo from '../img/logo.png'
function Navbar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const pdfpath = Mycv;

    window.open(pdfpath)
  };

  return (
    <div className="navbar w-full  outline outline-white items-center  top-0 fixed z-50 h-16">
      <div className="flex w-full  h-16  content-center  justify-center gap-10 md:gap-72  mx-auto">
      <Link to="/">
 <img className="border rounded-full mt-4 h-12   md:h-full cursor-pointer  " src={Logo} alt="logo" />
        </Link>
        <div className="flex items-center gap-8">
          <a href='#who' >Who</a>
          <a href='#work' >Works</a>
          <a href='#contact' >Contact</a>
          <button onClick={handleLogoClick} className='cvmylogo  w-24 h-12 '>Cv</button>
          
        </div>
       

        
      </div>
    </div>
  );
}

export default Navbar;

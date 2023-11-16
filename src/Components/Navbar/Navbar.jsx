import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import logo from '../Assets/logo.png';
import './Navbar.css';

export const Navbar = () => {
 
const [showMenu,setshowMenu]=useState(false);
  return (
    <div className={'w-screen  flex flex-row justify-between bg-black p-1 md:p-4 sticky z-10 fixed-navbar'}>
      <div>
        <img src={logo} alt="logo" className='w-16 h-12 md:w-28 md:h-20'/>
      </div>
      <div className='flex flex-row justify-between '>
        <ul className='flex flex-row gap-10 items-center'>
          <li className='hidden md:flex flex-row gap-10 items-center align-middle  text-white font-extrabold text-xl cursor-pointer'>
            <Link activeClass='active' to='intro' spy={true} offset={-90} duration={500} smooth  className='hover:border-b-yellow-400 hover:border-b-4 hover:border-spacing-2 '>Home</Link>
            <Link  activeClass='active' to='about' spy={true} offset={-90} duration={500} smooth  className='hover:border-b-yellow-400 hover:border-b-4  '>About</Link>
            <Link activeClass='active' to='projects' spy={true} offset={-110} duration={500} smooth className=' hover:border-b-yellow-400 hover:border-b-4 '>Projects</Link>
            <Link  activeClass='active' to='resume' spy={true} offset={-110} duration={500} smooth  className='hover:border-b-yellow-400 hover:border-b-4  '>Resume</Link>
          </li>
        </ul>
      </div>
      <div className='hidden md:flex justify-center items-center w-48  align-middle'>
        <button  onClick={()=>{
          document.getElementById("contact").scrollIntoView();
        }} className='align-middle bg-white text-xl font-bold rounded-xl p-3'>
          <FontAwesomeIcon icon={faLock} /> <h2>Contact me</h2>
        </button>
      </div>
      <FontAwesomeIcon icon={faBars} className='mobMenu  text-3xl mt-2 text-yellow-300 md:hidden' onClick={()=>{setshowMenu(!showMenu)}}/>
      <div className='flex  md:hidden absolute  top-8 right-8 w-48 justify-center rounded-xl items-center z-10 text-white h-fit mt-1 gap-2 bg-slate-800 flex-col' style={{display: showMenu? 'flex':'none'}}>
             <Link activeClass='active' to='intro' spy={true} offset={-90} duration={500} smooth onClick={()=>{setshowMenu(false)}} className=  ' bg-slate-900 w-44 items-center justify-center align-middle flex border-b-yellow-400 border-b-4 border-spacing-2 md:hidden mt-2'>Home</Link>
            <Link  activeClass='active' to='about' spy={true} offset={-90} duration={500} smooth onClick={()=>{setshowMenu(false)}} className='border-b-yellow-400 border-b-4  bg-slate-900 w-44 items-center justify-center align-middle flex md:hidden '>About</Link>
            <Link activeClass='active' to='projects' spy={true} offset={-110} duration={500} smooth onClick={()=>{setshowMenu(false)}} className=' border-b-yellow-400 border-b-4  bg-slate-900 w-44 items-center justify-center align-middle flex md:hidden'>Projects</Link>
            <Link  activeClass='active' to='resume' spy={true} offset={-110} duration={500} smooth onClick={()=>{setshowMenu(false)}} className='border-b-yellow-400 border-b-4   bg-slate-900 w-44 items-center justify-center align-middle flex md:hidden'>Resume</Link>
            <Link  activeClass='active' to='contact' spy={true} offset={-110} duration={500} smooth onClick={()=>{setshowMenu(false)}} className='border-b-yellow-400 border-b-4   bg-slate-900 w-44 items-center justify-center align-middle flex md:hidden mb-3'>Contact Me</Link>

      </div>
    </div>
  );
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faHandPaper } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import pic from "../Assets/picofme__3_-removebg-preview.png";
import bg from "../Assets/bg1.jpg";
import homebg from "../Assets/19362653-removebg-preview.png";
export const Home = () => {
    const containerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
      };
  return (
   <section id="intro">
    <div className=' flex flex-col md:flex-row justify-evenly h-screen  bg-cover w-full ' style={containerStyle}>
      <div className='flex justify-center ml-20 md:ml-0 mt-32 md:mt-1 flex-col md:mr-20 gap-4 z-10'>
        <div className='text-white font-bold mt-8 text-lg md:text-2xl'>Hello <FontAwesomeIcon icon={faHandPaper} /></div>
        <div className='text-white font-extrabold text-2xl  md:text-6xl'>I am <span className='text-yellow-300 '>Lakshay <br />Bansal</span> a Web Developer</div>
        <div className='text-lg text-white font-semibold'>I am a dev enthusiast and keen to learn new technologies like AI <br />skilled and friendly with web development and DSA <br/>with little knowledge of Flutter</div>
        <div>
          <button className='bg-white flex flex-row align-middle justify-center items-center gap-2 text-black text-xl font-bold p-2 rounded-2xl'>
            <FontAwesomeIcon icon={faLock} /> <h2>Hire me</h2>
          </button>
        </div>
      </div>
      <div className='h-screen'>
      <img src={homebg} alt="myimg" className='md:absolute flex md:hidden m-auto md:right-36  md:top-12 md:ml-10 w-72 h-full md:h-full p-2'/>

        <img src={pic} alt="myimg" className='md:absolute hidden md:flex m-auto md:right-36  md:top-12 md:ml-10 w-72 h-full md:h-full p-2'/>
      </div>
    </div>
    </section>
  );
};

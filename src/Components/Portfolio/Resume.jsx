// Resume.js
import React from 'react';
import resumePDF from "../Assets/resume2.pdf";
import photo from "../Assets/Screenshot 2023-11-16 134739.png"
import bg from "../Assets/guille-pozzi-sbcIAn4Mn14-unsplash.jpg";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'LBansal.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'repeat-x',
  };
  return (
    <section id="resume">
    <div className="flex flex-col items-center" style={containerStyle}>
      <h1 className="text-4xl  text-yellow-300 font-bold mb-4 ">My Resume</h1>
      <img src={photo} alt="" className='mt-10 hover:scale-110 transition-transform duration-500'/>
      <button
        className=" p-2 bg-purple-500 mt-10 text-white rounded"
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
    </section>
  );
};

export default Resume;

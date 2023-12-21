import React from 'react'

import spotify from "../Assets/cZWZjymwI9o.jpg";
import weather from "../Assets/KWTkd7mHqKE.jpg"
import dictionary from "../Assets/T6fDN60bMWY.jpg"
import translator from "../Assets/Screenshot 2023-11-13 152203.png";
import news from "../Assets/photo-1614028480987-73081d86a38b.avif"
import chat from "../Assets/photo-1611606063065-ee7946f0787a.avif"
import snake from "../Assets/photo-1642056445470-18b1da13f81f.avif"
import chatbot from "../Assets/premium_photo-1682023587356-86065925727a.avif";
import pokemon from "../Assets/Screenshot 2023-11-14 231341.png";
import movie from "../Assets/Screenshot 2023-11-14 232259.png";
import shopping from "../Assets/Screenshot 2023-11-14 233650.png";
import bb from "../Assets/premium_photo-1661628984416-946603207cfc.avif";
import bg from "../Assets/bg1.jpg"
import hotel from "../Assets/Screenshot 2023-12-14 230405.png";
export const Projects = () => {
    const containerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
      };
  return (
    <section id="projects">
    <div className='flex flex-col gap-3' style={containerStyle}>
        <div className='flex justify-center items-center text-3xl md:text-5xl font-extrabold text-yellow-300'>My recent Projects</div>
        <div className='flex justify-center items-center text-xl text-white'>Here are some projects made by me</div>
        <div className='flex flex-col justify-start items-start w-full'>
            <div className='text-purple-500  text-xl md:text-3xl font-bold ml-20'>
                <h1>HTML-CSS-JS PROJECTS</h1>

            </div>
            <div className=' m-auto flex mt-10 flex-row flex-wrap justify-center gap-10'>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap h-fit  w-80 p-4  hover:scale-105 transition-transform duration-300'>
<img src={spotify} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Music App</h1>
<p className='text-lg font-medium'>It is a music app created by me and also very first project made by me. It has features of playing music of your choice,play pause forward and backward song and also complete website is responsive</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/Music-website-using-HTML-CSS-JS">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://monumental-ganache-b518ca.netlify.app/">Demo</a></button>
    </div>
            </div>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={weather} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Weather App</h1>
<p className='text-lg font-medium'>It is a weather app created by me usong openweather API It has features of searching your city , gtting weather info, clean code and also complete website is responsive</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/WEATHER-APP">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://lakshaybansal879.github.io/WEATHER-APP/">Demo</a></button>
    </div>
            </div>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap  h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={dictionary} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Dictionary App</h1>
<p className='text-lg font-medium'>It is a Dictionary app created by me using dictionary.dev API It has features of searching word, hearing word ,getting example sentence also getting simolar also with complete responsiveness</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/DICTIONARY-APP">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://lakshaybansal879.github.io/DICTIONARY-APP/">Demo</a></button>
    </div>
            </div>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap  h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={translator} alt="" className='w-64 h-40 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Translator App</h1>
<p className='text-lg font-medium'>It is a Language Transaltor created by me using my memory API It has features of getting transalted in multiple languages , interchange input-output,hearing input-output & copy both also with complete responsiveness</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/TRANSLATOR-APP">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://lakshaybansal879.github.io/TRANSLATOR-APP/">Demo</a></button>
    </div>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-start w-full'>
            <div className='text-purple-500  text-xl md:text-3xl font-bold ml-20'>
                <h1>NODEJS/EXPRESSJS/JS PROJECTS</h1>

            </div>
            <div className=' m-auto flex mt-10 flex-row flex-wrap justify-center gap-10'>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={news} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>News App</h1>
<p className='text-lg font-medium'>It is a news app created by me using node ,express js & bootstrap with help of newsapi.org it has featues of searching news topic wise and pagination</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/NEWS-APP">Github</a>
    </button>
    {/* <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://monumental-ganache-b518ca.netlify.app/">Demo</a></button> */}
    </div>
            </div>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={chat} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Real time chat App</h1>
<p className='text-lg font-medium'>It is a real time chat application created  using node js and socket.io  It has features of chatting with join and left notification also user can share images too.</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/chat-app">Github</a>
    </button>
    {/* <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://lakshaybansal879.github.io/WEATHER-APP/">Demo</a></button> */}
    </div>
            </div>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap  h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={snake} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Snake game</h1>
<p className='text-lg font-medium'>It is a simple snake game created by me using javascript It is a simple snake game in which user can set and beat his highscore</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/SNAKE-EatIt">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://lakshaybansal879.github.io/SNAKE-EatIt/">Demo</a></button>
    </div>
            </div>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap  h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={chatbot} alt="" className='w-64 h-40 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Ai chatbot </h1>
<p className='text-lg font-medium'>It is a ai chatbot created by me using js with help of openai API It has features of every chatbot but only text with complete responsiveness</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/JS-CHATBOT">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://lakshaybansal879.github.io/JS-CHATBOT/">Demo</a></button>
    </div>
            </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-start w-full'>
            <div className='text-purple-500  text-xl md:text-3xl font-bold ml-20'>
                <h1>REACT PROJECTS</h1>

            </div>
            <div className=' m-auto flex mt-10 flex-row flex-wrap justify-center gap-10'>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={pokemon} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Pokedex</h1>
<p className='text-lg font-medium'>It is a pokemon search app created using react js with feature of searhing pokemon by name , getting details of pokemon,getting same ability pokemon and pagination</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/REACT-POKEDEX">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://react-pokedex-dusky.vercel.app/">Demo</a></button>
    </div>
            </div>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={movie} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Movie search app</h1>
<p className='text-lg font-medium'>It is a movie search app created by me using react js with help of  omdb API It has features of searching your favourite movie , getting all suggestion related to keywords,getting detail of movie & theme change option with pagination</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/Movie-search-React">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://movie-search-react-iota.vercel.app/">Demo</a></button>
    </div>
            </div>
             <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap  h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={shopping} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Ecommerce website</h1>
<p className='text-lg font-medium'>It is a Ecommerce website  created by me using react js It has features of filtering product inti 3 sections,getting product details,dynamic cart feature</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/ECOMMERCE-WEBSITE">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://ecommerce-website-sooty-theta.vercel.app/">Demo</a></button>
    </div>
            </div>
            
            </div>
        </div>
        <div className='flex flex-col justify-start items-start w-full'>
            <div className='text-purple-500  text-xl md:text-3xl font-bold ml-20'>
                <h1>MERN STACK PROJECTS</h1>
            </div>
            <div className=' m-auto flex mt-10 flex-row flex-wrap justify-center gap-10'>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={bb} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>Blood Bank Managment System</h1>
<p className='text-lg font-medium'>It is a blood bank management system website  created using node,express,html,css,JS&Tailwind with feature of user AUTH,donate req,hospitals list and available quantity of blood of each group & recent blood request page</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/blood-bank-managment">Github</a>
    </button>
    <button className='p-3 rounded-2xl bg-purple-500 text-white text-xl'><a href="https://react-pokedex-dusky.vercel.app/">Demo</a></button>
    </div>
            </div>
             <div className=' m-auto flex mt-10 flex-row flex-wrap justify-center gap-10'>
            <div className='flex flex-col items-center border-yellow-300 border-2 text-white flex-wrap h-fit hover:scale-105 transition-transform duration-300 w-80 p-4'>
<img src={hotel} alt="" className='w-64 mt-5'/>
<h1 className='text-yellow-300 font-extrabold text-4xl'>BookIt</h1>
<p className='text-lg font-medium'>It is a Hotel booking website created using node,express,ReactJs,JS & Tailwind with feature of user AUTH,storing user info,adding new hotel by user with feature of uploading pictures and storing it in database using multer,choice from multiple hotels with feature of searching it through name and address,single booking page and also shows users all booking and listed hotels</p>
<div className='flex flex-row gap-5 mt-3'>
    <button className='p-3 m-auto rounded-2xl bg-purple-500 text-white text-xl'>
        <a href="https://github.com/LAKSHAYBANSAL879/Hotel-booking-website">Github</a>
    </button>
         </div>
         </div>
        </div>
        </div>
        </div>
    </div>
    </section>
  )
}

import React, { useRef } from 'react'
import bg from "../Assets/bg1.jpg";
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const containerStyle = {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-x',
      };
      const form=useRef();
      const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ewumrwj', 'template_2ga52i2', form.current, 'Sx4o6vx7xG2hKlQda')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email sent sucessfully");

          }, (error) => {
              console.log(error.text);
          });
        };
  return (
   <section id='contact'>
    <div className='flex flex-col' style={containerStyle}>
        <div>
<h1 className='flex justify-center text-yellow-300 font-bold text-2xl md:text-5xl'>Contact Me</h1>
        </div>
        <div>
            <h2 className='text-white flex justify-center md:text-xl mt-4 mb-4'>Please fill out this form to contact me</h2>
        </div>
        <div>
            <form ref={form} className='flex flex-col justify-center gap-6 items-center' onSubmit={sendEmail}  >
<input type="text" name="from_name" id="name" placeholder='Your Name' className=' bg-stone-800 text-white w-1/2 font-bold text-xl p-3  focus:border-2 focus-visible:border-yellow-300'/>
<input type="number" name="from_number" id="number" placeholder='Your phone number' className='w-1/2 bg-stone-800 text-white  font-bold text-xl p-3'/>
<input type="email" name='from_email' id='mail' placeholder='Your Email' className='w-1/2 bg-stone-800 text-white  font-bold text-xl p-3'/>
<textarea name="message" id="" placeholder='Your Message' cols="30" rows="4" className='r resize-none w-1/2 min-h-fit max-h-96 bg-stone-800 text-white  font-bold text-xl p-3'></textarea>
<button type="submit" value='Send' className='p-2 bg-purple-500 text-white text-xl font-bold rounded-xl'>Submit</button>
            </form>
        </div>
        <div>
        <p className="flex flex-row justify-center gap-5 mt-5">
      <a href="https://github.com/LAKSHAYBANSAL879" target="blank"><img align="center" src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Symbol.png" alt="https://www.linkedin.com/in/lakshay-bansal-534184251/" height="60" width="50" className="w-24" /></a>
<a href="https://www.linkedin.com/in/lakshay-bansal-534184251/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/lakshay-bansal-534184251/" height="50" width="50" /></a>
<a href="https://instagram.com/https://www.instagram.com/lakshay.bansal.94801/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="https://www.instagram.com/lakshay.bansal.94801/" height="50" width="50" /></a>
<a href="https://www.hackerrank.com/https://www.hackerrank.com/lakshaybansal879" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="https://www.hackerrank.com/lakshaybansal879" height="50" width="50" /></a>
  <a href="https://www.leetcode.com/https://leetcode.com/lakshaybansal879/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="https://leetcode.com/lakshaybansal879/" height="50" width="50" /></a>
  <a href="https://www.codingninjas.com/studio/profile/ed928e0e-cef8-405e-9a94-6e520290bf9a" target="blank"><img align="center" src="https://coursereport-production.imgix.net/uploads/school/logo/1323/original/Coding_Ninjas_logo.jpeg?w=200&h=200&dpr=3&q=35" alt="https://www.linkedin.com/in/lakshay-bansal-534184251/" height="60" width="50" className="w-18" /></a>
</p>
        </div>
    </div>
    </section>
  )
}

import React from "react";
import bg from "../Assets/bg1.jpg";
import aboutBg from "../Assets/about.png";
export const About = () => {
  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <section id="about">
    <div className="flex flex-col" style={containerStyle}>
      <div className="mt-2 flex justify-center items-center">
        <h2 className="text-white text-5xl mt-16 md:mt-4 font-extrabold">Know Me</h2>
      </div>
      <div className="flex flex-row mt-5 justify-around">
        <div className="text-white font-bold text-2xl mt-10 ml-10 ">
          <h1>
            My name is{" "}
            <span className="text-3xl text-yellow-300">Lakshay Bansal </span> i
            belongs to{" "}
            <span className="text-3xl text-yellow-300">Faridabad</span>
            <br />
            Currently I am pursuing <span>Btech</span> in{" "}
            <span className="text-3xl text-yellow-300">Computer Science</span>{" "}
            from{" "}
            <span className="text-3xl text-yellow-300">
              Maharaja Agrasen Institute of Technology
            </span>{" "}
            (GGSIPU Affilated). <br />I am a{" "}
            <span className="text-3xl text-yellow-300">
              Full Stack Web Developer{" "}
            </span>
            and keen to learn flutter <br />
            in future , also have a knowledge of DSA , Editing and AI{" "}
          </h1>
        </div>

        <div className="flex mt-10 w-96 md:w-1/2 ml-10">
          <img src={aboutBg} alt="about" className="w-96 h-64 " />
        </div>
      </div>
      <div className="flex justify-center  flex-col items-center">
        <h1 className="text-white mt-2 text-3xl md:text-5xl font-extrabold">Skills I know</h1>
        <div className="flex flex-row flex-wrap ">
          <ul className="mt-4 flex flex-row flex-wrap justify-center gap-3">
            
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
              {" "}
              <a
                href="https://developer.android.com"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                  alt="android"
                  width="60"
                  height="60"
                />{" "}
              </a>{" "}
            </li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
              <a href="https://angular.io" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://angular.io/assets/images/logos/angular/angular.svg"
                  alt="angular"
                  width="60"
                  height="60"
                />{" "}
              </a>{" "}
            </li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4"><a href="https://angular.io" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg"
                alt="angularjs"
                width="60"
                height="60"
              />{" "}
            </a></li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
                width="60"
                height="60"
              />{" "}
            </a>{" "}
            </li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="c"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a
              href="https://www.w3schools.com/cpp/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://dart.dev" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
                alt="dart"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              {" "}
              <img className="bg-white"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://flutter.dev" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                alt="flutter"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://www.java.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="java"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img className="bg-white"
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://nodejs.org" target="_blank" rel="noreferrer">
              {" "}
              <img className="bg-white"
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://www.php.net" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                alt="php"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="60"
                height="60"
              />{" "}
            </a>{" "}</li>
            <li className="text-2xl font-bold text-yellow-300 border-purple-600 border-4 p-4">
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              {" "}
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="60"
                height="60"
              />{" "}
            </a></li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center m-auto mt-5 w-fit text-white text-2xl md:text-5xl font-extrabold  border-b-yellow-300 border-b-4">Connect With me</div>
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
  );
};

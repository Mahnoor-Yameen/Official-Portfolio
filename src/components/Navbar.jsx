import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { GrInstagram } from "react-icons/gr";
import { Link as ScrollLink } from 'react-scroll';
import { SiLeetcode } from 'react-icons/si';
import HeroSvg from './../svgs/HeroSection/Hero.svg'
import grid from './../svgs/HeroSection/grid.svg'

import { Link } from 'react-router-dom'
export default function Navbar() {
    const personalData = {
        name: "Mahnoor Yameen",
        profile: '/profile.png',
        designation: "MERN Full Stack Developer",
        description: "My name is Mahnoor Yameen. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
        email: 'mahnooryameen321@gmail.com',
        phone: '+92 3413407633',
        address: 'Karachi',
        github: 'https://github.com/Mahnoor-Yameen',
        // facebook: 'https://www.facebook.com/abusaid.riyaz/',
        linkedIn: 'https://www.linkedin.com/in/mahnooryameen',
        // twitter: 'https://twitter.com/said7388',
        // stackOverflow: 'https://stackoverflow.com/users/16840768/abu-said',
        instagram: "https://www.instagram.com/myt_developer?igsh=MThmd3A2ODZsODVrcA==",
        // devUsername: "said7388",
        resume: "https://drive.google.com/file/d/1eyutpKFFhJ9X-qpQGKhUNnVRkB5Wer00/view?usp=sharing"
      }


  return (
    
    <>
<section style={{backgroundColor:"#0d1224"}} className="relative  z-10 flex flex-col items-center justify-between  ">
  <img
    src={HeroSvg}
    alt="Hero"
    width={1572}
    height={795}
    className="absolute -top-[98px] -z-10 py-5"

  />
  

  {/* navbar */}
        
  <nav className="bg-transparent " style={{width:"100vw"}}>
  
      <div className="flex items-center justify-between py-9" >
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] nfontsize font-bold ps-20">
            MAHNOOR YAMEEN
          </Link>
        </div>

        <ul className=" pe-48 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
          <li>
            <ScrollLink className="block px-4 py-2 no-underline outline-none hover:no-underline"    to="About">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink className="block px-4 py-2 no-underline outline-none hover:no-underline"    to="Experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></ScrollLink>
          </li>
          <li>
            <ScrollLink className="block px-4 py-2 no-underline outline-none hover:no-underline"   to="Skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></ScrollLink>
          </li>
          <li>
            <ScrollLink className="block px-4 py-2 no-underline outline-none hover:no-underline"    to="Education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></ScrollLink>
          </li>
          {/* <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/blog"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">BLOGS</div></Link>
          </li> */}
          <li>
            <ScrollLink className="block px-4 py-2 no-underline outline-none hover:no-underline"    to="Projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></ScrollLink>
          </li>
        </ul>
      </div>
    </nav>

  


{/* Hero Section*/}
<div className="lg:px-20 px-5 py-20 grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-pink-500">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <a
              href={personalData.github}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </a>
            <a
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </a>
            {/* <Link
              href={personalData.facebook}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaFacebook size={30} />
            </Link> */}
            <a
              href={personalData.instagram}
              target='_blank'
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <GrInstagram size={30} />
            </a>
          
          </div>

          {/* <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div> */}

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Mahnoor Yameen</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">MERN</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Firebase</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express APIs</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeMailer</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AOS Animation</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Cookies Handling</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">BcryptJS Hashing</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">JSON Web Token</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">GIT</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Sweet Alert</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Axios</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Hosting by Vercel</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Hosting by GitHub</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">React Bootstrap</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tailwind CSS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">LordIcon</span>
                {/* <span className="text-gray-400">{"', '"}</span> */}
                {/* <span className="text-amber-300">React Bootstrap</span> */}
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">10</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
   
   </section>
    
    </>
  )
}

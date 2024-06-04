import React from 'react'
import { skillsImage } from "./skill-image.js";
import Marquee from "react-fast-marquee";

import HeroSvg from './../svgs/HeroSection/Hero.svg'
import { Link as ScrollLink } from 'react-scroll';

export default function Skills() {

    const skillsData = [
        'HTML',
        'CSS',
        'Javascript',
        // 'Typescript',
        'React',
        // 'Next JS',
        // 'Tailwind',
        'MongoDB',
        // 'MySQL',
        // 'PostgreSQL',
        'Git',
        // 'AWS',
        'Bootstrap',
        // 'Docker',
        // 'Go',
        // 'Figma',
        'Firebase',
        // 'MaterialUI',
        // 'Nginx',
        // 'Strapi'
      ]
  return (
    <>
     <div id="Skills" style={{backgroundColor:"#0d1224"}} className="relative z-50 border-t py-12 lg:py-24 border-[#25213b]">
     
  
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

{/* heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>


{/* marqueue */}
      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
            <div className='flex'>

            
          {skillsData.map((value, index) => (
            <div className="xtraclass min-w-fit h-fit flex  items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={index} style={{minWidth:"9rem"}}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">

                {/* beautiful line at top of each box */}
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>

                {/*skill image and name */}
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                    {/* image */}
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(value)}
                      alt={value}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  {/* name of the skill */}
                  <p className="text-white text-sm sm:text-lg">
                    {value}
                  </p>
                </div>
              </div>
            </div>
          ))}</div>
        </Marquee>
      </div>
    </div>
    </>
  )
}

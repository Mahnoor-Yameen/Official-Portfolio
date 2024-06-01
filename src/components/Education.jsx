import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import HeroSvg from './../svgs/HeroSection/Hero.svg'
import blur from './../svgs/Education/blur-23.svg'
import Lottie from "lottie-react";
import { BsPersonWorkspace } from "react-icons/bs";
import ExpGlowCard from './ExpGlowCard';
import lottieFile from './../lottie/study.json';



export default function Education() {
    const educations = [
        {
          id: 1,
          title: "Bachelor In Science of Cmputer Science",
          duration: "2019 - 2024",
          result: "Final Result Pending, 4.0 GPA last semester",
          institution: "University Of Karchi (Affiliated)",
        },
        {
          id: 2,
          title: "Higher Secondary Certificate (Pre-Engineering)",
          duration: "2017 - 2019",
          result: "B Grade",
          institution: "Govt. Degree College For Women. Karachi",
        },
        {
          id: 3,
          title: "Secondary School Certificate",
          duration: "2017",
          result: "A-1 Grade",

          institution: "SunRise Secondary School, Karachi Board",
        }
      ]

    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: lottieFile,
        style: {
          width: '95%',
        }}


  return (
    <>
    <div id="Education" style={{ backgroundColor: "#0d1224" }} className="lg:px-20 sm:px-12 relative z-50 border-t py-12 lg:py-24 border-[#25213b]">
    <img
    src={HeroSvg}
    alt="Hero"
    width={1572}
    height={795}
    className="absolute -top-[98px] -z-10 py-5"

  />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Educations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              {/* <AnimationLottie animationPath={lottieFile} /> */}
              <Lottie {...defaultOptions} />

            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <ExpGlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="lg:p-3 relative text-white">
                      <img
                        src={blur}
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex  justify-center">
                        <p className="text-xs pt-2 sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex xtra items-center gap-x-8 lg:px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                          <p className="text-sm sm:text-base">{education.result}</p>

                        </div>
                      </div>
                    </div>
                  </ExpGlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

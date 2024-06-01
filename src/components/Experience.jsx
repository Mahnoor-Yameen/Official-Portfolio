import React from 'react'
// import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { Link as ScrollLink } from 'react-scroll';
// import GlowCard from "./../Globalscss.scss";
import ExpGlowCard from './ExpGlowCard';
import Lottie from "lottie-react";

import experience from './../lottie/code.json';
import HeroSvg from './../svgs/HeroSection/Hero.svg'
import BlurSvg from "./../svgs/Experience/blur-23.svg"

export default function Experience() {
// -----------------------------------------------
    const experiences = [
        {
            id: 1,
            title: 'MERN Website Developer ',
            company: "EasyLink",
            duration: "(Present)"
        },
        // {
        //     id: 2,
        //     title: "FullStack Developer",
        //     company: "Fiverr (freelance)",
        //     duration: "(Jun 2021 - Jan 2022)"
        // },
        // {
        //     id: 3,
        //     title: "Self Employed",
        //     company: "Code and build something in everyday.",
        //     duration: "(Jan 2018 - Present)"
        // }
    ]
    // --------------------ANIMATION LOTTIE

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: experience,
        style: {
          width: '95%',
        }}
    
    return (
        <>

            <div id="Experience" style={{ backgroundColor: "#0d1224" }} className="px-20 relative z-50 border-t py-12 lg:py-24 border-[#25213b]">
                <img
                    src={HeroSvg}
                    alt="Hero"
                    width={1572}
                    height={795}
                    className="absolute -top-[98px] -z-10 py-28"

                />
                {/* heading */}
                <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                        <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                            Experiences
                        </span>
                        <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
                </div>

                {/* ANIMATION */}
                <div className="py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="flex justify-center items-start">
                            <div className="w-full h-full">
                                <Lottie {...defaultOptions} />

                            </div>
                        </div>


                        {/* GLOWING cards on seedha hath */}

                        <div>
                            <div className="flex flex-col gap-6">
                                {
                                    experiences.map(experience => (
                                        <ExpGlowCard key={experience.id} identifier={`experience-${experience.id}`} className=''>
                                            <div className="p-3 relative ">

                                                <img
                                                    src={BlurSvg}
                                                    alt="Hero"
                                                    width={1080}
                                                    height={200}
                                                    className="absolute bottom-0 opacity-80"

                                                />
                                                <div className="flex justify-center">
                                                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                        {experience.duration}
                                                    </p>
                                                </div>
                                                <div className="flex xtra items-center gap-x-8 px-3 py-5">
                                                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                        <BsPersonWorkspace size={36} />
                                                    </div>
                                                    <div >
                                                        <p className="text-base sm:text-sm mb-2 uppercase">
                                                            {experience.title}
                                                        </p>
                                                        <p className="text-sm  ">
                                                            {experience.company}
                                                        </p>
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

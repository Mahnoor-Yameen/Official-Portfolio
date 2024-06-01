import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

export default function About() {

    const personalData = {
        name: "ABU SAID",
        // profile: '/profile.png',
        designation: "Software Developer",
        description: "My name is Mahnoor Yameen. I am a professional and enthusiastic programmer in my daily life. I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving. I love almost all the stacks of web application development and love to make the web more open to the world. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I am available for any kind of job opportunity that suits my skills and interests.",
        email: 'abusaid7388@gmail.com',
        phone: '+8801608797655',
        address: 'Middle Badda, Dhaka, Bangladesh - 1212 ',
        github: 'https://github.com/said7388',
        facebook: 'https://www.facebook.com/abusaid.riyaz/',
        linkedIn: 'https://www.linkedin.com/in/abu-said-bd/',
        twitter: 'https://twitter.com/said7388',
        stackOverflow: 'https://stackoverflow.com/users/16840768/abu-said',
        leetcode: "https://leetcode.com/said3812/",
        devUsername: "said7388",
        resume: "https://drive.google.com/file/d/1eyutpKFFhJ9X-qpQGKhUNnVRkB5Wer00/view?usp=sharing"
      }
  return (
    <>
    
    <div id="About" className="py-12 lg:py-16 lg:px-20 px-10 relative" style={{backgroundColor:"#0d1224"}}>
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="lg:font-medium font-small text-center mb-5 text-[#16f2b3] text-xl uppercase">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {personalData.description}
          </p>
        </div>
      
      </div>
    </div>
    
    </>
  )
}

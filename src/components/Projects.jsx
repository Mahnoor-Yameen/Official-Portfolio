
import React from 'react'
import { Link as ScrollLink } from 'react-scroll';

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            name: 'Online Marketplace, Preloved Cloth Selling',
            description: "Me and my team built an AI-Chatbot integrated Preloved Cloth selling Website on MERN technology and Google DialogHlow Framework. The users can upload ads of products they want to sell as an online selling MarketPlace. User login, signup is done by Backend APIS using Json Web Token and BcryptJs Hashing. Firebase is only used for Umages Url Generstion. ",
            tools: ['Express', 'MongoDB','ReactJS','firebase','JSON WEBTOKEN','BcryptJS Hashing','Mongoose', 'React-Bootstrap','js-cookie','axios','React-JWT',],
            role: 'Full Stack Developer',
            demo: 'https://demo-fashionbot-mern.vercel.app/',
            // image: crefin,
        },
        {
            id: 2,
            name: 'Bakery Eccomerce Website',
            description: 'I have designed and developed a full-stack web app for a Bakery. It included Guest, User, and Admin Panel Accounts. In this website categories and brands are co rfelated to products that are shown, Products Are created by admin via Admin Panel, The Nodemailer sends a order confirmation message to the customer. User login, signup is done by Backend APIS using Json Web Token and BcryptJs Hashing. Firebase is only used for Umages Url Generstion.Guest And User both can review any product and Real time Reiew submission is made with Real Time review Stars Updation.',
            tools: ['Express', 'MongoDB','NodeMailer','ReactJS','firebase','JSON WEBTOKEN','BcryptJS Hashing','Mongoose', 'React-Bootstrap','js-cookie','axios','React-JWT',],
            role: 'Full Stack Developer',
            code: '',
            demo: 'https://bakery-mern-vercel.vercel.app/',
            // image: travel,
        },
        {
            id: 3,
            name: 'Boutique Website',
            description: 'This website contains two main areas, firstly, the stiching service that the boutique offers, Secondly, the Products of the Boutique, This Website also has guest, user and Admin panel. Guest And User both can review any product and Real time Reiew submission is made with Real Time review Stars Updation.',
            tools: ['Express', 'MongoDB','ReactJS','NodeMailer','firebase','JSON WEBTOKEN','BcryptJS Hashing','Mongoose', 'React-Bootstrap','js-cookie','axios','React-JWT',],
            code: '',
            role: 'Full Stack Developer',
            demo: 'https://demo-pos-boutique-mern.vercel.app/',
            // image: realEstate,
        },
        {
            id: 4,
            name: 'POS MERN Website / Admin Panel',
            description: "It is a MERN website having only admin panel type pos software where the admin can place orders for bpth products and stitching services, Admin can add new products, types of new services, etc. User login, signup is done by Backend APIS using Json Web Token and BcryptJs Hashing. Firebase is only used for Umages Url Generstion.",
            tools: ['Express', 'MongoDB','ReactJS','NodeMailer','firebase','JSON WEBTOKEN','BcryptJS Hashing','Mongoose', 'React-Bootstrap','js-cookie','axios','React-JWT',],
            code: '',
            demo: 'https://demo-pos-boutique-mern.vercel.app/',
            // image: ayla,
            role: 'Full Stack Developer',
        }
        ,
        {
            id: 5,
            name: 'Gold Hair Website',
            description: "It is a React only website, firebase authentication and database is used.",
            tools: ['ReactJS','Firebase','React Bootstrap', 'aos animation','JS-cookie','react-datePicker','react-icon','SweetAlert2',],
            code: '',
            demo: 'https://goldhairandbeautystudio.com/',
            // image: ayla,
            role: 'Full Stack Developer',
        }
    ];
  return (
    <div id='projects' style={{ backgroundColor: "#0d1224" }} className="relative z-50  py-12 lg:py-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">


                {/* [Project Card] */}
                <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-pink-500">const</span>
            <span className="mr-2 text-white">project</span>
            <span className="mr-2 text-pink-500">=</span>
            <span className="text-gray-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
            <span className="text-gray-400">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-gray-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-white">tools:</span>
            <span className="text-gray-400">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={i}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-gray-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-gray-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-white">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Demo Link:</span>
            <span className="text-cyan-400">{' ' + project.demo}</span>
            <span className="text-gray-400">,</span>
          </div>
          <div><span className="text-gray-400">{`};`}</span></div>
        </code>
      </div>
    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
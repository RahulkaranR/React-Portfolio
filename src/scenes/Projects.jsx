import React from 'react'
import project_1 from "../assets/project-1/project-1-img-1.jpg";
import project_2 from "../assets/project-2/project-2-img-1.jpg";
import project_3 from "../assets/project-3/project-3-img-1.jpg";
import project_4 from "../assets/project-4/project-4-img-1.jpg";
import github from "../assets/github.png"

const Projects = () => {
  return (
    <section id='projects'>
        <div>
            <h1 className='m-3 md:pt-20 text-center text-4xl font-bold'>Projects</h1>
            <p className='md:p-7 text-center'>
                Explore my MERN (MongoDB, Express.js, React, Node.js) stack project showcasing 
                seamless integration of these technologies. From a robust backend with MongoDB 
                database and Express.js server to a dynamic front-end using React, this project 
                demonstrates full-stack prowess. Experience smooth data flow, interactive UI, and 
                responsive design in this comprehensive MERN showcase.

            </p>
        </div>
        <div>
            <div className=' md:flex  justify-center'>
                <div className=' m-3 md:m-0 w-80  p-0  md:pt-8 '>
                    <img src={project_1} alt="project-01" />
                </div>
                
                <div className=' order-2'>
                    <h1 className='  text-center text-2xl font-bold'>Portfolio</h1>
                    <ul className=' md:p-7 md:w-[500px]  '>
                        <li>
                            I created this website using react, tailwind, react-Anchor-link
                        </li>
                        <li>
                            On Building this website i came across many struggle to achive this 
                        </li>
                        <li>
                            This project has responsive and user friendly design
                        </li>
                    </ul>
                    <div className=' w-9 content-center ml-12  '>
                    <a
                    className="hover:opacity-50 transition duration-500 w-8 "
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img alt="instagram-link" src={github} className=" rounded-lg " />
                    </a>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div className=' md:flex  justify-center'>
                <div className=' m-3 md:m-0 w-80  p-0 md:pt-8  '>
                    <img src={project_2} alt="project-01" />
                </div>
                
                <div className=' order-2'>
                    <h1 className='  text-center text-2xl font-bold'>Theater Project</h1>
                    <ul className=' md:p-7 md:w-[500px] '>
                        <li>
                            Its a real time project where we can select seal and show,
                        </li>
                        <li>
                            Built using React, redux, bootstrap on Frontend ,
                        </li>
                        <li>
                            Node.js, Express.js, jwt, on Backend,
                        </li>
                        <li>
                            This project gave me a good expreience on working with real time and date.
                        </li>
                    </ul>
                    <div className=' w-9 content-center ml-12  '>
                    <a
                    className="hover:opacity-50 transition duration-500 w-8 "
                    href="https://github.com/RahulkaranR/Theatre-App"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img alt="instagram-link" src={github} className=" rounded-lg " />
                    </a>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div className=' md:flex  justify-center'>
                <div className=' m-3 md:m-0 w-80  p-0 md:pt-8  '>
                    <img src={project_3} alt="project-01" />
                </div>
                
                <div className=' order-2'>
                    <h1 className='  text-center text-2xl font-bold'>Work Shop</h1>
                    <ul className=' md:p-7 md:w-[500px]  '>
                        <li>
                            Its a MERN Stack Project with additional technologies bootstrap, redux and etc... 
                        </li>
                        <li>
                            In it i use JWT for access_token and refresh_token to verify employes category like admin, manger, etc.. 
                        </li>
                        <li>
                            Responsive UI using bootstrap, css and icons it will give better user experience.
                        </li>
                       
                    </ul>
                    <div className=' w-9 content-center ml-12  '>
                    <a
                    className="hover:opacity-50 transition duration-500 w-8 "
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img alt="instagram-link" src={github} className=" rounded-lg " />
                    </a>
                    </div>
                </div>
                
            </div>
        </div>
        <div>
            <div className=' md:flex  justify-center'>
                <div className=' m-3 md:m-0 w-80  p-0 md:pt-8  '>
                    <img src={project_4} alt="project-01" />
                </div>
                
                <div className=' order-2'>
                    <h1 className='  text-center text-2xl font-bold'>Pharmacy</h1>
                    <ul className=' md:p-7  md:w-[500px]  '>
                        <li>
                            Its a pure backend framework based project only using Node.js, express, and pug
                        </li>
                        <li>
                            website pages are created by pug. Function are purely working on backend only,
                        </li>
                        <li>
                            This website greatly push me to next level and CURD functionality are also implemented.
                        </li>
                    </ul>
                    <div className=' w-9 content-center ml-12  '>
                    <a
                    className="hover:opacity-50 transition duration-500 w-8 "
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    >
                    <img alt="instagram-link" src={github} className=" rounded-lg " />
                    </a>
                    </div>
                </div>
                
            </div>
        </div>
        
    </section>
  )
}

export default Projects
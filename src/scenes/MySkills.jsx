import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import myimage_2 from "../assets/myimage-3.jpeg"



const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)")
  return (
    <section id='skills' className=' w-full' >
        <div className=' w-full ' >
            <h1 className=' m-3 md:pt-20 text-center text-4xl font-bold '>SKILLS</h1>
            <p className=' md:p-7 text-center' >
                Proficient MERN stack web developer with expertise in React, Node.js, and MongoDB. 
                Skilled in building responsive user interfaces, designing RESTful APIs, and 
                implementing state management with Redux. Experienced in version control using 
                Git, and deploying applications on platforms like Heroku and AWS for seamless 
                web development.
            </p>
        </div>
        <div className=' md:flex md:justify-between ' >
        <div className="basis-3/5 z-10 mt-10 md:mt-32 flex justify-center md:order-2">
                {isAboveLarge ? (
                <div
                    className=" p-7 relative  z-0 ml-20 before:absolute before:-top-20 before:-left-20 
                    before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                >
                    <img
                    alt="profile"
                    className="hover:filter h-[350px] w-[620px] hover:saturate-200 transition duration-500 z-10  max-w-[400px] md:max-w-[600px]"
                    src={myimage_2}
                    />
                </div>
                ) : (
                <img
                    alt="profile"
                    className="z-10 max-w-[450px] md:max-w-[400px] md:max-h-[300px]  mb-7 "
                    src={myimage_2}
                />
                )}
            </div>
            <motion.div
            className=' md:mt-28 mb-7'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <p><span className=' font-bold text-gray-950' >Languages:</span> JavaScript (ES6+), HTML5, CSS3</p>
                <p><span className=' font-bold text-gray-950'>Frontend:</span> React.js, Redux, HTML, CSS, Bootstrap</p>
                <p><span className=' font-bold text-gray-950'>Backend:</span> Node.js, Express.js</p>
                <p><span className=' font-bold text-gray-950'>Database:</span> MongoDB, Mongoose</p>
                <p><span className=' font-bold text-gray-950'>Version Control:</span>Git, GitHub</p>
                <p><span className=' font-bold text-gray-950'>Build Tools:</span> Webpack, Babel</p>
                <p><span className=' font-bold text-gray-950'>Testing:</span>Jest, Enzyme</p>
                <p><span className=' font-bold text-gray-950'>RESTful APIs:</span>Design and Implementation</p>
                <p><span className=' font-bold text-gray-950'>Authentication & Authorization:</span> JWT, OAuth</p>
                <p><span className=' font-bold text-gray-950'>Deployment:</span>Heroku, AWS, Docker</p>
                <p><span className=' font-bold text-gray-950'>Tools:</span> VS Code, Postman, npm, Yarn</p>
            </motion.div>
            
        </div>
        

    </section>
  )
}

export default MySkills


{/* <div >
<p><span>Languages:</span> JavaScript (ES6+), HTML5, CSS3</p>
<p><span>Frontend:</span> React.js, Redux, HTML, CSS, Bootstrap</p>
<p><span>Backend:</span> Node.js, Express.js</p>
<p><span>Database:</span> MongoDB, Mongoose</p>
<p><span>Version Control:</span>Git, GitHub</p>
<p><span>Build Tools:</span> Webpack, Babel</p>
<p><span>Testing:</span>Jest, Enzyme</p>
<p><span>RESTful APIs:</span>Design and Implementation</p>
<p><span>Authentication & Authorization:</span> JWT, OAuth</p>
<p><span>Deployment:</span>Heroku, AWS, Docker</p>
<p><span>Tools:</span> VS Code, Postman, npm, Yarn</p>                    
</div> */}
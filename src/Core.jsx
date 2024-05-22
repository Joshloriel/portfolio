import React from 'react'
import Josh from "./assets/josh.jpg"
import BG from "./assets/pbg.jpg"

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'

import { Button } from './components/ui/button'

import { AiFillFacebook, AiFillGoogleCircle, AiFillGithub, AiOutlineCreditCard } from "react-icons/ai";
import bg from './assets/pbg.jpg'
import CoreForm from './CoreForm'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Projects from './Projects'
import Skills from './Skills'


const Core = () => {





    const [title] = useTypewriter({
        words: ["Hello!, I'm Josh Loriel So", "A Web Developer"],
        loop: {},
    })

    const [words1] = useTypewriter({
        words: ["With a year of hands-on experience under my belt, I'm passionate about crafting intuitive interfaces and robust back-end solutions. Each project represents a step in my journey of growth and learning, where I combine creativity with technical expertise to deliver functional and elegant solutions. Join me as we explore the possibilities of web development together. Let's create something amazing."],
        typeSpeed: 1
    })

    return (
        <div className='w-screen overflow-x-hidden'>
            <div
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    background: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',

                }}
                id='profile'
                className="mt-4 overflow-auto md:h-[100vh] h-[100vh] bg-gradient-to-r from-cyan-300 to-blue-700"
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(8px)',
                    }}
                    className='flex items-center justify-center p-5'
                >
                    <div
                        className=" w-full md:overflow-y-hidden overflow-x-hidden overflow-y-auto pb-10 md:w-[60%]  md:h-[70vh] h-[100%] relative bg-slate-800  ">
                        <div className="md:grid md:grid-cols-5 rounded-lg">
                            <div className="h-full p-5 col-span-2">
                                <img src={Josh} alt="josh" className="m-auto w-full h-[100%] rounded-xl" />
                            </div>
                            <div className="text-center p-10 col-span-3 flex flex-col justify-between">
                                <p className="text-4xl font-bold capitalize text-center md:text-start h-14 whitespace-nowrap">
                                    <span className="text-blue-500">{title}<Cursor /></span>
                                </p>
                                <p className="text-md md:w-full md:text-start text-center my-3">
                                    A website developer passionate about crafting effective software solutions. I specialize in turning complex problems into simple, user-friendly applications. Let's create something great together.
                                </p>
                                <div className="flex flex-row gap-2 text-black justify-center md:justify-start items-center">
                                    <div className="text-white cursor-pointer">
                                        <AiFillFacebook size="3rem" />
                                    </div>
                                    <div className="text-white cursor-pointer">
                                        <AiFillGoogleCircle size="3rem" />
                                    </div>
                                    <div className="text-white cursor-pointer">
                                        <AiFillGithub size="3rem" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gap-4 text-center ">
                            <Link to="contact" className="bg-slate-900 py-2 px-3 rounded-md transform hover:scale-105 duration-300 ease-in-out shadow-md hover:shadow-emerald-300">Email me!</Link>
                            <Button className="transform hover:scale-105 duration-300 ease-in-out shadow-md hover:shadow-emerald-300 ms-3">Resume</Button>
                        </div>
                    </div>


                </div>


            </div>
            <Skills />
        </div >
    )
}

export default Core
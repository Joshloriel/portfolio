import React from 'react'
import CoffeeSo from './assets/coffeeso.png'
import { Link } from 'react-router-dom'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./components/ui/carousel"
import { motion } from 'framer-motion'
import { AiFillFacebook, AiFillGoogleCircle, AiFillGithub, AiOutlineCreditCard, AiFillEye, AiFillFolder, AiOutlineEye } from "react-icons/ai";
import MA from "./assets/ma.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
const Projects = () => {
    const Projects = [
        {
            title: "CoffeSo",
            language: 'Tools used: Reactjs, Bootstrap, CSS',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam necessitatibus vitae accusamus ex voluptates recusandae itaque ipsum ducimus quod, tempora, porro tenetur magnam. Pariatur assumenda illum voluptatem quas saepe dolore.",
            image: CoffeeSo,
            git: 'https://github.com/Joshloriel/CoffeeSo2000',
            link: 'http://coffeeso.netlify.app',
            position: 'left'

        },
        {
            title: "MovieLor",
            language: 'Tools used: Reactjs, TMDB Api, Swiper, TailwindCss, Shadcn',
            description: "TMDB Clone: View Popular and Latest TV Shows and Movies",
            image: MA,
            link: 'http://movielor.netlify.app',
            position: 'right'
        },
        {
            title: "3",
            language: 'Reactjs',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam necessitatibus vitae accusamus ex voluptates recusandae itaque ipsum ducimus quod, tempora, porro tenetur magnam. Pariatur assumenda illum voluptatem quas saepe dolore.",
            image: '',
            link: '',
            position: 'left'
        },
        {
            title: "4",
            language: 'React Native',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam necessitatibus vitae accusamus ex voluptates recusandae itaque ipsum ducimus quod, tempora, porro tenetur magnam. Pariatur assumenda illum voluptatem quas saepe dolore.",
            image: '',
            link: '',
            position: 'right'
        },
    ];
    return (
        <div> {/* Projects */}
            <div className="bg-gray-700 h-[100%] flex justify-center md:p-0" id='projects'>
                <div className="container bg-slate-900 w-full md:w-[80%] grid grid-col-1 p-5 mt-12 ">
                    <h1 className='text-center text-5xl font-bold mt-5 mb-10'>Projects</h1>
                    {Projects.map((proj, index) => (
                        <>
                            <motion.div
                                className={`hover:bg-slate-700 hover:shadow-md hidden md:flex flex-col hover:shadow-cyan-400 mt-20 hover:border-4 hover:border-cyan-400 justify-between w-[100%] items-center mb-32 p-5 rounded-lg ${proj.position == 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                key={index}
                                initial={{ x: proj.position === 'left' ? 500 : -500, opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                duration={2}
                            >
                                <img src={proj.image} alt={proj.title} className='w-[20rem] h-[20rem] rounded-sm' />
                                <div className="px-10 first-letter:flex flex-col">
                                    <p className='text-5xl mb-4'>{proj.title} </p>

                                    <p>
                                        {proj.description}
                                    </p>
                                    <p className='mt-3'>
                                        {proj.language}.
                                    </p>
                                    <div className="flex mt-5 w-[20rem]">
                                        <a href={proj.link} className=''><AiOutlineEye fontSize={40} color='#71bfcc' /></a>

                                        <a href={proj.git}><AiFillFolder fontSize={40} color='#71bfcc' /></a>


                                    </div>

                                </div>
                            </motion.div>

                            <div
                                className="hover:bg-slate-700 hover:shadow-md block md:hidden hover:shadow-cyan-400 mt-20 hover:border-4 hover:border-cyan-400 justify-between items-center w-full mb-32 p-5 rounded-lg"
                                key={index}
                                initial={{ x: proj.position === 'left' ? 500 : -500, opacity: 0 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                duration={2}
                            >
                                <img src={proj.image} alt={proj.title} className='w-full h-auto rounded-sm' />
                                <div className="px-4 flex flex-col text-center">
                                    <p className='text-2xl mb-4'>{proj.title}</p>
                                    <p>{proj.description}</p>
                                    <p className='mt-3'>{proj.language}</p>
                                    <div className="flex justify-center mt-5 w-full">
                                        <a href={proj.link} className='mr-3'><AiOutlineEye fontSize={40} color='#71bfcc' /></a>
                                        <a href={proj.git}><AiFillFolder fontSize={40} color='#71bfcc' /></a>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                    )}

                </div>
            </div>
        </div>
    )
}

export default Projects
import React from 'react'
import CoffeeSo from './../assets/coffeeso.png'
import { Link } from 'react-router-dom'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./../components/ui/carousel"
import { motion } from 'framer-motion'
import { AiFillFacebook, AiFillGoogleCircle, AiFillGithub, AiOutlineCreditCard, AiFillEye, AiFillFolder } from "react-icons/ai";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./../components/ui/card"
const Projects = () => {
    const Projects = [
        {
            title: "CoffeSo",
            language: 'PHP',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam necessitatibus vitae accusamus ex voluptates recusandae itaque ipsum ducimus quod, tempora, porro tenetur magnam. Pariatur assumenda illum voluptatem quas saepe dolore.",
            image: CoffeeSo,
            link: 'https://github.com/Joshloriel/CoffeeSo2000',
            position: 'left'

        },
        {
            title: "2",
            language: 'MySQL',
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam necessitatibus vitae accusamus ex voluptates recusandae itaque ipsum ducimus quod, tempora, porro tenetur magnam. Pariatur assumenda illum voluptatem quas saepe dolore.",
            image: '',
            link: '',
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
            <div className="bg-gray-700 min-h-[100vh] flex justify-center md:p-0" id='projects'>
                <div className="container bg-slate-900 w-[80%] grid grid-col-1 p-5 mt-12 ">
                    <h1 className='text-center text-5xl font-bold mt-5 mb-10'>Projects</h1>
                    {Projects.map((proj, index) => (
                        <motion.div
                            className={`flex justify-center items-center mb-32 p-5 rounded-lg ${proj.position == 'left' ? 'flex-row' : 'flex-row-reverse'}`}
                            key={index}
                            initial={{ x: proj.position === 'left' ? 500 : -500, opacity: 0 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            duration={2}
                        >
                            <img src={proj.image} alt={proj.title} className='w-[20rem] h-[20rem] rounded-sm' />
                            <div className="px-10">
                                <div className='flex justify-between'>
                                    <p className='text-5xl mb-4'>{proj.title} </p>
                                    <a href={proj.link} className='bg-slate-700 mt-5 px-3 hover:bg-slate-800 hover:border rounded-md'><AiFillFolder fontSize={40} color='#71bfcc' /></a>
                                </div>
                                <p>
                                    {proj.description}
                                </p>

                            </div>
                        </motion.div>
                    )
                    )}
                    {/* <Carousel className=" md:max-w-6xl w-[280px] md:w-full">
                        <CarouselContent className="-ml-1">
                            {Projects.map((proj, index) => (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 py-5">
                                        <a href={proj.link}>
                                            <Card>
                                                <CardContent className="flex aspect-square items-center flex-col p-5 justify-center h-[20rem] w-full overflow-hidden">
                                                    <p className="text-2xl font-semibold">{proj.title}</p>
                                                    <p>{proj.description}</p>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel> */}
                </div>
            </div>
        </div>
    )
}

export default Projects
import React from 'react';
import Html from './assets/html.png';
import Css from './assets/css.png';
import Bootstrap from './assets/bootstrap.png';
import Laravel from './assets/laravel.png';
import Flutter from './assets/flutter.png';
import Mysql from './assets/Mysql.png';
import Tailwindcss from './assets/tailwindcss.png';
import Reactjs from './assets/reactjs.png';
import Php from './assets/php.png';
import JavaScript from './assets/JavaScript.png';
import { motion } from 'framer-motion';
import { Card, CardContent } from "./components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Skills = () => {

    const Expertise = [
        {
            title: 'Full Stack Development',
            description: 'Crafting Seamless Web Experiences across all Layers with PHP',
        },
        {
            title: 'Responsive Design',
            description: 'Specialized in crafting responsive web designs that seamlessly adapt to various screen sizes and devices for an exceptional user experience.',
        },
        {
            title: 'Frontend Frameworks',
            description: 'Proficient in using frontend frameworks like React to build dynamic and interactive web applications.',
        },
        {
            title: 'Backend Frameworks',
            description: 'Proficient in utilizing Laravel framework to build robust and scalable backend solutions.',
        }
    ];

    const ProgrammingLanguages = [
        { language: 'HTML', image: Html, position: 'left' },
        { language: 'CSS', image: Css, position: 'right' },
        { language: 'PHP', image: Php, position: 'left' },
        { language: 'JavaScript', image: JavaScript, position: 'right' },
        { language: 'Reactjs', image: Reactjs, position: 'left' },
        { language: 'React Native', image: Reactjs, position: 'right' },
        { language: 'MySQL', image: Mysql, position: 'left' },
        { language: 'Laravel', image: Laravel, position: 'right' },
        { language: 'Flutter', image: Flutter, position: 'left' },
        { language: 'Tailwind CSS', image: Tailwindcss, position: 'right' },
        { language: 'Bootstrap', image: Bootstrap, position: 'left' },
    ];

    return (
        <>
            <div className='text-center pt-20 bg-slate-700 text-5xl font-bold pb-5 uppercase block' id='skills'>Expertise</div>
            <div className="min-h-[30vh] bg-slate-700 flex justify-center">
                <div className="w-full px-4 ">
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 1 }}
                        speed={2500} // Set the speed option to 0 to remove the pause between slides
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {ProgrammingLanguages.map((item, index) => (
                            <SwiperSlide key={index}>
                                <Card className="bg-slate-700 cursor-pointer text-white hover:border-slate-800 hover:bg-slate-600 h-40 w-40 overflow-hidden hover:scale-105 hover:shadow-lg duration-300 ease-in-out hover:shadow-emerald-300">
                                    <p className='px-3'>{item.language}</p>
                                    <CardContent className="flex justify-center overflow-hidden">
                                        <img src={item.image} alt={item.language} className='w-[100%] m-4 h-24' />
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>

            <div className="p-3 min-h-[60vh] bg-slate-700 grid md:grid-cols-4 gap-5 grid-cols-1">
                {Expertise.map((item, index) => (
                    <div className="border rounded-lg py-10 px-3 w-full text-center cursor-pointer hover:bg-slate-800" key={index}>
                        <p className='text-3xl font-bold h-20 mb-7'>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Skills;

import { motion } from 'framer-motion';
import { Card, CardContent } from "../components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EXPERTISE, SKILLS } from '../constants';

const Skills = () => {
  return (
    <>
      {/* Expertise Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='text-center pt-20 bg-[var(--bg-secondary)] text-5xl font-bold pb-5 uppercase gradient-text'
        id='skills'
      >
        Expertise
      </motion.div>

      {/* Skills Carousel */}
      <div className="min-h-[30vh] bg-[var(--bg-secondary)] flex justify-center py-8">
        <div className="w-full px-4">
          <Swiper
            slidesPerView={7}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 1, disableOnInteraction: false }}
            speed={2500}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
            }}
          >
            {SKILLS.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-[var(--bg-card)] cursor-pointer text-[var(--text-primary)] border border-white/10 hover:border-[var(--accent-primary)] h-40 w-40 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <p className='px-3 py-2 text-sm font-medium'>{item.language}</p>
                    <CardContent className="flex justify-center overflow-hidden p-2">
                      <img
                        src={item.image}
                        alt={item.language}
                        className='w-full h-24 object-contain'
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Expertise Cards */}
      <div className="p-8 min-h-[60vh] bg-[var(--bg-secondary)] grid md:grid-cols-4 gap-6 grid-cols-1">
        {EXPERTISE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="card-hover bg-[var(--bg-card)] rounded-xl py-8 px-4 text-center border border-white/10"
          >
            <p className='text-2xl font-bold mb-6 gradient-text h-20'>{item.title}</p>
            <p className='text-[var(--text-secondary)] leading-relaxed'>
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Skills;

import { motion } from 'framer-motion';
import { AiOutlineEye, AiFillFolder } from "react-icons/ai";
import CoffeeSo from '../assets/coffeeso.png';
import MA from '../assets/ma.png';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div id='projects' className='bg-[var(--bg-primary)] min-h-screen py-20'>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center text-5xl font-bold mb-16 gradient-text'
        >
          Projects
        </motion.h1>

        {/* Project Cards */}
        <div className="grid gap-16">
          {PROJECTS.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`card-hover bg-[var(--bg-card)] rounded-2xl p-6 md:p-8 border border-white/10 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex items-center gap-8 hover:border-[var(--accent-primary)]`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                {proj.image ? (
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={proj.image}
                    alt={proj.title}
                    className='w-full h-auto rounded-xl shadow-lg object-cover'
                    style={{ maxHeight: '400px' }}
                  />
                ) : (
                  <div className='w-full h-64 bg-[var(--bg-secondary)] rounded-xl flex items-center justify-center border border-white/10'>
                    <span className='text-[var(--text-muted)] text-xl'>No Preview</span>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <h3 className='text-4xl font-bold gradient-text'>{proj.title}</h3>
                <p className='text-[var(--text-secondary)] leading-relaxed'>
                  {proj.description}
                </p>
                <p className='text-sm text-[var(--accent-primary)] font-medium'>
                  {proj.language}
                </p>

                {/* Action Buttons */}
                {(proj.link || proj.git) && (
                  <div className="flex gap-6 mt-4">
                    {proj.link && (
                      <motion.a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors'
                      >
                        <AiOutlineEye fontSize={40} />
                      </motion.a>
                    )}
                    {proj.git && (
                      <motion.a
                        href={proj.git}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className='text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors'
                      >
                        <AiFillFolder fontSize={40} />
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillGoogleCircle, AiFillGithub } from 'react-icons/ai';
import Josh from '../assets/josh.jpg';
import BG from '../assets/pbg.jpg';
import { Button } from '../components/ui/button';
import Skills from './Skills';
import { PROFILE, SOCIAL_LINKS } from '../constants';

const Home = () => {
  const [title] = useTypewriter({
    words: [`Hello!, I'm ${PROFILE.name}`, PROFILE.title],
    loop: true,
  });

  return (
    <div className='w-screen overflow-x-hidden'>
      {/* Hero Section */}
      <section
        style={{
          background: `url(${BG})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        id='profile'
        className="relative mt-4 overflow-hidden md:h-screen h-[100vh]"
      >
        {/* Overlay with blur effect */}
        <div
          className='absolute inset-0 backdrop-blur-sm flex items-center justify-center p-5'
          style={{
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(8px)',
          }}
        >
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[60%] max-h-[70vh] relative bg-[var(--bg-card)] rounded-2xl shadow-2xl overflow-hidden border border-white/10"
          >
            <div className="md:grid md:grid-cols-5">
              {/* Profile Image */}
              <div className="h-full p-5 col-span-2">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={Josh}
                  alt={PROFILE.name}
                  className="m-auto w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Profile Info */}
              <div className="text-center p-8 col-span-3 flex flex-col justify-between">
                <div>
                  <p className="text-4xl font-bold capitalize text-center md:text-start min-h-[4rem]">
                    <span className="gradient-text">{title}<Cursor /></span>
                  </p>
                  <p className="text-md md:w-full md:text-start text-center my-4 text-[var(--text-secondary)] leading-relaxed">
                    {PROFILE.description}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-row gap-4 justify-center md:justify-start items-center mt-6">
                  <motion.a
                    href={SOCIAL_LINKS.facebook}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="text-[var(--accent-primary)] cursor-pointer hover:drop-shadow-[0_0_10px_rgba(137,180,250,0.5)]"
                  >
                    <AiFillFacebook size="2.5rem" />
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.google}
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    className="text-[var(--accent-primary)] cursor-pointer hover:drop-shadow-[0_0_10px_rgba(137,180,250,0.5)]"
                  >
                    <AiFillGoogleCircle size="2.5rem" />
                  </motion.a>
                  <motion.a
                    href={SOCIAL_LINKS.github}
                    whileHover={{ scale: 1.2 }}
                    className="text-[var(--accent-primary)] cursor-pointer hover:drop-shadow-[0_0_10px_rgba(137,180,250,0.5)]"
                  >
                    <AiFillGithub size="2.5rem" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center pb-8 pt-4">
              <Link to="contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Email Me!
                </motion.button>
              </Link>
              <Button
                className="btn-primary"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default Home;

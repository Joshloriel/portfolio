import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MENU_ITEMS } from '../../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-[var(--bg-secondary)]/80 backdrop-blur-xl border-b border-white/10'>
        <div className="container mx-auto px-4">
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <Link to="/" className="text-2xl tracking-widest font-bold gradient-text">
              Portfolio
            </Link>

            {/* Desktop Menu */}
            <ul className='hidden md:flex flex-row gap-2'>
              {MENU_ITEMS.map((item) => (
                <li key={item.link}>
                  <Link
                    to={item.link}
                    className={`nav-link ${
                      isActive(item.link) ? 'text-[var(--accent-primary)]' : 'text-[var(--text-secondary)]'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-[var(--text-primary)]"
            >
              {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-[var(--bg-secondary)] z-50 md:hidden border-l border-white/10"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="text-2xl font-bold gradient-text">Portfolio</h2>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="text-[var(--text-primary)]"
                  >
                    <AiOutlineClose size={28} />
                  </motion.button>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 px-6 py-4">
                  <ul className="space-y-4">
                    {MENU_ITEMS.map((item) => (
                      <motion.li
                        key={item.link}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          to={item.link}
                          onClick={() => setIsOpen(false)}
                          className={`block text-xl font-medium transition-colors ${
                            isActive(item.link)
                              ? 'text-[var(--accent-primary)]'
                              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                          }`}
                        >
                          {item.title}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <footer className="p-6 border-t border-white/10 text-center">
                  <p className="text-sm text-[var(--text-muted)]">
                    © 2024 @joshlorielsoo. All rights reserved.
                  </p>
                </footer>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

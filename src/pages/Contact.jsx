import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Thank you for your message! I will get back to you soon.');
  };

  return (
    <div id='contact' className='min-h-screen bg-[var(--bg-primary)] py-20 px-4'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-2xl"
      >
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-bold text-center mb-8 gradient-text'
        >
          Get In Touch
        </motion.h2>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="card-hover bg-[var(--bg-card)] rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Fields */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm font-medium text-[var(--text-secondary)]">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  {...register('firstName', { required: 'First name is required' })}
                  className="px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-white/10 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)] transition-all"
                  placeholder="John"
                />
                {errors.firstName && (
                  <span className="text-xs text-[var(--error)]">{errors.firstName.message}</span>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="middleName" className="text-sm font-medium text-[var(--text-secondary)]">
                  Middle Name
                </label>
                <input
                  id="middleName"
                  type="text"
                  {...register('middleName')}
                  className="px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-white/10 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)] transition-all"
                  placeholder="Michael"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm font-medium text-[var(--text-secondary)]">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  {...register('lastName', { required: 'Last name is required' })}
                  className="px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-white/10 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)] transition-all"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <span className="text-xs text-[var(--error)]">{errors.lastName.message}</span>
                )}
              </div>
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--text-secondary)]">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                className="px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-white/10 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)] transition-all"
                placeholder="john@example.com"
              />
              {errors.email && (
                <span className="text-xs text-[var(--error)]">{errors.email.message}</span>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[var(--text-secondary)]">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Message is required' })}
                className="px-4 py-3 rounded-lg bg-[var(--bg-secondary)] border border-white/10 text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-glow)] transition-all resize-none"
                placeholder="Your message here..."
              />
              {errors.message && (
                <span className="text-xs text-[var(--error)]">{errors.message.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full mt-4"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;

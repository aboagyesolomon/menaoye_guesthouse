import React from 'react';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <div style={styles.container}>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 10 }}
        style={styles.card}
      >
        <motion.h1
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={styles.heading}
        >
          🚧 Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={styles.paragraph}
        >
          We’re working on something amazing. Stay tuned!
        </motion.p>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#c2b66e',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  card: {
    background: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#f8f8f8',
  },
};

export default ComingSoon;

import React from 'react';
import { Code, Database, Cpu, Zap, Globe, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingTechIcons: React.FC = () => {
  const icons = [
    { Icon: Code, position: { top: '20%', left: '10%' }, delay: 0 },
    { Icon: Database, position: { top: '60%', left: '15%' }, delay: 1 },
    { Icon: Cpu, position: { top: '30%', right: '20%' }, delay: 2 },
    { Icon: Zap, position: { top: '70%', right: '10%' }, delay: 3 },
    { Icon: Globe, position: { top: '15%', right: '40%' }, delay: 4 },
    { Icon: Palette, position: { top: '80%', left: '40%' }, delay: 5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, position, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/30"
          style={position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: delay,
            ease: "easeInOut"
          }}
        >
          <Icon size={40} className="drop-shadow-lg" />
        </motion.div>
      ))}
      
      {/* Additional floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-gradient-primary rounded-full opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingTechIcons;
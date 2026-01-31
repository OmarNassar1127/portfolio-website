import React from 'react';
import { motion } from 'framer-motion';

/**
 * Liquid Glass Background Component
 * Creates animated morphing blobs with glassmorphism effect
 */
const LiquidGlass = ({ isDarkMode, intensity = 'medium' }) => {
  const intensityMap = {
    low: { blur: 80, opacity: 0.15 },
    medium: { blur: 100, opacity: 0.25 },
    high: { blur: 120, opacity: 0.35 },
  };
  
  const { blur, opacity } = intensityMap[intensity] || intensityMap.medium;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Main liquid blob - morphing animation */}
      <motion.div
        className="absolute"
        style={{
          top: '-10%',
          right: '-5%',
          width: '500px',
          height: '500px',
          background: isDarkMode 
            ? `linear-gradient(135deg, rgba(136, 115, 239, ${opacity}), rgba(0, 212, 255, ${opacity * 0.6}))`
            : `linear-gradient(135deg, rgba(136, 115, 239, ${opacity * 1.2}), rgba(0, 212, 255, ${opacity * 0.8}))`,
          filter: `blur(${blur}px)`,
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
        }}
        animate={{
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '40% 60% 60% 40% / 50% 60% 40% 50%',
            '30% 70% 70% 30% / 30% 30% 70% 70%',
          ],
          scale: [1, 1.05, 0.95, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary blob */}
      <motion.div
        className="absolute"
        style={{
          top: '40%',
          left: '-10%',
          width: '400px',
          height: '400px',
          background: isDarkMode
            ? `linear-gradient(225deg, rgba(0, 212, 255, ${opacity * 0.8}), rgba(136, 115, 239, ${opacity * 0.5}))`
            : `linear-gradient(225deg, rgba(0, 212, 255, ${opacity}), rgba(136, 115, 239, ${opacity * 0.7}))`,
          filter: `blur(${blur}px)`,
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
        }}
        animate={{
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '50% 50% 40% 60% / 40% 50% 50% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ],
          scale: [1, 0.95, 1.05, 1],
          rotate: [0, -5, 5, 0],
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Accent blob - smaller, faster */}
      <motion.div
        className="absolute"
        style={{
          bottom: '10%',
          right: '20%',
          width: '300px',
          height: '300px',
          background: isDarkMode
            ? `linear-gradient(315deg, rgba(255, 0, 110, ${opacity * 0.6}), rgba(136, 115, 239, ${opacity * 0.4}))`
            : `linear-gradient(315deg, rgba(255, 0, 110, ${opacity * 0.5}), rgba(136, 115, 239, ${opacity * 0.3}))`,
          filter: `blur(${blur * 0.9}px)`,
          borderRadius: '40% 60% 60% 40% / 50% 60% 40% 50%',
        }}
        animate={{
          borderRadius: [
            '40% 60% 60% 40% / 50% 60% 40% 50%',
            '70% 30% 50% 50% / 30% 70% 30% 70%',
            '50% 50% 30% 70% / 60% 40% 60% 40%',
            '40% 60% 60% 40% / 50% 60% 40% 50%',
          ],
          scale: [1, 1.1, 0.9, 1],
          x: [0, -30, 20, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Micro accent blobs for depth */}
      <motion.div
        className="absolute"
        style={{
          top: '20%',
          right: '40%',
          width: '150px',
          height: '150px',
          background: isDarkMode
            ? `radial-gradient(circle, rgba(0, 212, 255, ${opacity * 0.5}), transparent 70%)`
            : `radial-gradient(circle, rgba(136, 115, 239, ${opacity * 0.4}), transparent 70%)`,
          filter: `blur(${blur * 0.6}px)`,
        }}
        animate={{
          scale: [1, 1.3, 0.8, 1],
          opacity: [0.5, 0.8, 0.4, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

/**
 * Liquid Glass Card Component
 * A card with glassmorphism effect that responds to mouse movement
 */
export const LiquidGlassCard = ({ 
  children, 
  className = '', 
  isDarkMode, 
  hover = true,
  glow = false 
}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current || !hover) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`
        relative overflow-hidden rounded-2xl
        ${isDarkMode 
          ? 'bg-white/5 border border-white/10' 
          : 'bg-white/70 border border-white/50'
        }
        backdrop-blur-xl
        transition-all duration-300
        ${hover ? 'hover:shadow-2xl hover:-translate-y-1' : ''}
        ${glow && isDarkMode ? 'hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]' : ''}
        ${glow && !isDarkMode ? 'hover:shadow-[0_0_40px_rgba(136,115,239,0.2)]' : ''}
        ${className}
      `}
      style={{
        background: hover ? `
          radial-gradient(
            circle at ${mousePosition.x}% ${mousePosition.y}%,
            ${isDarkMode ? 'rgba(136, 115, 239, 0.1)' : 'rgba(136, 115, 239, 0.08)'},
            transparent 50%
          ),
          ${isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.7)'}
        ` : undefined,
      }}
      whileHover={hover ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {/* Inner glow effect */}
      {glow && (
        <div 
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(
              circle at ${mousePosition.x}% ${mousePosition.y}%,
              ${isDarkMode ? 'rgba(0, 212, 255, 0.15)' : 'rgba(136, 115, 239, 0.1)'},
              transparent 60%
            )`,
          }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </motion.div>
  );
};

/**
 * Liquid Glass Button Component
 */
export const LiquidGlassButton = ({ 
  children, 
  className = '', 
  isDarkMode,
  variant = 'primary', // primary, secondary, ghost
  ...props 
}) => {
  return (
    <motion.button
      className={`
        relative overflow-hidden px-6 py-3 rounded-full font-medium
        transition-all duration-300
        ${variant === 'primary' ? `
          ${isDarkMode 
            ? 'bg-gradient-to-r from-primaryColor to-accent-cyan text-white shadow-lg shadow-primaryColor/25' 
            : 'bg-gradient-to-r from-primaryColor to-purple-500 text-white shadow-lg shadow-primaryColor/30'
          }
          hover:shadow-xl hover:shadow-primaryColor/40
        ` : ''}
        ${variant === 'secondary' ? `
          backdrop-blur-xl
          ${isDarkMode 
            ? 'bg-white/10 border border-white/20 text-white hover:bg-white/15' 
            : 'bg-white/50 border border-white/50 text-gray-800 hover:bg-white/70'
          }
        ` : ''}
        ${variant === 'ghost' ? `
          ${isDarkMode 
            ? 'text-white/70 hover:text-white hover:bg-white/5' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
          }
        ` : ''}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {/* Shimmer effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default LiquidGlass;

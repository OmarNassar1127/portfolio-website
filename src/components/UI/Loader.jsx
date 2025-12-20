import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showName, setShowName] = useState(false);
  const hasCompletedRef = useRef(false);

  const firstName = "Omar";
  const lastName = "Nassar";

  useEffect(() => {
    // Show name after a brief delay
    const nameTimeout = setTimeout(() => setShowName(true), 200);

    // Progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (hasCompletedRef.current) return prev;

        const remaining = 100 - prev;
        const increment = Math.random() * (remaining > 30 ? 4 : 1.5) + 0.8;
        const newProgress = Math.min(prev + increment, 100);

        if (newProgress >= 100 && !hasCompletedRef.current) {
          hasCompletedRef.current = true;
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 200);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearTimeout(nameTimeout);
    };
  }, []);

  // Letter animation variants
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -90,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: -30,
      filter: "blur(10px)",
      transition: {
        duration: 0.3,
        delay: i * 0.02,
      },
    }),
  };

  // Floating particles - fewer on mobile for performance
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const particleCount = isMobile ? 12 : 30;

  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  // Don't render anything if we've completed
  if (hasCompletedRef.current && isExiting) {
    return (
      <motion.div
        className="fixed inset-0 z-50 bg-[#0a0a0f]"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    );
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a0a0f 0%, #12121a 50%, #0a0a0f 100%)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(136, 115, 239, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 50% 80%, rgba(255, 0, 110, 0.08) 0%, transparent 40%)
            `,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/20"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Name reveal */}
        <AnimatePresence mode="wait">
          {showName && !isExiting && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* First name */}
              <div className="flex justify-center overflow-hidden mb-2">
                {firstName.split("").map((letter, i) => (
                  <motion.span
                    key={`first-${i}`}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-5xl sm:text-7xl md:text-8xl font-bold text-white inline-block"
                    style={{
                      textShadow: "0 0 40px rgba(136, 115, 239, 0.5)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* Last name */}
              <div className="flex justify-center overflow-hidden">
                {lastName.split("").map((letter, i) => (
                  <motion.span
                    key={`last-${i}`}
                    custom={i + firstName.length}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="text-5xl sm:text-7xl md:text-8xl font-bold inline-block"
                    style={{
                      background: "linear-gradient(135deg, #8873ef 0%, #00d4ff 50%, #ff006e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Role text */}
        <AnimatePresence>
          {showName && !isExiting && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-gray-400 text-sm sm:text-base tracking-[0.3em] uppercase mb-12"
            >
              Full Stack Developer & AI Engineer
            </motion.p>
          )}
        </AnimatePresence>

        {/* Progress section */}
        <AnimatePresence>
          {!isExiting && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              {/* Progress bar */}
              <div className="relative w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="absolute top-0 left-0 h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #8873ef, #00d4ff, #ff006e)",
                    boxShadow: "0 0 20px rgba(136, 115, 239, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)",
                  }}
                  transition={{ duration: 0.1 }}
                />

                {/* Glow effect at the end */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                  style={{
                    left: `calc(${progress}% - 8px)`,
                    background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)",
                    filter: "blur(2px)",
                  }}
                />
              </div>

              {/* Progress percentage */}
              <div className="flex items-center gap-3">
                <motion.span
                  className="text-2xl sm:text-3xl font-light text-white tabular-nums"
                  key={Math.floor(progress)}
                >
                  {Math.floor(progress)}
                </motion.span>
                <span className="text-white/30 text-lg">%</span>
              </div>

              {/* Loading text */}
              <motion.div
                className="mt-4 flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-primaryColor"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500 tracking-wider uppercase">
                  Loading
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-white/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-white/10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-white/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-white/10" />
    </motion.div>
  );
};

export default Loader;

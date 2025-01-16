import { motion } from "framer-motion";

const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background/95 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-l from-accent via-primary to-accent blur-[120px]"
      />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/20 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
        <div className="absolute inset-0 bg-noise opacity-20" />
      </div>
    </div>
  );
};

export default BackgroundGradient;

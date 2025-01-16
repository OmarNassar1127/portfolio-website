import { motion } from "framer-motion";

const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.2, 0.3],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/30 to-accent/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.3, 0.2],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-l from-accent/30 via-primary/20 to-secondary/30 blur-3xl"
      />
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
    </div>
  );
};

export default BackgroundGradient;

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Loader = ({ onLoadingComplete }) => {
  const [phase, setPhase] = useState("boot"); // boot, scan, complete
  const [logs, setLogs] = useState([]);
  const canvasRef = useRef(null);
  const runOnce = useRef(false);

  useEffect(() => {
    if (runOnce.current) return; // Prevent double execution
    runOnce.current = true;

    const bootLogs = [
      "OMAR_OS v2.0.4 INITIALIZING...",
      "[10:24:01] LOADING CORE MODULES...",
      "[10:24:02] VERIFYING ENCRYPTION KEYS...",
      "[10:24:03] CALIBRATING NEURAL INTERFACE...",
      "[10:24:04] OPTIMIZING BIOMETRIC SENSORS...",
      "SYSTEM READY."
    ];

    // Phase 1: Terminal Boot Sequence
    if (phase === "boot") {
      let delay = 0;
      bootLogs.forEach((log, index) => {
        // Extended timing: 400-800ms delay per line to add ~1.5s total
        delay += Math.random() * 400 + 400;
        setTimeout(() => {
          setLogs((prev) => [...prev, log]);
          if (index === bootLogs.length - 1) {
            setTimeout(() => setPhase("scan"), 800);
          }
        }, delay);
      });
    }
  }, [phase]); // Run only once on mount, but check phase inside if needed (logic changed to run once)

  // Phase 2: Face Scan Completion (Separate effect to handle phase change)
  useEffect(() => {
    if (phase === "scan") {
      const scanTimeout = setTimeout(() => {
        setPhase("complete");
        setTimeout(onLoadingComplete, 800);
      }, 2500);
      return () => clearTimeout(scanTimeout);
    }
  }, [phase, onLoadingComplete]);

  // 3D Particle Animation Logic - Runs immediately
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    const particleCount = 800;
    let rotation = 0;

    // Initialize Particles (Restored Ellipsoid Shape)
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      // Simple Ellipsoid
      const r = 100;
      const x = r * Math.sin(phi) * Math.cos(theta) * 0.85; // Slightly narrow width
      const y = r * Math.sin(phi) * Math.sin(theta) * 1.2;  // Taller height
      const z = r * Math.cos(phi);

      particles.push({ x, y, z, baseX: x, baseY: y, baseZ: z });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      rotation += 0.015; // Slightly faster rotation

      particles.sort((a, b) => {
        const zA = a.baseX * Math.sin(rotation) + a.baseZ * Math.cos(rotation);
        const zB = b.baseX * Math.sin(rotation) + b.baseZ * Math.cos(rotation);
        return zB - zA;
      });

      particles.forEach((p) => {
        const xRot = p.baseX * Math.cos(rotation) - p.baseZ * Math.sin(rotation);
        const zRot = p.baseX * Math.sin(rotation) + p.baseZ * Math.cos(rotation);

        const scale = 300 / (300 + zRot);
        const x2d = centerX + xRot * scale;
        const y2d = centerY + p.baseY * scale;

        const alpha = (zRot + 100) / 200;

        // Brand Color: #8873ef
        ctx.fillStyle = `rgba(136, 115, 239, ${Math.max(0.1, alpha)})`;

        ctx.beginPath();
        ctx.arc(x2d, y2d, scale * 1.5, 0, Math.PI * 2);
        ctx.fill();

        if (Math.random() > 0.97) {
          ctx.strokeStyle = `rgba(136, 115, 239, ${Math.max(0.05, alpha * 0.3)})`;
          ctx.beginPath();
          ctx.moveTo(x2d, y2d);
          ctx.lineTo(x2d + (Math.random() - 0.5) * 20, y2d + (Math.random() - 0.5) * 20);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []); // Run once on mount

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-[#8873ef] font-mono overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Background Grid - Purple Tint */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a103c_1px,transparent_1px),linear-gradient(to_bottom,#1a103c_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 pointer-events-none"></div>

      {/* PHASE 1: TERMINAL BOOT - Absolute Positioned */}
      <motion.div
        className="absolute w-full max-w-lg p-6 z-10"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "boot" ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ pointerEvents: phase === "boot" ? "auto" : "none" }}
      >
        <div className="border-b border-[#8873ef]/30 mb-4 pb-2 flex justify-between text-xs text-[#8873ef]/70">
          <span>MEM: 64384K OK</span>
          <span>CPU: 12 CORES ACTIVE</span>
        </div>
        <div className="space-y-2 text-sm md:text-base">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-[#8873ef]">{">"}</span>
              <span className={i === logs.length - 1 ? "animate-pulse" : ""}>{log}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* PHASE 2: 3D PARTICLE HEAD - Always Rendered, Opacity Controlled */}
      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: (phase === "scan" || phase === "complete") ? 1 : 0,
          scale: (phase === "scan" || phase === "complete") ? 1 : 0.8
        }}
        transition={{ duration: 0.8 }}
      >
        {/* Canvas Container */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          <canvas
            ref={canvasRef}
            width={400}
            height={400}
            className="w-full h-full"
          />

          {/* Scanning Bar Overlay - Purple */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-[#8873ef] shadow-[0_0_15px_rgba(136,115,239,0.8)]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Status Text */}
        <motion.div
          className="mt-4 text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: (phase === "scan" || phase === "complete") ? 1 : 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl tracking-[0.2em] font-bold text-[#8873ef]">
            {phase === "complete" ? "IDENTITY VERIFIED" : "NEURAL SCANNING..."}
          </h2>
          <p className="text-xs text-[#8873ef]/80">
            {phase === "complete" ? "ACCESS GRANTED" : "ANALYZING BIOMETRIC DATA"}
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-10 w-64 h-1 bg-[#8873ef]/20">
        <motion.div
          className="h-full bg-[#8873ef]"
          initial={{ width: "0%" }}
          animate={{ width: phase === "complete" ? "100%" : phase === "scan" ? "80%" : "40%" }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;

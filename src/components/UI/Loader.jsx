import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const canvasRef = useRef(null);

  // Configuration - Scale relative to viewport
  const config = {
    triggerChance: 0.15, // Chance for input nodes to fire
    signalSpeed: 0.08,   // Base speed
    trailLength: 10,     // Length of signal trail
  };

  useEffect(() => {
    // Non-linear progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        // Slow down as we get closer to 100
        const remaining = 100 - prev;
        const increment = Math.random() * (remaining > 20 ? 3 : 1) + 0.2;
        const newProgress = Math.min(prev + increment, 100);

        if (newProgress >= 100) {
          clearInterval(interval);
          startExitSequence();
          return 100;
        }
        return newProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const startExitSequence = () => {
    setIsExiting(true);
    setTimeout(onLoadingComplete, 1500); // Allow time for exit animation
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // State
    let width = window.innerWidth;
    let height = window.innerHeight;
    let nodes = [];
    let connections = [];
    let signals = [];
    let animationFrameId;
    let time = 0;

    // Colors
    const colors = {
      bg: "#050510", // Very dark blue/black
      input: { base: "#FF8C00", glow: "#FFA500" }, // Dark Orange / Orange
      hidden: { base: "#00CED1", glow: "#00FFFF" }, // Dark Turquoise / Cyan
      output: { base: "#C71585", glow: "#FF1493" }, // Medium Violet Red / Deep Pink
      connection: "rgba(100, 116, 139, 0.15)", // Slate 500 equivalent, low opacity
      signal: "#FFFFFF"
    };

    // Initialization Function (Responsive)
    const initModel = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      nodes = [];
      connections = [];

      // Calculate Responsive Dimensions
      // We want the network to take up about 80% of width and 60% of height max
      const networkWidth = Math.min(width * 0.9, 1000);
      const networkHeight = Math.min(height * 0.7, 600);

      const layersConfig = [
        { count: 3, type: 'input', color: colors.input },
        { count: 5, type: 'hidden', color: colors.hidden },
        { count: 5, type: 'hidden', color: colors.hidden },
        { count: 2, type: 'output', color: colors.output }
      ];

      const layerSpacing = networkWidth / (layersConfig.length);
      const startX = (width - (layersConfig.length - 1) * layerSpacing) / 2;

      layersConfig.forEach((layerConf, layerIndex) => {
        const layerX = startX + layerIndex * layerSpacing;
        const nodeSpacing = networkHeight / (layerConf.count + 1);
        const startY = (height - (layerConf.count - 1) * nodeSpacing) / 2;

        for (let i = 0; i < layerConf.count; i++) {
          nodes.push({
            x: layerX,
            y: startY + i * nodeSpacing,
            layerIndex: layerIndex,
            type: layerConf.type,
            color: layerConf.color,
            baseRadius: Math.max(4, Math.min(width, height) * 0.006), // Responsive radius
            activation: 0,
            pulseOffset: Math.random() * Math.PI * 2
          });
        }
      });

      // Connect Layers
      nodes.forEach(node => {
        const nextLayerNodes = nodes.filter(n => n.layerIndex === node.layerIndex + 1);
        nextLayerNodes.forEach(target => {
          connections.push({
            from: node,
            to: target,
            active: 0 // 0 to 1, fades out
          });
        });
      });
    };

    window.addEventListener("resize", initModel);
    initModel();

    // Render Loop
    const render = () => {
      // Clear with trail effect for "Cyberpunk" feel
      ctx.fillStyle = isExiting ? "rgba(5, 5, 16, 0.3)" : "rgba(5, 5, 16, 1)";
      ctx.fillRect(0, 0, width, height);
      time += 0.05;

      // 1. Logic: Spawn Signals
      if (!isExiting && Math.random() < config.triggerChance) {
        const inputs = nodes.filter(n => n.layerIndex === 0);
        const source = inputs[Math.floor(Math.random() * inputs.length)];
        source.activation = 1;

        // Find connections
        const nodeConns = connections.filter(c => c.from === source);
        if (nodeConns.length > 0) {
          const conn = nodeConns[Math.floor(Math.random() * nodeConns.length)];
          conn.active = 1; // Highlight connection
          signals.push({
            conn: conn,
            progress: 0,
            speed: config.signalSpeed + Math.random() * 0.02,
            trail: []
          });
        }
      }

      // 2. Logic: Move Signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i];
        sig.progress += sig.speed;

        // Record trail
        const currentPos = {
          x: sig.conn.from.x + (sig.conn.to.x - sig.conn.from.x) * sig.progress,
          y: sig.conn.from.y + (sig.conn.to.y - sig.conn.from.y) * sig.progress
        };
        sig.trail.push(currentPos);
        if (sig.trail.length > config.trailLength) sig.trail.shift();

        if (sig.progress >= 1) {
          // Hit target
          sig.conn.to.activation = 1;

          // Should propagate?
          if (!isExiting && sig.conn.to.layerIndex < 3) { // 3 is output layer index
            const nextConns = connections.filter(c => c.from === sig.conn.to);
            if (nextConns.length > 0) {
              const nextConn = nextConns[Math.floor(Math.random() * nextConns.length)];
              nextConn.active = 1;
              signals.push({
                conn: nextConn,
                progress: 0,
                speed: config.signalSpeed,
                trail: []
              });
            }
          }
          signals.splice(i, 1);
        }
      }

      // 3. Logic: Exit Animation
      if (isExiting) {
        nodes.forEach(node => {
          const centerX = width / 2;
          const centerY = height / 2;
          node.x += (centerX - node.x) * 0.1;
          node.y += (centerY - node.y) * 0.1;
        });
      }

      // 4. Draw Connections
      connections.forEach(conn => {
        // Decay activity
        if (conn.active > 0) conn.active -= 0.02;

        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);

        if (conn.active > 0.1) {
          ctx.strokeStyle = `rgba(136, 115, 239, ${conn.active * 0.5})`; // Primary highlight
          ctx.lineWidth = 1.5;
        } else {
          ctx.strokeStyle = colors.connection;
          ctx.lineWidth = 0.5;
        }
        ctx.stroke();
      });

      // 5. Draw Signals (Trails)
      signals.forEach(sig => {
        if (sig.trail.length < 2) return;

        ctx.beginPath();
        ctx.moveTo(sig.trail[0].x, sig.trail[0].y);
        for (let j = 1; j < sig.trail.length; j++) {
          ctx.lineTo(sig.trail[j].x, sig.trail[j].y);
        }

        // Gradient Trail
        const grad = ctx.createLinearGradient(
          sig.trail[0].x, sig.trail[0].y,
          sig.trail[sig.trail.length - 1].x, sig.trail[sig.trail.length - 1].y
        );
        grad.addColorStop(0, "rgba(255, 255, 255, 0)");
        grad.addColorStop(1, "rgba(255, 255, 255, 1)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();

        // Head
        const head = sig.trail[sig.trail.length - 1];
        ctx.shadowBlur = 8;
        ctx.shadowColor = "#fff";
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 6. Draw Nodes
      nodes.forEach(node => {
        // Decay activation
        if (node.activation > 0) node.activation -= 0.03;
        if (node.activation < 0) node.activation = 0;

        // Pulse calculation
        const pulse = Math.sin(time + node.pulseOffset) * 0.1 + 1;
        const currentRadius = node.baseRadius * pulse + (node.activation * 3);

        // 1. Glow (if active)
        if (node.activation > 0.1 || node.type === 'output') { // Output always glows a bit
          const glowStrength = node.activation > 0.1 ? node.activation : 0.3;
          const glowSize = currentRadius * 3;
          const g = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);
          g.addColorStop(0, node.color.glow + Math.floor(glowStrength * 255).toString(16).padStart(2, '0')); // Hex opacity hack
          g.addColorStop(1, "rgba(0,0,0,0)");

          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // 2. Core (Glassy look)
        ctx.fillStyle = "#000"; // Black core to cover lines
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // 3. Colored Rim/Surface
        ctx.strokeStyle = node.activation > 0.5 ? "#fff" : node.color.base;
        ctx.lineWidth = 2;
        ctx.stroke();

        // 4. Inner "Gloss"
        ctx.fillStyle = node.color.base;
        ctx.globalAlpha = 0.3 + node.activation * 0.7; // Brighten on hit
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius - 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", initModel);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isExiting, config.signalSpeed, config.triggerChance, config.trailLength]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050510] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block z-0"
      />

      <AnimatePresence>
        {!isExiting && (
          <motion.div
            className="relative z-10 text-center pointer-events-none mt-[35vh] md:mt-[40vh]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            {/* HUD Elements */}
            <div className="flex items-center justify-center gap-6 mb-4 text-[10px] md:text-xs font-mono text-cyan-500/60 tracking-[0.2em] uppercase">
              <span>Input: Active</span>
              <span>Hidden: Processing</span>
              <span>Output: Pending</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter mb-4"
              style={{ textShadow: "0 0 30px rgba(255,255,255,0.3)" }}>
              {Math.floor(progress)}%
            </h2>

            <div className="flex flex-col items-center gap-2">
              <div className="w-64 h-[2px] bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs font-mono text-gray-500 animate-pulse">
                TRAINING NEURAL MODEL
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Flash Overlay */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none z-50"
        initial={{ opacity: 0 }}
        animate={isExiting ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 1.5, times: [0, 0.1, 1], ease: "circOut" }}
      />
    </motion.div>
  );
};

export default Loader;

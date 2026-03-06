import React, { useEffect, useRef, useMemo } from "react";
import portfolios from "../../assets/data/portfolioData";
import { motion } from "framer-motion";

/**
 * Splits a long description into a short intro + bullet-point highlights.
 * Heuristic: first sentence = intro, remaining sentences become bullets.
 */
const parseDescription = (text) => {
  if (!text) return { intro: "", highlights: [] };
  // Split on period followed by space and a capital letter (sentence boundary)
  const sentences = text.match(/[^.!]+[.!]+/g) || [text];
  const intro = sentences.slice(0, 2).join("").trim();
  const rest = sentences.slice(2);

  // Group remaining sentences into meaningful highlights
  const highlights = [];
  let buffer = "";
  for (const s of rest) {
    buffer += s;
    // Each highlight should be ~1-2 sentences
    if (buffer.length > 60) {
      highlights.push(buffer.trim());
      buffer = "";
    }
  }
  if (buffer.trim()) highlights.push(buffer.trim());

  return { intro, highlights };
};

/** Icon mapping for common tech keywords */
const techIcons = {
  react: "⚛️",
  "next.js": "▲",
  node: "🟢",
  "node.js": "🟢",
  python: "🐍",
  fastapi: "⚡",
  typescript: "🔷",
  tailwind: "🎨",
  "tailwind css": "🎨",
  postgresql: "🐘",
  sqlite: "📦",
  docker: "🐳",
  redis: "🔴",
  graphql: "◈",
  "openai gpt-4": "🧠",
  rag: "📚",
  langchain: "🔗",
  "stable diffusion": "🎨",
  controlnet: "🎛️",
  "vision ai": "👁️",
  "computer vision": "👁️",
  "client-side ai": "🧠",
  mediapipe: "📐",
  vite: "⚡",
  supabase: "💚",
  "whatsapp business api": "💬",
  nlp: "🗣️",
  "calendar api": "📅",
  webrtc: "📡",
  "whisper.cpp": "🎙️",
  vue: "💚",
  "vue.js": "💚",
  laravel: "🔺",
  php: "🐘",
};

const getTechIcon = (tech) => {
  const key = tech.toLowerCase();
  return techIcons[key] || null;
};

/** Categorize techs into groups using exact-match sets (lowercased) */
const AI_TECHS = new Set([
  "openai gpt-4", "openai gpt-3.5", "gpt-4", "gpt-3.5",
  "rag", "langchain", "nlp", "computer vision", "client-side ai",
  "mediapipe", "whisper.cpp", "stable diffusion", "controlnet",
  "vision ai", "ollama", "qdrant", "llama", "gemini",
  "machine learning", "tensorflow", "pytorch", "hugging face",
]);

const INFRA_TECHS = new Set([
  "docker", "redis", "supabase", "postgresql", "sqlite", "mongodb",
  "calendar api", "whatsapp business api", "webrtc", "aws", "gcp",
  "vercel", "railway", "firebase", "kubernetes", "nginx",
]);

const categorizeTechs = (technologies, isAIProject) => {
  const groups = { core: [], ai: [], infra: [] };

  technologies.forEach((tech) => {
    const lower = tech.toLowerCase();
    if (AI_TECHS.has(lower)) {
      groups.ai.push(tech);
    } else if (INFRA_TECHS.has(lower)) {
      groups.infra.push(tech);
    } else {
      groups.core.push(tech);
    }
  });

  // For non-AI projects, merge any accidental AI hits back into core
  if (!isAIProject && groups.ai.length > 0) {
    groups.core.push(...groups.ai);
    groups.ai = [];
  }

  // Don't show groups if there's only one non-empty group
  return groups;
};

const Modal = ({ activeID, setShowModal, language }) => {
  const portfolio = portfolios.find((p) => p.id === activeID);
  const isAI = portfolio.category === "ai/ml";
  const modalRef = useRef(null);

  const description =
    language === "EN" ? portfolio.descriptionEN : portfolio.descriptionNL;
  const { intro, highlights } = useMemo(
    () => parseDescription(description),
    [description]
  );

  const techGroups = useMemo(
    () => categorizeTechs(portfolio.technologies, isAI),
    [portfolio.technologies, isAI]
  );

  const nonEmptyGroups = [techGroups.core, techGroups.ai, techGroups.infra].filter(g => g.length > 0);
  const hasGroupedTechs = nonEmptyGroups.length > 1;

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [setShowModal]);

  const hasLiveLink = portfolio.siteUrl && portfolio.siteUrl !== "#";

  const groupLabels = {
    core: { en: "Core Stack", nl: "Kern Stack", icon: "🛠" },
    ai: { en: "AI & Intelligence", nl: "AI & Intelligentie", icon: "🧠" },
    infra: { en: "Infrastructure", nl: "Infrastructuur", icon: "☁️" },
  };

  const renderTechGroup = (techs, groupKey, startIndex) => {
    if (techs.length === 0) return null;
    const label = groupLabels[groupKey];

    return (
      <div key={groupKey}>
        {hasGroupedTechs && (
          <div
            className={`flex items-center gap-2 mb-3 ${
              groupKey !== "core" ? "mt-4" : ""
            }`}
          >
            <span className="text-sm">{label.icon}</span>
            <span
              className={`text-[11px] font-semibold tracking-wider uppercase ${
                isAI ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {language === "EN" ? label.en : label.nl}
            </span>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {techs.map((tech, i) => {
            const icon = getTechIcon(tech);
            return (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.12 + (startIndex + i) * 0.035,
                  duration: 0.35,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={`
                  group/tag inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-[13px] font-medium
                  cursor-default transition-all duration-250 select-none
                  ${
                    isAI
                      ? "bg-white/[0.04] text-gray-300 border border-white/[0.07] hover:bg-purple-500/15 hover:border-purple-400/25 hover:text-purple-100 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
                      : "bg-gray-50/80 text-gray-600 border border-gray-200/60 hover:bg-primaryColor/[0.06] hover:border-primaryColor/25 hover:text-primaryColor hover:shadow-[0_0_20px_rgba(136,115,239,0.08)]"
                  }
                `}
              >
                {icon && (
                  <span className="text-xs opacity-70 group-hover/tag:opacity-100 transition-opacity">
                    {icon}
                  </span>
                )}
                {tech}
              </motion.span>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={() => setShowModal(false)}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 28, stiffness: 350 }}
        onClick={(e) => e.stopPropagation()}
        className={`
          relative w-full max-w-[860px] max-h-[88vh] rounded-3xl overflow-hidden
          shadow-[0_32px_80px_rgba(0,0,0,0.45)]
          ${
            isAI
              ? "bg-[#0d0d1a] border border-white/[0.08]"
              : "bg-white border border-gray-200/60"
          }
        `}
      >
        <div
          className="overflow-y-auto max-h-[88vh] overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Hero Image */}
          <div className="relative w-full h-[260px] sm:h-[320px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={portfolio.imgUrl}
              alt={portfolio.title}
              loading="eager"
            />
            <div
              className={`absolute inset-0 ${
                isAI
                  ? "bg-gradient-to-t from-[#0d0d1a] via-[#0d0d1a]/40 to-transparent"
                  : "bg-gradient-to-t from-white via-white/30 to-transparent"
              }`}
            />

            {/* Category pill */}
            <div className="absolute top-5 left-5">
              <span
                className={`
                  inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase
                  backdrop-blur-xl border
                  ${
                    isAI
                      ? "bg-purple-500/20 text-purple-200 border-purple-400/20"
                      : "bg-white/70 text-gray-700 border-white/40"
                  }
                `}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isAI ? "bg-purple-400" : "bg-emerald-500"
                  }`}
                />
                {isAI ? "AI / ML" : "Web / App"}
              </span>
            </div>

            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              className={`
                absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center
                backdrop-blur-xl border transition-all duration-200
                hover:scale-110 active:scale-95
                ${
                  isAI
                    ? "bg-white/10 border-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                    : "bg-black/5 border-black/5 text-gray-500 hover:bg-black/10 hover:text-gray-800"
                }
              `}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4l8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Title on image */}
            <div className="absolute bottom-0 left-0 right-0 px-8 sm:px-10 pb-6">
              <h2
                className={`text-2xl sm:text-3xl font-bold leading-tight ${
                  isAI ? "text-white" : "text-gray-900"
                }`}
              >
                {portfolio.title}
              </h2>
              {portfolio.year && (
                <span
                  className={`inline-block mt-2 text-sm font-medium ${
                    isAI ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {portfolio.year}
                </span>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="px-8 sm:px-10 pb-8 pt-5">
            {/* ── Description: intro paragraph ── */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className={`text-[15px] leading-[1.85] font-medium ${
                isAI ? "text-gray-200" : "text-gray-700"
              }`}
            >
              {intro}
            </motion.p>

            {/* ── Description: highlight bullets ── */}
            {highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className={`
                  mt-5 rounded-2xl p-5 space-y-3
                  ${
                    isAI
                      ? "bg-white/[0.03] border border-white/[0.05]"
                      : "bg-gray-50/70 border border-gray-100"
                  }
                `}
              >
                <div
                  className={`flex items-center gap-2 mb-1 text-[11px] font-semibold tracking-widest uppercase ${
                    isAI ? "text-purple-300/60" : "text-gray-400"
                  }`}
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  {language === "EN" ? "Key Highlights" : "Kernpunten"}
                </div>
                {highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.35 }}
                    className="flex gap-3 items-start"
                  >
                    <span
                      className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        isAI
                          ? "bg-purple-400/60"
                          : "bg-primaryColor/40"
                      }`}
                    />
                    <span
                      className={`text-[14px] leading-[1.75] ${
                        isAI ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {h}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* ── Divider ── */}
            <div
              className={`my-7 h-px ${
                isAI
                  ? "bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                  : "bg-gradient-to-r from-transparent via-gray-200 to-transparent"
              }`}
            />

            {/* ── Tech Stack ── */}
            <div>
              <h4
                className={`text-xs font-semibold tracking-widest uppercase mb-4 ${
                  isAI ? "text-purple-300/70" : "text-gray-400"
                }`}
              >
                {language === "EN" ? "Tech Stack" : "Technologieën"}
              </h4>

              <div className="space-y-1">
                {renderTechGroup(techGroups.core, "core", 0)}
                {renderTechGroup(
                  techGroups.ai,
                  "ai",
                  techGroups.core.length
                )}
                {renderTechGroup(
                  techGroups.infra,
                  "infra",
                  techGroups.core.length + techGroups.ai.length
                )}
              </div>
            </div>

            {/* ── CTA Button ── */}
            {hasLiveLink && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-8"
              >
                <a
                  href={portfolio.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl text-sm font-semibold
                    transition-all duration-300
                    ${
                      isAI
                        ? "bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02]"
                        : "bg-gray-900 text-white shadow-lg shadow-gray-900/20 hover:shadow-gray-900/30 hover:scale-[1.02]"
                    }
                  `}
                >
                  {language === "EN"
                    ? "View Live Project"
                    : "Bekijk Live Project"}
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;

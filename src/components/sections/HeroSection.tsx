'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, BookOpen } from 'lucide-react';
import { GitHubIcon, XIcon, ZennIcon } from '@/components/ui/social-icons';
import { heroAnimations } from '@/data/animations';
import { personalInfo } from '@/data/personal';

//   hidden: { opacity: 0, scale: 0, y: 10 },
//   visible: (i: number) => {
//     const isLarge = i % 5 === 0;
//     return {
//       opacity: [0.7, 1, 0.7],
//       y: [0, isLarge ? -30 : -25, 0],
//       scale: [1, isLarge ? 1.3 : 1.2, 1],
//       transition: {
//         delay: i * 0.08,
//         opacity: {
//           duration: isLarge ? 3 : 2.5,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         },
//         y: {
//           duration: isLarge ? 5 : 4,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         },
//         scale: {
//           duration: isLarge ? 4 : 3,
//           repeat: Infinity,
//           ease: 'easeInOut',
//         },
//       },
//     };
//   },
// };

// パーティクルの固定位置配列（Hydration Mismatch対策）
const PARTICLE_POSITIONS = [
  { left: 10, top: 20 },
  { left: 85, top: 15 },
  { left: 25, top: 80 },
  { left: 70, top: 60 },
  { left: 45, top: 30 },
  { left: 90, top: 75 },
  { left: 15, top: 45 },
  { left: 60, top: 85 },
  { left: 35, top: 25 },
  { left: 80, top: 50 },
  { left: 50, top: 10 },
  { left: 20, top: 70 },
  { left: 75, top: 35 },
  { left: 40, top: 90 },
  { left: 65, top: 40 },
  { left: 30, top: 65 },
  { left: 85, top: 20 },
  { left: 55, top: 75 },
  { left: 25, top: 55 },
  { left: 95, top: 30 },
  { left: 5, top: 60 },
  { left: 92, top: 45 },
  { left: 38, top: 15 },
  { left: 68, top: 25 },
  { left: 12, top: 85 },
  { left: 78, top: 70 },
  { left: 48, top: 95 },
  { left: 88, top: 35 },
];

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [particlesVisible, setParticlesVisible] = useState(false);
  const [animationsEnabled] = useState(true);

  useEffect(() => {
    const startAnimation = () => {
      setIsVisible(true);
      setParticlesVisible(true);

      // アニメーションフェーズの制御
      const phaseTimer = setTimeout(() => {
        setCurrentPhase(1);
      }, 800);

      return () => clearTimeout(phaseTimer);
    };

    // PageTransitionのアニメーション完了を待つ (約1.8秒)
    const initTimer = setTimeout(startAnimation, 1800);

    return () => {
      clearTimeout(initTimer);
    };
  }, []);

  const smoothScrollTo = (selector: string) => {
    const section = document.querySelector(selector);

    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('Scroll Debug:', {
        selector: selector,
        element: section,
        elementExists: !!section,
      });
    }

    if (section) {
      const targetPosition = (section as HTMLElement).offsetTop;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    } else {
      // eslint-disable-next-line no-console
      console.warn(`Section with selector "${selector}" not found`);
    }
  };

  const scrollToProjects = () => smoothScrollTo('#projects');
  const scrollToNext = () => smoothScrollTo('#about');

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* 背景のパーティクル */}
      <div className="absolute inset-0 overflow-hidden z-10">
        {PARTICLE_POSITIONS.map((position, i) => {
          // パーティクルの種類をバリエーション
          const isLarge = i % 5 === 0;
          const isGlow = i % 3 === 0;
          const size = isLarge ? 'w-3 h-3' : 'w-2 h-2';
          const color = isGlow
            ? 'bg-gradient-to-br from-blue-400 to-cyan-500'
            : 'bg-blue-500/70';
          const glowStyle = isGlow
            ? '0 0 12px rgba(59, 130, 246, 0.6), 0 0 20px rgba(6, 182, 212, 0.3)'
            : '0 0 6px rgba(59, 130, 246, 0.4)';

          // アニメーション無効時のフォールバック
          if (!animationsEnabled) {
            return (
              <div
                key={i}
                className={`absolute ${size} ${color} rounded-full shadow-sm animate-pulse`}
                style={{
                  left: `${position.left}%`,
                  top: `${position.top}%`,
                  boxShadow: glowStyle,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            );
          }

          return (
            <motion.div
              key={i}
              className={`absolute ${size} ${color} rounded-full shadow-sm`}
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                boxShadow: glowStyle,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={particlesVisible ? {
                opacity: [0.7, 1, 0.7],
                y: [0, isLarge ? -30 : -25],
                scale: [1, isLarge ? 1.3 : 1.2, 1],
              } : {}}
              transition={{
                duration: isLarge ? 5 : 4,
                repeat: Infinity,
                repeatType: "mirror",
                delay: i * 0.08,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* プロフィール画像とモーダル */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link
              href="/profile"
              className="relative w-32 h-32 mx-auto mb-6 group block"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-4xl font-bold group-hover:scale-105 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                {personalInfo.name.charAt(0)}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
              {/* ホバー時のツールチップ */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-zen-maru">
                プロフィールを見る
              </div>
            </Link>
          </motion.div>

          {/* メインテキスト - タイピングエフェクト */}
          <motion.div
            variants={heroAnimations.typewriter}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-zen-maru">
              {personalInfo.name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  variants={heroAnimations.letter}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* キャッチフレーズ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: currentPhase >= 1 ? 1 : 0, y: currentPhase >= 1 ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-lg md:text-xl text-gray-700 mb-2 font-zen-maru">
              {personalInfo.heroMessages.primary}
            </p>
            <p className="text-base md:text-lg text-gray-600 font-zen-maru">
              {personalInfo.heroMessages.secondary}
            </p>
          </motion.div>

          {/* エンジニア感のあるUI要素 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: currentPhase >= 1 ? 1 : 0, y: currentPhase >= 1 ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <div className="max-w-2xl mx-auto">
              {/* Terminal風表示 */}
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="flex gap-2">
                    <div className="terminal-dot terminal-dot-red" />
                    <div className="terminal-dot terminal-dot-yellow" />
                    <div className="terminal-dot terminal-dot-green" />
                  </div>
                  <div className="text-gray-300 text-sm ml-4">~/portfolio</div>
                </div>
                <div className="p-4 text-left">
                  <div className="text-green-400 text-sm font-mono">
                    <span className="text-blue-400">$</span> whoami
                  </div>
                  <div className="text-gray-300 text-sm font-mono mt-1">
                    {personalInfo.subtitle}
                    <span className="terminal-cursor" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: currentPhase >= 1 ? 1 : 0, y: currentPhase >= 1 ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 hover:shadow-xl transition-all duration-300 hover:scale-105 font-zen-maru shadow-lg"
            >
              作品を見る
            </button>
            <Link href="/articles" className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg hover:from-primary-600 hover:to-primary-700 hover:shadow-xl transition-all duration-300 hover:scale-105 font-zen-maru shadow-lg flex items-center gap-2">
              <BookOpen size={20} />
              技術ブログ
            </Link>
          </motion.div>

          {/* ソーシャルリンク */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: currentPhase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex justify-center gap-6 mb-12"
          >
            <a
              href={personalInfo.contacts.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <GitHubIcon size={24} />
            </a>
            <a
              href={personalInfo.contacts.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <XIcon size={24} />
            </a>
            <a
              href={personalInfo.contacts.zenn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-600 transition-colors duration-300 hover:scale-110 transform"
            >
              <ZennIcon size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <button
          onClick={scrollToNext}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-white/20 animate-bounce"
          aria-label="次のセクションへスクロール"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}

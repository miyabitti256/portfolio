'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  GitCommit, 
  CheckCircle, 
  Circle, 
  Code, 
  User, 
  Target,
  Zap,
  ChevronDown
} from 'lucide-react';
import { personalInfo } from '@/data/personal';
import { sectionAnimations } from '@/data/animations';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#skills');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          variants={sectionAnimations.staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="max-w-6xl mx-auto"
        >
          {/* セクションヘッダー */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-zen-maru">
              About Me
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-zen-maru">
              {personalInfo.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左側: プロフィール詳細 */}
            <motion.div
              variants={sectionAnimations.slideIn}
              className="space-y-8"
            >
              {/* 基本情報カード */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2 font-zen-maru">
                  <User size={20} />
                  基本情報
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-gray-600 font-zen-maru">名前:</span>
                    <span className="text-gray-900 font-zen-maru">{personalInfo.nameJa}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-gray-600 font-zen-maru">職種:</span>
                    <span className="text-gray-900 font-zen-maru">{personalInfo.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-gray-600 font-zen-maru">場所:</span>
                    <span className="text-gray-900 font-zen-maru">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* アピールポイント */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2 font-zen-maru">
                  <Zap size={20} />
                  アピールポイント
                </h3>
                <div className="space-y-3">
                  {personalInfo.strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      variants={sectionAnimations.fadeInUp}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-zen-maru">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 目標・価値観 */}
              <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2 font-zen-maru">
                  <Target size={20} />
                  目標・価値観
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 font-zen-maru">直近の目標</h4>
                    <p className="text-gray-700 font-zen-maru">{personalInfo.goals.immediate}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 font-zen-maru">長期目標</h4>
                    <p className="text-gray-700 font-zen-maru">{personalInfo.goals.longTerm}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 font-zen-maru">興味のある分野</h4>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.goals.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-zen-maru"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 右側: Git commit履歴風学習経歴 */}
            <motion.div
              variants={sectionAnimations.slideIn}
              className="space-y-6"
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                {/* Terminal風ヘッダー */}
                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-gray-300 text-sm font-mono">
                    ~/learning-journey
                  </div>
                </div>

                {/* Git log風の学習経歴 */}
                <div className="p-6 space-y-4">
                  <div className="text-green-400 text-sm font-mono mb-4">
                    <span className="text-blue-400">$</span> git log --oneline --graph
                  </div>
                  
                  {personalInfo.learningJourney.map((journey, index) => (
                    <motion.div
                      key={journey.id}
                      variants={sectionAnimations.fadeInUp}
                      transition={{ delay: index * 0.2 }}
                      className="relative"
                    >
                      {/* Git graph線 */}
                      <div className="flex items-start gap-4">
                        <div className="flex flex-col items-center">
                          <div 
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: journey.color }}
                          ></div>
                          {index < personalInfo.learningJourney.length - 1 && (
                            <div className="w-px h-16 bg-gray-600 mt-2"></div>
                          )}
                        </div>
                        
                        {/* Commit情報 */}
                        <div className="flex-1 pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <span 
                              className="text-sm font-mono"
                              style={{ color: journey.color }}
                            >
                              {journey.id.substring(0, 7)}
                            </span>
                            <span className="text-gray-300 text-sm font-mono">
                              {journey.status === 'current' ? '(HEAD -> main)' : ''}
                            </span>
                            {journey.status === 'current' && (
                              <Circle size={12} className="text-orange-400 animate-pulse" />
                            )}
                            {journey.status === 'completed' && (
                              <CheckCircle size={12} className="text-green-400" />
                            )}
                          </div>
                          
                          <div className="text-white font-mono text-sm mb-1">
                            {journey.title}
                          </div>
                          
                          <div className="text-gray-400 text-xs font-mono mb-2">
                            {journey.period}
                          </div>
                          
                          <div className="text-gray-300 text-sm font-zen-maru">
                            {journey.description}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* 将来の学習予定 */}
                  <motion.div
                    variants={sectionAnimations.fadeInUp}
                    transition={{ delay: personalInfo.learningJourney.length * 0.2 }}
                    className="border-t border-gray-700 pt-4 mt-6"
                  >
                    <div className="text-gray-400 text-sm font-mono mb-2">
                      # 今後の学習予定
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {personalInfo.goals.futureInterests.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* 学習へのモチベーション */}
              <motion.div
                variants={sectionAnimations.fadeInUp}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2 font-zen-maru">
                  <Code size={20} />
                  学習へのモチベーション
                </h3>
                <div className="space-y-3 text-gray-700 font-zen-maru">
                  <p>
                    WordPress案件をきっかけにプログラミングの世界に触れましたが、
                    PHPよりもJavaScript/TypeScriptの方により魅力を感じました。
                  </p>
                  <p>
                    モダンな開発環境と表現力豊かな構文、活発なコミュニティに惹かれ、
                    フロントエンドからバックエンドまで一貫してJS/TS生態系で学習を進めています。
                  </p>
                  <p>
                    最近はAIの活用法について敏感にキャッチアップしていきたいと考えています。
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 
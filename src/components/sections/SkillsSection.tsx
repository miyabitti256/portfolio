'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Server,
  Database,
  Settings,
  Palette,
  ChevronRight,
  TrendingUp,
  BookOpen,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TechIcon } from '@/components/ui/tech-icons';
import { skills, futureSkills, skillCategories, getSkillsByCategory } from '@/data/skills';
import { sectionAnimations } from '@/data/animations';

const categoryIcons = {
  frontend: Code,
  backend: Server,
  database: Database,
  tools: Settings,
  design: Palette,
  all: BookOpen,
} as const;

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [displayedSkills, setDisplayedSkills] = useState(skills);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.01, // iPhone SEでも確実に検出されるよう閾値を更に下げる
        rootMargin: '100px 0px' // 上下100pxのマージンを追加して早期検出
      }
    );

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setDisplayedSkills(getSkillsByCategory(selectedCategory));
  }, [selectedCategory]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#projects');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-100 to-primary-200">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={sectionAnimations.staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="max-w-7xl mx-auto"
        >
          {/* セクションヘッダー */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-zen-maru">
              Skills & Technologies
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-zen-maru px-4">
              これまでの学習で習得した技術スタックと、実際のプロジェクトでの経験レベルを可視化しています。
            </p>
          </motion.div>

          {/* package.json風ヘッダー */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="mb-6 sm:mb-8"
          >
            <div className="package-json-style max-w-4xl mx-auto">
              <div className="text-green-400 text-xs sm:text-sm font-mono mb-2">
                <span className="text-blue-400">$</span> cat package.json
              </div>
              <div className="text-gray-300 font-mono text-xs sm:text-sm space-y-1">
                <div><span className="text-yellow-400">"name"</span>: <span className="text-green-400">"@miyabitti/skills"</span>,</div>
                <div><span className="text-yellow-400">"version"</span>: <span className="text-green-400">"1.0.0"</span>,</div>
                <div className="hidden sm:block"><span className="text-yellow-400">"description"</span>: <span className="text-green-400">"Web系エンジニアとしての技術スタック"</span>,</div>
                <div><span className="text-yellow-400">"main"</span>: <span className="text-green-400">"frontend + backend"</span>,</div>
                <div><span className="text-yellow-400">"dependencies"</span>: &#123;</div>
                <div className="pl-2 sm:pl-4 space-y-1">
                  <div><span className="text-blue-400">"javascript"</span>: <span className="text-green-400">"^ES6+"</span>,</div>
                  <div><span className="text-blue-400">"typescript"</span>: <span className="text-green-400">"^5.0.0"</span>,</div>
                  <div><span className="text-blue-400">"react"</span>: <span className="text-green-400">"^19.0.0"</span>,</div>
                  <div><span className="text-blue-400">"next.js"</span>: <span className="text-green-400">"^15.0.0"</span>,</div>
                  <div><span className="text-blue-400">"tailwindcss"</span>: <span className="text-green-400">"^4.0.0"</span>,</div>
                  <div><span className="text-blue-400">"node.js"</span>: <span className="text-green-400">"^20.0.0"</span>,</div>
                  <div><span className="text-blue-400">"postgresql"</span>: <span className="text-green-400">"^16.0.0"</span>,</div>
                  <div><span className="text-blue-400">"prisma"</span>: <span className="text-green-400">"^5.0.0"</span></div>
                </div>
                <div>&#125;,</div>
                <div><span className="text-yellow-400">"devDependencies"</span>: &#123;</div>
                <div className="pl-2 sm:pl-4 space-y-1">
                  <div><span className="text-blue-400">"git"</span>: <span className="text-green-400">"^2.40.0"</span>,</div>
                  <div><span className="text-blue-400">"vercel"</span>: <span className="text-green-400">"latest"</span>,</div>
                  <div><span className="text-blue-400">"figma"</span>: <span className="text-green-400">"learning"</span></div>
                  <div><span className="text-blue-400">"etc"</span>: <span className="text-green-400">"..."</span></div>
                </div>
                <div>&#125;</div>
              </div>
            </div>
          </motion.div>

          {/* カテゴリーフィルター */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-4"
          >
            {skillCategories.map((category) => {
              const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons];
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "skill" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-1 sm:gap-2 font-zen-maru text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2"
                >
                  <IconComponent size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">{category.name}</span>
                  <span className="xs:hidden">{category.name.substring(0, 4)}</span>
                </Button>
              );
            })}
          </motion.div>

          {/* スキル一覧 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                variants={sectionAnimations.fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4"
                      style={{ borderLeftColor: skill.color }}>
                  <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        <TechIcon
                          iconName={skill.iconName}
                          size={20}
                          className="flex-shrink-0 sm:w-6 sm:h-6"
                          style={{ color: skill.color }}
                        />
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-sm sm:text-lg font-zen-maru truncate">{skill.name}</CardTitle>
                          <CardDescription className="font-zen-maru text-xs sm:text-sm">
                            {skill.levelText}
                          </CardDescription>
                        </div>
                      </div>
                      {skill.inProgress && (
                        <Badge variant="warning" className="text-xs flex-shrink-0">
                          学習中
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0">
                    {/* プログレスバー */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm font-zen-maru">
                        <span className="text-gray-600">習熟度</span>
                        <span className="text-gray-900 font-medium">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        variant="skill"
                        size="default"
                      />
                    </div>

                    {/* 説明 */}
                    <p className="text-xs sm:text-sm text-gray-600 font-zen-maru leading-relaxed">
                      {skill.description}
                    </p>

                    {/* プロジェクト情報 */}
                    {skill.projects && skill.projects.length > 0 && (
                      <div className="pt-2 border-t border-gray-100">
                        <div className="flex flex-wrap gap-1">
                          {skill.projects.map((project, projectIndex) => (
                            <Badge key={projectIndex} variant="skill" className="text-xs">
                              {project}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* 今後の学習予定 */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-zen-maru flex items-center justify-center gap-2">
                <TrendingUp size={20} className="sm:w-6 sm:h-6" />
                今後の学習予定
              </h3>
              <p className="text-sm sm:text-base text-gray-600 font-zen-maru px-4">
                継続的な技術学習により、さらなるスキル向上を目指しています
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {futureSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  variants={sectionAnimations.fadeInUp}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors duration-300">
                    <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-6">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <TechIcon
                          iconName={skill.iconName}
                          size={20}
                          className="flex-shrink-0 sm:w-6 sm:h-6 opacity-60"
                          style={{ color: skill.color }}
                        />
                        <div className="min-w-0 flex-1">
                          <CardTitle className="text-sm sm:text-lg font-zen-maru flex items-center gap-2">
                            {skill.name}
                            <Badge variant="info" className="text-xs">
                              予定
                            </Badge>
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-2 sm:space-y-3 p-4 sm:p-6 pt-0">
                      <p className="text-xs sm:text-sm text-gray-600 font-zen-maru leading-relaxed">
                        {skill.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 学習アプローチ */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="mt-12 sm:mt-16 max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl font-zen-maru flex items-center gap-2">
                  <BookOpen size={18} className="sm:w-5 sm:h-5" />
                  学習アプローチ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 font-zen-maru text-sm sm:text-base">実践重視の学習</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-zen-maru">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>実際のプロジェクト開発を通じた学習</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>GitHubでのコード公開・振り返り</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>技術記事執筆による知識の整理</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 font-zen-maru text-sm sm:text-base">技術選択の基準</h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-zen-maru">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>モダンで将来性のある技術</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>コミュニティが活発な技術</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>実務で広く使われている技術</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* スクロールインジケーター */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
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
            <ChevronDown size={24} className="sm:w-8 sm:h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

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
  Calendar,
  TrendingUp,
  BookOpen,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [displayedSkills, setDisplayedSkills] = useState(skills);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section id="skills" className="relative py-20 bg-gradient-to-br from-primary-100 to-primary-200">
      <div className="container mx-auto px-6">
        <motion.div
          variants={sectionAnimations.staggerContainer}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="max-w-7xl mx-auto"
        >
          {/* セクションヘッダー */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-zen-maru">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-zen-maru">
              これまでの学習で習得した技術スタックと、実際のプロジェクトでの経験レベルを可視化しています。
            </p>
          </motion.div>

          {/* package.json風ヘッダー */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="mb-8"
          >
            <div className="package-json-style max-w-4xl mx-auto">
              <div className="text-green-400 text-sm font-mono mb-2">
                <span className="text-blue-400">$</span> cat package.json
              </div>
              <div className="text-gray-300 font-mono text-sm space-y-1">
                <div><span className="text-yellow-400">"name"</span>: <span className="text-green-400">"@miyabitti/skills"</span>,</div>
                <div><span className="text-yellow-400">"version"</span>: <span className="text-green-400">"1.0.0"</span>,</div>
                <div><span className="text-yellow-400">"description"</span>: <span className="text-green-400">"Web系エンジニアとしての技術スタック"</span>,</div>
                <div><span className="text-yellow-400">"main"</span>: <span className="text-green-400">"frontend + backend"</span>,</div>
                <div><span className="text-yellow-400">"dependencies"</span>: &#123;</div>
                <div className="pl-4 text-gray-400">// 以下にスキル一覧を表示...</div>
                <div>&#125;</div>
              </div>
            </div>
          </motion.div>

          {/* カテゴリーフィルター */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((category) => {
              const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons];
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "skill" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center gap-2 font-zen-maru"
                >
                  <IconComponent size={16} />
                  {category.name}
                </Button>
              );
            })}
          </motion.div>

          {/* スキル一覧 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {displayedSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                variants={sectionAnimations.fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4" 
                      style={{ borderLeftColor: skill.color }}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{ backgroundColor: skill.color }}
                        ></div>
                        <div>
                          <CardTitle className="text-lg font-zen-maru">{skill.name}</CardTitle>
                          <CardDescription className="font-zen-maru">
                            {skill.levelText}
                          </CardDescription>
                        </div>
                      </div>
                                             {skill.inProgress && (
                         <Badge variant="warning">
                           学習中
                         </Badge>
                       )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* プログレスバー */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-zen-maru">
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
                    <p className="text-sm text-gray-600 font-zen-maru leading-relaxed">
                      {skill.description}
                    </p>

                    {/* メタ情報 */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={12} />
                        <span className="font-zen-maru">開始: {skill.startDate}</span>
                      </div>
                      
                      {skill.projects && skill.projects.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {skill.projects.map((project, projectIndex) => (
                            <Badge key={projectIndex} variant="skill" className="text-xs">
                              {project}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
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
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-zen-maru flex items-center justify-center gap-2">
                <TrendingUp size={24} />
                今後の学習予定
              </h3>
              <p className="text-gray-600 font-zen-maru">
                継続的な技術学習により、さらなるスキル向上を目指しています
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  variants={sectionAnimations.fadeInUp}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-3 h-3 rounded-full opacity-60"
                          style={{ backgroundColor: skill.color }}
                        ></div>
                        <div>
                          <CardTitle className="text-lg font-zen-maru flex items-center gap-2">
                            {skill.name}
                            <Badge variant="info">
                              予定
                            </Badge>
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-3">
                      <p className="text-sm text-gray-600 font-zen-maru leading-relaxed">
                        {skill.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Calendar size={12} />
                        <span className="font-zen-maru">開始予定: {skill.plannedStart}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 学習アプローチ */}
          <motion.div
            variants={sectionAnimations.fadeInUp}
            className="mt-16 max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl font-zen-maru flex items-center gap-2">
                  <BookOpen size={20} />
                  学習アプローチ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 font-zen-maru">実践重視の学習</h4>
                    <ul className="space-y-2 text-sm text-gray-700 font-zen-maru">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-0.5" />
                        実際のプロジェクト開発を通じた学習
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-0.5" />
                        GitHubでのコード公開・振り返り
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-0.5" />
                        技術記事執筆による知識の整理
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 font-zen-maru">技術選択の基準</h4>
                    <ul className="space-y-2 text-sm text-gray-700 font-zen-maru">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-0.5" />
                        モダンで将来性のある技術
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-0.5" />
                        コミュニティが活発な技術
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={16} className="text-blue-500 mt-0.5" />
                        実務で広く使われている技術
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
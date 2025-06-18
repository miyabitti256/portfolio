'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ExternalLink, 
  Github, 
  FileText, 
  Code, 
  Server, 
  Database,
  Globe,
  Calendar,
  CheckCircle,
  Clock,
  PlayCircle,
  Package,
  BookOpen,
  FolderOpen
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mainProject, subProjects, projectCategories } from '@/data/projects';
import type { Project } from '@/data/projects';
import VSCodeEditor from '@/components/engineer-ui/VSCodeEditor';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [currentVSCodeTab, setCurrentVSCodeTab] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? subProjects 
    : subProjects.filter(project => project.category === selectedCategory);

  // VS Code風エディター用のファイル構造
  const projectFiles = [
        {
          id: 'readme',
          name: 'README.md',
          type: 'file' as const,
          icon: FileText,
          extension: '.md',
          content: (
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 font-zen-maru">
              <div className="space-y-4">
                <h1 className="text-xl sm:text-2xl font-bold text-white mb-4"># {mainProject.title}</h1>
                <p className="text-gray-300 leading-relaxed">{mainProject.description}</p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-400">## プロジェクト概要</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {mainProject.longDescription}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-400">## 主な特徴</h2>
                <ul className="space-y-2">
                  {mainProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-400 mt-1">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-400">## リンク</h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <Button size="sm" asChild>
                    <a href={mainProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe size={16} className="mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">Webサイト</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={mainProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">GitHub</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={mainProject.articleUrl} target="_blank" rel="noopener noreferrer">
                      <FileText size={16} className="mr-1 sm:mr-2" />
                      <span className="text-xs sm:text-sm">技術記事</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )
        },
        {
          id: 'package',
          name: 'package.json',
          type: 'file' as const,
          icon: Package,
          extension: '.json',
          content: (
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <pre className="text-gray-300">
{`{
  "name": "${mainProject.titleEn?.toLowerCase().replace(/\s+/g, '-') || 'project'}",
  "version": "1.0.0",
  "description": "${mainProject.description}",
  "architecture": {`}
              </pre>
              {mainProject.architecture && Object.entries(mainProject.architecture).map(([key, technologies]) => (
                <div key={key} className="ml-4 my-4">
                  <div className="text-blue-400 mb-2">"{key}": [</div>
                  {technologies.map((tech, index) => (
                    <div key={index} className="ml-4 text-green-400">
                      "{tech}"{index < technologies.length - 1 ? ',' : ''}
                    </div>
                  ))}
                  <div className="text-blue-400">]{key !== 'deployment' ? ',' : ''}</div>
                </div>
              ))}
              <pre className="text-gray-300">
{`  },
  "highlights": [`}
              </pre>
              {mainProject.highlights.map((highlight, index) => (
                <div key={index} className="ml-4 text-green-400">
                  "{highlight}"{index < mainProject.highlights.length - 1 ? ',' : ''}
                </div>
              ))}
              <pre className="text-gray-300">
{`  ],
  "status": "${mainProject.status}",
  "period": "${mainProject.startDate} - ${mainProject.endDate}"
}`}
              </pre>
            </div>
          )
        },
        {
          id: 'learning',
          name: 'LEARNING.md',
          type: 'file' as const,
          icon: BookOpen,
          extension: '.md',
          content: (
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 font-zen-maru">
              <h1 className="text-xl sm:text-2xl font-bold text-white mb-4"># 学習記録</h1>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-orange-400">## 技術的課題</h2>
                <ul className="space-y-3">
                  {mainProject.challenges.map((challenge, index) => (
                    <li key={index} className="p-3 bg-orange-900/30 border-l-4 border-orange-400 rounded-r-lg">
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-blue-400">## 学んだこと</h2>
                <ul className="space-y-3">
                  {mainProject.learnings.map((learning, index) => (
                    <li key={index} className="p-3 bg-blue-900/30 border-l-4 border-blue-400 rounded-r-lg">
                      <span className="text-gray-300">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-green-400">## 今後の展望</h2>
                <div className="p-4 bg-green-900/30 border border-green-400 rounded-lg">
                  <p className="text-gray-300 leading-relaxed">
                    このプロジェクトを通じて、フルスタック開発の基礎を身につけることができました。
                    今後は、より大規模なアプリケーションの開発や、新しい技術スタック（Rust、Go）への
                    挑戦も視野に入れています。
                  </p>
                </div>
              </div>
            </div>
          )
        }
      ];

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'in-progress':
        return <Clock size={16} className="text-blue-500" />;
      case 'planned':
        return <PlayCircle size={16} className="text-gray-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'completed':
        return '完成';
      case 'in-progress':
        return '開発中';
      case 'planned':
        return '予定';
      default:
        return '';
    }
  };



  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-zen-maru">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-zen-maru">
            フルスタック開発を中心とした実践的なプロジェクト
          </p>
        </motion.div>

        {/* メインプロジェクト - VS Code風エディター */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {/* プロジェクト情報ヘッダー */}
          {/* <div className="mb-6 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg border border-primary-200">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-zen-maru">
                  {mainProject.title}
                  {mainProject.titleEn && (
                    <span className="text-lg text-gray-500 ml-2 font-mono">
                      ({mainProject.titleEn})
                    </span>
                  )}
                </h3>
                <p className="text-gray-600 font-zen-maru">{mainProject.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar size={14} />
                  <span className="font-zen-maru">
                    {mainProject.startDate} - {mainProject.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {getStatusIcon(mainProject.status)}
                  <span className="text-sm font-zen-maru">
                    {getStatusText(mainProject.status)}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {mainProject.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="skill" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {mainProject.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{mainProject.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div> */}

          {/* VS Code風エディター */}
          <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[600px] xl:h-[700px] min-h-[500px]">
            <VSCodeEditor
              projectName={mainProject.titleEn || mainProject.title}
              files={projectFiles}
              onTabChange={setCurrentVSCodeTab}
            />
          </div>
        </motion.div>

        {/* サブプロジェクト */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-zen-maru">
              その他のプロジェクト
            </h3>
            
            {/* カテゴリフィルター */}
            <div className="flex flex-wrap gap-2 mb-6">
              {projectCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="font-zen-maru"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* プロジェクトグリッド */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-zen-maru flex items-center gap-2">
                          {project.title}
                          {getStatusIcon(project.status)}
                        </CardTitle>
                        <CardDescription className="mt-2 font-zen-maru">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {/* 技術スタック */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 6).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 6 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.technologies.length - 6}
                          </Badge>
                        )}
                      </div>

                      {/* 主な特徴 */}
                      {project.highlights && project.highlights.length > 0 && (
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-2 font-zen-maru">
                            主な特徴
                          </h5>
                          <ul className="space-y-1">
                            {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-center gap-2 text-xs text-gray-600 font-zen-maru">
                                <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* リンク */}
                      <div className="flex gap-2 pt-2">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github size={14} className="mr-1" />
                              GitHub
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={14} className="mr-1" />
                              Live
                            </a>
                          </Button>
                        )}
                        <Link href={`/projects/${project.id}`} passHref>
                          <Button variant="ghost" size="sm">
                            詳細
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
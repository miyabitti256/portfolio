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
  PlayCircle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mainProject, subProjects, projectCategories } from '@/data/projects';
import type { Project } from '@/data/projects';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCategory, setSelectedCategory] = useState('all');
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

    const element = document.querySelector('#projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? subProjects 
    : subProjects.filter(project => project.category === selectedCategory);

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

  const tabContents = {
    overview: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 font-zen-maru">概要</h4>
            <p className="text-gray-700 leading-relaxed font-zen-maru">
              {mainProject.longDescription}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 font-zen-maru">主な特徴</h4>
            <ul className="space-y-2">
              {mainProject.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700 font-zen-maru">
                  <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={mainProject.liveUrl} target="_blank" rel="noopener noreferrer">
              <Globe size={18} className="mr-2" />
              ライブサイト
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={mainProject.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={18} className="mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={mainProject.articleUrl} target="_blank" rel="noopener noreferrer">
              <FileText size={18} className="mr-2" />
              技術記事
            </a>
          </Button>
        </div>
      </div>
    ),
    
    architecture: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {mainProject.architecture && Object.entries(mainProject.architecture).map(([key, technologies]) => (
            <div key={key} className="p-4 bg-gray-50 rounded-lg border">
              <div className="flex items-center gap-2 mb-3">
                {key === 'frontend' && <Code size={18} className="text-blue-500" />}
                {key === 'backend' && <Server size={18} className="text-green-500" />}
                {key === 'database' && <Database size={18} className="text-purple-500" />}
                {key === 'deployment' && <Globe size={18} className="text-orange-500" />}
                <h4 className="font-semibold text-gray-900 capitalize font-zen-maru">
                  {key === 'frontend' && 'フロントエンド'}
                  {key === 'backend' && 'バックエンド'}
                  {key === 'database' && 'データベース'}
                  {key === 'deployment' && 'デプロイ'}
                </h4>
              </div>
              <div className="space-y-2">
                {technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    
    challenges: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 font-zen-maru">技術的課題</h4>
            <ul className="space-y-3">
              {mainProject.challenges.map((challenge, index) => (
                <li key={index} className="p-3 bg-orange-50 border-l-4 border-orange-400 rounded-r-lg">
                  <span className="text-sm text-gray-700 font-zen-maru">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3 font-zen-maru">学んだこと</h4>
            <ul className="space-y-3">
              {mainProject.learnings.map((learning, index) => (
                <li key={index} className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                  <span className="text-sm text-gray-700 font-zen-maru">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  };

  return (
    <section id="projects" className="py-20 bg-white">
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

        {/* メインプロジェクト - VS Code風タブUI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-t-lg">
            {/* VS Code風ヘッダー */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-300 text-sm ml-4 font-mono">
                  {mainProject.title}.project
                </span>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(mainProject.status)}
                <span className="text-gray-300 text-sm font-zen-maru">
                  {getStatusText(mainProject.status)}
                </span>
              </div>
            </div>

            {/* タブメニュー */}
            <div className="flex border-b border-gray-700">
              {[
                { id: 'overview', label: 'README.md', icon: FileText },
                { id: 'architecture', label: 'package.json', icon: Code },
                { id: 'challenges', label: 'LEARNING.md', icon: ExternalLink }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-3 text-sm font-mono border-r border-gray-700 transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-gray-800 text-white border-t-2 border-t-blue-500'
                        : 'bg-gray-900 text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                    }`}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* タブコンテンツ */}
          <div className="bg-white border border-gray-200 rounded-b-lg p-6">
            <div className="mb-4">
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
            </div>

            {tabContents[activeTab as keyof typeof tabContents]}
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
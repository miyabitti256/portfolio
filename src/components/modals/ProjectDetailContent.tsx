import Link from 'next/link';
import Image from 'next/image';
import { 
  ExternalLink, 
  Github, 
  FileText, 
  Calendar, 
  CheckCircle, 
  Clock, 
  PlayCircle,
  Code,
  Server,
  Database,
  Globe,
  Target,
  BookOpen,
  Lightbulb
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Project } from '@/data/projects';

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
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
    <div className="max-w-4xl mx-auto">
      {/* ヘッダー */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 font-zen-maru">
              {project.title}
              {project.titleEn && (
                <span className="text-xl text-gray-500 ml-3 font-mono">
                  ({project.titleEn})
                </span>
              )}
            </h1>
            <p className="text-lg text-gray-600 font-zen-maru">{project.description}</p>
          </div>
          <div className="flex items-center gap-2">
            {getStatusIcon(project.status)}
            <span className="text-sm text-gray-600 font-zen-maru">
              {getStatusText(project.status)}
            </span>
          </div>
        </div>

        {/* 基本情報 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar size={16} />
            <span className="font-zen-maru">
              {project.startDate}
              {project.endDate && ` - ${project.endDate}`}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Code size={16} />
            <span className="font-zen-maru capitalize">{project.category}</span>
          </div>
          {project.featured && (
            <div className="flex items-center gap-2 text-sm text-primary-600">
              <Target size={16} />
              <span className="font-zen-maru">メインプロジェクト</span>
            </div>
          )}
        </div>

        {/* アクションボタン */}
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe size={18} className="mr-2" />
                ライブサイト
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={18} className="mr-2" />
                GitHub
              </a>
            </Button>
          )}
          {project.articleUrl && (
            <Button variant="outline" asChild>
              <a href={project.articleUrl} target="_blank" rel="noopener noreferrer">
                <FileText size={18} className="mr-2" />
                技術記事
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="space-y-8">
        {/* プロジェクト概要 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-zen-maru">
              <FileText size={20} />
              プロジェクト概要
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-gray max-w-none font-zen-maru">
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 技術スタック */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-zen-maru">
              <Code size={20} />
              技術スタック
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="skill" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* アーキテクチャ（メインプロジェクトの場合） */}
        {project.architecture && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-zen-maru">
                <Server size={20} />
                アーキテクチャ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(project.architecture).map(([key, technologies]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-lg border">
                    <div className="flex items-center gap-2 mb-3">
                      {key === 'frontend' && <Code size={18} className="text-blue-500" />}
                      {key === 'backend' && <Server size={18} className="text-green-500" />}
                      {key === 'database' && <Database size={18} className="text-purple-500" />}
                      {key === 'deployment' && <Globe size={18} className="text-orange-500" />}
                      <h4 className="font-semibold text-gray-900 font-zen-maru">
                        {key === 'frontend' && 'フロントエンド'}
                        {key === 'backend' && 'バックエンド'}
                        {key === 'database' && 'データベース'}
                        {key === 'deployment' && 'デプロイ'}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs mr-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 主な特徴 */}
        {project.highlights && project.highlights.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-zen-maru">
                <Target size={20} />
                主な特徴
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-zen-maru">{highlight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* 技術的課題と学習 */}
        {(project.challenges?.length > 0 || project.learnings?.length > 0) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 技術的課題 */}
            {project.challenges && project.challenges.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-zen-maru">
                    <Lightbulb size={20} />
                    技術的課題
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="p-3 bg-orange-50 border-l-4 border-orange-400 rounded-r-lg">
                        <span className="text-sm text-gray-700 font-zen-maru">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* 学んだこと */}
            {project.learnings && project.learnings.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-zen-maru">
                    <BookOpen size={20} />
                    学んだこと
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                        <span className="text-sm text-gray-700 font-zen-maru">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {/* プロジェクト画像（ある場合） */}
        {project.imageUrl && (
          <Card>
            <CardHeader>
              <CardTitle className="font-zen-maru">スクリーンショット</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title}のスクリーンショット`}
                  width={800}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 
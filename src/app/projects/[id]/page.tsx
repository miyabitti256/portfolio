import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectDetailContent from '@/components/modals/ProjectDetailContent';
import { getProjectById } from '@/data/projects';

interface ProjectPageProps {
  params: { id: string };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        {/* 戻るボタン */}
        <div className="mb-8">
          <Link href="/#projects">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              プロジェクト一覧に戻る
            </Button>
          </Link>
        </div>

        {/* プロジェクト詳細コンテンツ */}
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <ProjectDetailContent project={project} />
        </div>
      </div>
    </div>
  );
}

// 静的パラメータ生成（SSG対応）
export function generateStaticParams() {
  // すべてのプロジェクトIDを返す
  return [
    { id: 'jihou-g' },
    { id: 'portfolio-site' },
    { id: 'discord-bot-basic' }
  ];
} 
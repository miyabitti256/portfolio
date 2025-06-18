'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProjectDetailContent from '@/components/modals/ProjectDetailContent';
import { getProjectById } from '@/data/projects';
import { modalUtils } from '@/lib/utils';

interface ProjectModalPageProps {
  params: { id: string };
}

export default function ProjectModalPage({ params }: ProjectModalPageProps) {
  const router = useRouter();
  const project = getProjectById(params.id);

  // モーダル表示時にパラメータを設定
  useEffect(() => {
    modalUtils.setModalParam(true);
    
    return () => {
      // クリーンアップ時にパラメータを削除
      modalUtils.setModalParam(false);
    };
  }, []);

  const handleClose = () => {
    modalUtils.setModalParam(false);
    router.back();
  };

  if (!project) {
    return null;
  }

  return (
    <Dialog open onOpenChange={handleClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-zen-maru">プロジェクト詳細</DialogTitle>
        </DialogHeader>
        <ProjectDetailContent project={project} />
      </DialogContent>
    </Dialog>
  );
} 
'use client';

import { useRouter } from 'next/navigation';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ProjectDetailContent from '@/components/modals/ProjectDetailContent';
import { getProjectById } from '@/data/projects';

interface ProjectModalPageProps {
  params: { id: string };
}

export default function ProjectModalPage({ params }: ProjectModalPageProps) {
  const router = useRouter();
  const project = getProjectById(params.id);

  const handleClose = () => {
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
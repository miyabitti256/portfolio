'use client';

import { useRouter } from 'next/navigation';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { ProfileContent } from '@/components/modals/ProfileContent';

export default function ProfileModalPage() {
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Dialog defaultOpen onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-zen-maru">プロフィール</DialogTitle>
          <DialogDescription className="font-zen-maru">
            エンジニアとしての学習の軌跡と目標
          </DialogDescription>
        </DialogHeader>
        <ProfileContent />
      </DialogContent>
    </Dialog>
  );
} 
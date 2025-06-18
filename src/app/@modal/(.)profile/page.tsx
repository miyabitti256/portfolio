'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from '@/components/ui/dialog';
import { ProfileContent } from '@/components/modals/ProfileContent';
import { modalUtils } from '@/lib/utils';

export default function ProfileModalPage() {
  const router = useRouter();

  // モーダル表示時にパラメータを設定
  useEffect(() => {
    modalUtils.setModalParam(true);
    
    return () => {
      // クリーンアップ時にパラメータを削除
      modalUtils.setModalParam(false);
    };
  }, []);

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      modalUtils.setModalParam(false);
      router.back();
    }
  };

  return (
    <Dialog defaultOpen onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white">
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
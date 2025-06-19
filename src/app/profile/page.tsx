import { ProfileContent } from '@/components/modals/ProfileContent';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 font-zen-maru">
            プロフィール
          </h1>
          <ProfileContent />
        </div>
      </div>
    </div>
  );
}

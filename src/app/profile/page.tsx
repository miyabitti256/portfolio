import { ProfileContent } from '@/components/modals/ProfileContent';

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 font-zen-maru">
            プロフィール
          </h1>
          <p className="text-lg text-gray-600 font-zen-maru">
            エンジニアとしての学習の軌跡と目標
          </p>
        </header>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <ProfileContent />
        </div>
      </div>
    </div>
  );
} 
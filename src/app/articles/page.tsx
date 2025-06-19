import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowLeft } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';
import { ArticleCard } from '@/components/ui/article-card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '技術ブログ | Portfolio',
  description: '学習過程や技術的な挑戦について記録した技術ブログです。',
};

export default async function ArticlesPage() {
  const allArticles = await getAllArticles();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      {/* ヘッダー */}
      <section className="py-16 bg-gradient-to-r from-sky-100 to-cyan-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <Link href="/">
              <Button
                variant="ghost"
                className="mb-6 text-sky-700 hover:text-sky-800 hover:bg-sky-200/50"
              >
                <ArrowLeft size={18} className="mr-2" />
                ホームに戻る
              </Button>
            </Link>

            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen size={32} className="text-sky-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                技術ブログ
              </h1>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              学習過程や技術的な挑戦について記録した技術ブログです。
              プロジェクト開発で得た知見や学習内容を共有しています。
            </p>

            <div className="mt-6 text-sm text-gray-500">
              全{allArticles.length}件の記事
            </div>
          </div>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {allArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                記事がまだありません
              </h3>
              <p className="text-gray-500">
                新しい記事をお楽しみに！
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

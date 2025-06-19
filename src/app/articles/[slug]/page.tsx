import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowLeft, ExternalLink } from 'lucide-react';
import { getAllArticleSlugs, getArticleBySlug } from '@/lib/articles';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: '記事が見つかりません | Portfolio',
    };
  }

  return {
    title: `${article.title} | Portfolio`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-cyan-50">
      {/* ヘッダー */}
      <section className="py-12 bg-gradient-to-r from-sky-100 to-cyan-100">
        <div className="max-w-4xl mx-auto px-6">
          <div>
            <Link href="/articles">
              <Button
                variant="ghost"
                className="mb-6 text-sky-700 hover:text-sky-800 hover:bg-sky-200/50"
              >
                <ArrowLeft size={18} className="mr-2" />
                記事一覧に戻る
              </Button>
            </Link>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {article.description && (
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {article.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readingTime}分で読めます</span>
              </div>
              {article.featured && (
                <Badge variant="default" className="bg-sky-600 text-white">
                  おすすめ
                </Badge>
              )}
            </div>

            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-sky-100 text-sky-700 hover:bg-sky-200"
                  >
                    <Tag size={12} className="mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 記事コンテンツ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <article
            className="article-content bg-white rounded-lg shadow-lg p-8 md:p-12"
            dangerouslySetInnerHTML={{ __html: article.htmlContent }}
          />
        </div>
      </section>

      {/* フッター */}
      <section className="py-12 bg-white border-t border-sky-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div>
            <p className="text-gray-600 mb-6">
              この記事が役に立ったら、ぜひ他の記事もご覧ください。
            </p>
            <Link href="/articles">
              <Button
                variant="outline"
                size="lg"
                className="border-sky-300 text-sky-700 hover:bg-sky-50 hover:border-sky-400"
              >
                他の記事を見る
                <ExternalLink size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

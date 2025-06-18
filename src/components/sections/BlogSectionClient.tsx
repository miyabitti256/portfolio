'use client';

import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ArticleCard } from '@/components/ui/article-card';
import { Button } from '@/components/ui/button';
import type { Article } from '@/lib/articles';

interface BlogSectionClientProps {
  articles: Article[];
  displayArticles: Article[];
}

export function BlogSectionClient({ articles, displayArticles }: BlogSectionClientProps) {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-sky-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="text-sky-600" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              技術ブログ
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            学習過程や技術的な挑戦について記録しています
          </p>
        </motion.div>

        {/* 記事一覧 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {displayArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
            />
          ))}
        </div>

        {/* すべての記事を見るボタン */}
        {articles.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link href="/articles">
              <Button
                variant="outline"
                size="lg"
                className="group border-sky-300 text-sky-700 hover:bg-sky-50 hover:border-sky-400"
              >
                すべての記事を見る
                <ArrowRight 
                  size={18} 
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
} 
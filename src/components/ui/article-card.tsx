import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Badge } from './badge';
import { Card, CardContent, CardHeader } from './card';
import type { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  const publishedDate = new Date(article.publishedAt).toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/articles/${article.slug}`}>
      <Card className="group cursor-pointer h-full bg-white hover:bg-sky-50 border border-sky-200 hover:border-sky-300 transition-all duration-300 hover:shadow-lg hover:shadow-sky-100">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-sky-700 transition-colors duration-200">
                  {article.title}
                </h3>
                {article.featured && (
                  <Badge variant="default" className="mt-2 bg-sky-600 text-white">
                    おすすめ
                  </Badge>
                )}
              </div>
            </div>
            
            {article.description && (
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {article.description}
              </p>
            )}
          </CardHeader>
          
          <CardContent className="pt-0">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{publishedDate}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{article.readingTime}分</span>
              </div>
            </div>
            
            {article.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {article.tags.slice(0, 3).map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="secondary"
                    className="text-xs bg-sky-100 text-sky-700 hover:bg-sky-200"
                  >
                    <Tag size={10} className="mr-1" />
                    {tag}
                  </Badge>
                ))}
                {article.tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                    +{article.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </Link>
  );
} 
import { getAllArticles } from '@/lib/articles';
import { BlogSectionClient } from './BlogSectionClient';

export default async function BlogSection() {
  const articles = await getAllArticles();
  const featuredArticles = articles.filter(article => article.featured);
  const displayArticles = featuredArticles.length > 0 
    ? featuredArticles.slice(0, 3) 
    : articles.slice(0, 3);

  if (articles.length === 0) {
    return null; // 記事がない場合はセクションを非表示
  }

  return <BlogSectionClient articles={articles} displayArticles={displayArticles} />;
} 
import { getAllArticles } from '@/lib/articles';
import { BlogSectionClient } from './BlogSectionClient';

export default async function BlogSection() {
  const articles = await getAllArticles();
  
  // featured記事を優先し、不足分は通常記事で補完
  const featuredArticles = articles.filter(article => article.featured);
  const nonFeaturedArticles = articles.filter(article => !article.featured);
  
  // featured記事優先で最大6件表示
  const displayArticles = [
    ...featuredArticles,
    ...nonFeaturedArticles
  ].slice(0, 6);

  if (articles.length === 0) {
    return null; // 記事がない場合はセクションを非表示
  }

  return <BlogSectionClient articles={articles} displayArticles={displayArticles} />;
} 
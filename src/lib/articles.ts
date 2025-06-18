import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';

export interface Article {
  id: string;
  title: string;
  description: string;
  content: string;
  htmlContent: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  slug: string;
}

const articlesDirectory = path.join(process.cwd(), 'public/articles');

// 記事の読み取り時間を計算する関数
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200; // 日本語の場合は文字数で計算
  const wordCount = content.length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Markdownをカスタム処理する関数
function preprocessMarkdown(content: string): string {
  // ファイル名付きコードブロックを処理（例: ```typescript:filename.ts）
  return content.replace(
    /```(\w+):([^\n]+)\n([\s\S]*?)```/g,
    (match, lang, filename, code) => {
      const cleanFilename = filename.trim();
      return `<div class="code-block-container" data-filename="${cleanFilename}">

\`\`\`${lang}
${code}\`\`\`

</div>`;
    }
  );
}

// すべての記事を取得
export async function getAllArticles(): Promise<Article[]> {
  // articlesディレクトリが存在しない場合は空の配列を返す
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(articlesDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // front matterをパース
        const matterResult = matter(fileContents);
        
        // Markdownを前処理
        const preprocessedContent = preprocessMarkdown(matterResult.content);
        
        // MarkdownをHTMLに変換（GFM + シンタックスハイライト対応）
        const processedContent = await remark()
          .use(remarkGfm) // GitHub Flavored Markdown
          .use(remarkRehype, { allowDangerousHtml: true }) // MarkdownからHTMLへ
          .use(rehypeRaw) // 生HTMLを許可
          .use(rehypeHighlight, {
            detect: true,
            ignoreMissing: true,
          }) // シンタックスハイライト
          .use(rehypeStringify) // HTMLを文字列に
          .process(preprocessedContent);
        
        const htmlContent = processedContent.toString();

        return {
          id: slug,
          slug,
          title: matterResult.data.title || slug,
          description: matterResult.data.description || '',
          content: matterResult.content,
          htmlContent,
          publishedAt: matterResult.data.publishedAt || new Date().toISOString(),
          updatedAt: matterResult.data.updatedAt,
          tags: matterResult.data.tags || [],
          readingTime: calculateReadingTime(matterResult.content),
          featured: matterResult.data.featured || false,
        } as Article;
      })
  );

  // 公開日で降順ソート
  return allArticlesData.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

// 特定の記事を取得
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Markdownを前処理
    const preprocessedContent = preprocessMarkdown(matterResult.content);
    
    // MarkdownをHTMLに変換（GFM + シンタックスハイライト対応）
    const processedContent = await remark()
      .use(remarkGfm) // GitHub Flavored Markdown
      .use(remarkRehype, { allowDangerousHtml: true }) // MarkdownからHTMLへ
      .use(rehypeRaw) // 生HTMLを許可
      .use(rehypeHighlight, {
        detect: true,
        ignoreMissing: true,
      }) // シンタックスハイライト
      .use(rehypeStringify) // HTMLを文字列に
      .process(preprocessedContent);
    
    const htmlContent = processedContent.toString();

    return {
      id: slug,
      slug,
      title: matterResult.data.title || slug,
      description: matterResult.data.description || '',
      content: matterResult.content,
      htmlContent,
      publishedAt: matterResult.data.publishedAt || new Date().toISOString(),
      updatedAt: matterResult.data.updatedAt,
      tags: matterResult.data.tags || [],
      readingTime: calculateReadingTime(matterResult.content),
      featured: matterResult.data.featured || false,
    } as Article;
  } catch (error) {
    console.error('Error reading article:', error);
    return null;
  }
}

// 記事のスラッグ一覧を取得（SSG用）
export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(articlesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.md$/, ''));
} 
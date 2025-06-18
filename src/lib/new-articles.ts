#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// コマンドライン引数の型定義
interface CreateArticleOptions {
  slug: string;
  title?: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
}

// 現在の日付をISO形式で取得
function getCurrentDate(): string {
  return new Date().toISOString().split('T')[0];
}

// スラッグからタイトルを生成
function generateTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// 記事のテンプレートを生成
function generateArticleTemplate(options: CreateArticleOptions): string {
  const {
    slug,
    title = generateTitleFromSlug(slug),
    description = "",
    tags = [],
    featured = false
  } = options;

  const publishedAt = getCurrentDate();

  return `---
title: "${title}"
description: "${description}"
publishedAt: "${publishedAt}"
tags: [${tags.filter(tag => tag.trim()).map(tag => `"${tag}"`).join(', ')}]
featured: ${featured}
---

# ${title}

`;
}

// コマンドライン引数をパース
function parseArguments(): CreateArticleOptions | null {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('使用方法: bun articles:new --slug="article-slug" [options]');
    console.error('');
    console.error('オプション:');
    console.error('  --slug="slug-name"     記事のスラッグ（必須）');
    console.error('  --title="Title"        記事のタイトル');
    console.error('  --description="desc"   記事の説明');
    console.error('  --tags="tag1,tag2"     タグ（カンマ区切り）');
    console.error('  --featured=true        注目記事にする');
    console.error('');
    console.error('例:');
    console.error('  bun articles:new --slug="nextjs-tips"');
    console.error('  bun articles:new --slug="react-hooks" --title="React Hooks入門" --featured=true');
    return null;
  }

  const options: Partial<CreateArticleOptions> = {};

  for (const arg of args) {
    if (arg.startsWith('--slug=')) {
      options.slug = arg.split('=')[1].replace(/"/g, '');
    } else if (arg.startsWith('--title=')) {
      options.title = arg.split('=')[1].replace(/"/g, '');
    } else if (arg.startsWith('--description=')) {
      options.description = arg.split('=')[1].replace(/"/g, '');
    } else if (arg.startsWith('--tags=')) {
      const tagString = arg.split('=')[1].replace(/"/g, '');
      options.tags = tagString.split(',').map(tag => tag.trim());
    } else if (arg.startsWith('--featured=')) {
      options.featured = arg.split('=')[1] === 'true';
    }
  }

  if (!options.slug) {
    console.error('エラー: --slug は必須です');
    return null;
  }

  // スラッグのバリデーション
  if (!/^[a-z0-9-]+$/.test(options.slug)) {
    console.error('エラー: スラッグは小文字、数字、ハイフンのみ使用できます');
    return null;
  }

  return options as CreateArticleOptions;
}

// 記事ファイルを作成
function createArticleFile(options: CreateArticleOptions): void {
  const articlesDir = path.join(process.cwd(), 'public/articles');
  const fileName = `${options.slug}.md`;
  const filePath = path.join(articlesDir, fileName);

  // ディレクトリが存在しない場合は作成
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
    console.log(`✅ ディレクトリを作成しました: ${articlesDir}`);
  }

  // ファイルが既に存在する場合は確認
  if (fs.existsSync(filePath)) {
    console.error(`❌ エラー: ファイルが既に存在します: ${fileName}`);
    console.error('別のスラッグを使用するか、既存のファイルを削除してください。');
    return;
  }

  // テンプレートを生成
  const template = generateArticleTemplate(options);

  // ファイルを作成
  try {
    fs.writeFileSync(filePath, template, 'utf8');
    console.log(`✅ ${fileName} created!`);
    console.log('');
    console.log('📝 Edit your article:');
    console.log(`   ${filePath}`);
  } catch (error) {
    console.error('❌ ファイル作成エラー:', error);
  }
}

// メイン関数
function main(): void {
  const options = parseArguments();
  if (!options) {
    process.exit(1);
  }

  createArticleFile(options);
}

// スクリプトが直接実行された場合のみメイン関数を実行
if (require.main === module) {
  main();
}

export { createArticleFile, generateArticleTemplate, parseArguments };

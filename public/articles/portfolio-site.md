---
title: "Portfolio Site"
description: "Next.js+FramerMotionで作成したポートフォリオサイト"
publishedAt: "2025-06-18"
tags: ["Next.js", "React", "TypeScript", "FramerMotion", "Tailwind CSS", "Shadcn UI", "Vercel"]
featured: true
---

# Next.js 15とFramer Motionで構築するエンジニアポートフォリオサイト

## はじめに

就職活動に向けて、自分の技術力と学習能力をアピールできるポートフォリオサイトを作成しました。単なる情報を羅列するだけでなく、**エンジニア感のあるインタラクティブなUI**と**最新技術の積極的な活用**にこだわりました。

本記事では、このポートフォリオサイトの技術的な実装内容、選択した技術スタックの理由、開発過程で得られた学びについて詳しく解説します。

## 🎯 プロジェクト概要

### 開発動機

WordPress → PHP に興味を持てず → JavaScript/TypeScriptから学習を開始した経緯から、**Web系エンジニアとしての技術力**を具体的に示す必要がありました。特に以下の点を重視しています：

- **現代的な技術スタックの習得**：Next.js 15、React 19、TypeScript 5の最新技術
- **実践的な開発経験**：単純なSPAではなく、複雑なルーティングとアニメーション
- **ユーザー体験の向上**：スムーズなページ遷移とインタラクティブなUI
- **エンジニアらしさ**：VS Code風UI、ターミナル風デザインなど

### サイトの特徴

**🎨 エンジニア感のあるデザイン**
- VS Code風のプロジェクト表示
- ターミナルプロンプト風のセクションデザイン
- package.json風のスキル表示
- Git commit履歴風の学習経歴表示

**⚡️ 高度なNext.js機能の活用**
- Parallel RoutesとIntercepting Routesによるモーダル実装
- App Routerの完全活用
- Server ComponentとClient Componentの適切な使い分け

**🎬 リッチなアニメーション**
- Framer Motionによる高品質なページ遷移
- ローディング画面のターミナル風アニメーション
- セクション間のスムーズなスクロールアニメーション

## 🛠️ 技術スタック

### フロントエンド

```json
{
  "framework": "Next.js 15.3.3",
  "runtime": "React 19",
  "language": "TypeScript 5",
  "styling": "Tailwind CSS 4",
  "components": "shadcn/ui",
  "animation": "Framer Motion 11",
  "icons": "Lucide React + Simple Icons",
  "font": "Zen Maru Gothic"
}
```

### 開発・デプロイ環境

```json
{
  "packageManager": "Bun",
  "linting": "ESLint 9 + eslint-config-next",
  "deployment": "Vercel",
  "versionControl": "Git + GitHub"
}
```

### 技術選択の理由

**Next.js 15 (App Router)**
- 最新のApp Routerによる直感的なファイルベースルーティング
- Parallel RoutesとIntercepting Routesでモーダル実装
- Server ComponentとClient Componentの適切な使い分けでパフォーマンス最適化

**TypeScript 5**
- 型安全性による開発効率向上
- 大規模アプリケーションでの保守性確保
- 最新のES2023機能の活用

**Framer Motion**
- 宣言的なアニメーション記述
- パフォーマンスに優れたアニメーション
- 複雑なページ遷移アニメーションの実現

**Tailwind CSS 4**
- ユーティリティファーストによる高速開発
- レスポンシブデザインの効率的な実装
- カスタムテーマとの組み合わせ

## 🏗️ アーキテクチャ設計

### ディレクトリ構造

```typescript:フォルダ構造
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── @modal/            # 🔀 Parallel Routes
│   │   │   ├── (.)profile/    # 🎯 Intercepting Routes
│   │   │   ├── (.)projects/   # 🎯 Intercepting Routes  
│   │   │   └── default.tsx    # デフォルトUI
│   │   ├── articles/          # ブログ機能
│   │   ├── profile/           # プロフィール詳細
│   │   ├── projects/          # プロジェクト詳細
│   │   ├── layout.tsx         # ルートレイアウト
│   │   └── page.tsx           # ホームページ
│   ├── components/
│   │   ├── animations/        # 🎬 Framer Motion
│   │   ├── engineer-ui/       # 👨‍💻 エンジニア感のあるUI
│   │   ├── layout/            # レイアウト関連
│   │   ├── modals/            # モーダル関連
│   │   ├── sections/          # ページセクション
│   │   └── ui/                # shadcn/ui + カスタム
│   ├── data/                  # 静的データ
│   └── lib/                   # ユーティリティ
├── public/                    # 静的ファイル
│   ├── articles/              # Markdown記事
│   └── images/                # 画像ファイル
└── 設定ファイル群
```

### コンポーネント設計思想

**1. Server Component優先設計**
```typescript:例：SkillsSection.tsx
// ✅ Server Component（推奨）
export default function SkillsSection({ 
  searchParams 
}: { 
  searchParams: { category?: string } 
}) {
  const category = searchParams.category || 'frontend';
  const skills = getSkillsByCategory(category);
  
  return (
    <section>
      <SkillCategoryButtons currentCategory={category} />
      <SkillList skills={skills} />
    </section>
  );
}
```

**2. Client Componentは最小限**
```typescript:例：AnimatedButton.tsx
'use client';

// アニメーション・インタラクションのみClient Component
export function AnimatedButton({ onClick }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* ボタンコンテンツ */}
    </motion.button>
  );
}
```

## 🎬 アニメーションシステム

### ページ遷移アニメーション

最も技術的に挑戦的だった部分が、**スムーズなページ遷移アニメーション**の実装です。

```typescript:PageTransition.tsx
'use client';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStage, setLoadingStage] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // ターミナル風ローディングメッセージ
  const loadingMessages = [
    "$ cd /portfolio",
    "$ npm run build",
    "$ Optimizing components...",
    "$ Ready! ✨"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingStage < loadingMessages.length - 1) {
        setLoadingStage(prev => prev + 1);
      } else {
        // 最終段階でコンテンツ表示
        setShowContent(true);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [loadingStage]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gray-900 text-green-400 font-mono flex items-center justify-center z-50">
        <div className="space-y-4">
          {loadingMessages.slice(0, loadingStage + 1).map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span>{'>'}</span>
              <span>{message}</span>
            </motion.div>
          ))}
          <Progress value={(loadingStage + 1) / loadingMessages.length * 100} />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showContent ? 1 : 0 }}
      transition={{ duration: 0.6 }}
      className={showContent ? '' : 'opacity-0 pointer-events-none'}
    >
      {children}
    </motion.div>
  );
}
```

### モーダル表示時のアニメーション制御

Parallel RoutesとIntercepting Routesでモーダル表示時にもページ遷移アニメーションが再生される問題を解決しました。

```typescript:utils.ts
// モーダル関連遷移の検知
export function isModalRelatedTransition(): boolean {
  if (typeof window === 'undefined') return false;
  
  const currentPath = window.location.pathname;
  const currentParams = new URLSearchParams(window.location.search);
  
  // インターセプティングルートの検知
  const isIntercepting = /\/\(.*\)/.test(currentPath);
  
  // パラレルルートの検知  
  const isParallel = currentPath.includes('@modal');
  
  // URLパラメータでのモーダル検知
  const hasModalParam = currentParams.has('modal');
  
  return isIntercepting || isParallel || hasModalParam;
}
```

### セクションアニメーション

各セクションには控えめながら効果的なアニメーションを実装しています。

```typescript:AnimationVariants.ts
export const sectionAnimations = {
  // Hero Section：リッチなアニメーション
  heroContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  
  // 他セクション：控えめなアニメーション
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  // スタガーアニメーション
  staggerContainer: {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};
```

## 🔀 高度なルーティング

### Parallel RoutesとIntercepting Routes

最も学習になった部分が、Next.js 15の高度なルーティング機能です。

```typescript:ディレクトリ構造
app/
├── @modal/                    # Parallel Route
│   ├── (.)profile/           # Intercepting Route
│   │   └── page.tsx         # プロフィールモーダル
│   ├── (.)projects/         
│   │   └── [id]/
│   │       └── page.tsx     # プロジェクト詳細モーダル
│   └── default.tsx          # デフォルトUI（空）
├── profile/
│   └── page.tsx             # 直接アクセス時のページ
├── projects/
│   └── [id]/
│       └── page.tsx         # 直接アクセス時のページ
└── layout.tsx               # モーダル表示領域を含む
```

```typescript:layout.tsx
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <PageTransition>
          {children}
          {modal}  {/* モーダルコンテンツ */}
        </PageTransition>
      </body>
    </html>
  );
}
```

### ルーティングの利点

**1. SEO対応**
- 直接URLアクセス時は通常のページとして表示
- モーダル経由でも同じコンテンツにアクセス可能

**2. UX向上**
- サイト内遷移時はモーダルでスムーズ表示
- 戻るボタンで元のページに復帰
- URLの共有が可能

**3. パフォーマンス**
- 必要な部分のみの再レンダリング
- ページ全体の再読み込み不要

## 👨‍💻 エンジニア感のあるUI実装

### VS Code風プロジェクト表示

```typescript:VSCodeEditor.tsx
export default function VSCodeEditor({ 
  projectName, 
  files, 
  onTabChange 
}: VSCodeEditorProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string>('');

  const renderFileTree = (items: FileItem[], depth = 0) => {
    return items.map((item) => {
      const isExpanded = expandedFolders.has(item.id);
      
      return (
        <div key={item.id} style={{ marginLeft: `${depth * 12}px` }}>
          <div
            className={`flex items-center gap-2 px-2 py-1 text-sm text-gray-300 
              hover:bg-gray-700 cursor-pointer rounded transition-colors duration-200 
              ${activeTab === item.id ? 'bg-gray-700 text-white' : ''}`}
            onClick={() => {
              if (item.type === 'file') {
                openFile(item);
              } else {
                toggleFolder(item.id);
              }
            }}
          >
            {/* ファイルツリーUI */}
            {item.type === 'folder' ? (
              isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />
            ) : <div className="w-4" />}
            
            <item.icon size={16} className="text-blue-400" />
            <span className="flex-1 truncate">{item.name}</span>
          </div>
          
          {/* 子要素の再帰表示 */}
          {item.type === 'folder' && item.children && isExpanded && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                {renderFileTree(item.children, depth + 1)}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-gray-100 rounded-lg">
      {/* VS Code風ヘッダー */}
      <div className="flex items-center justify-between p-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          {/* macOS風ドット */}
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* エクスプローラーとエディター */}
      <div className="flex flex-1">
        <div className="w-64 bg-gray-800 border-r border-gray-700">
          {renderFileTree(files)}
        </div>
        <div className="flex-1">
          {/* タブバー */}
          {/* エディター内容 */}
        </div>
      </div>
    </div>
  );
}
```

### package.json風スキル表示

```typescript:SkillsSection.tsx
export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  
  return (
    <div className="package-json-style bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono">
      <pre className="text-gray-300">
{`{
  "name": "@miyabitti256/skills",
  "version": "2024.12.0",
  "description": "現在学習中の技術スタック",
  "dependencies": {`}
      </pre>
      
      <div className="ml-4 my-4">
        {skills.frontend.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center gap-3">
              <TechIcon name={skill.name} size={20} />
              <span className="text-green-400">"{skill.name}"</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-300">"{skill.level}%"</span>
              <Progress value={skill.level} className="w-24" />
            </div>
          </motion.div>
        ))}
      </div>
      
      <pre className="text-gray-300">
{`  },
  "devDependencies": {
    "学習意欲": "∞",
    "継続力": "100%",
    "好奇心": "MAX"
  },
  "scripts": {
    "study": "毎日コードを書く",
    "build": "知識を積み上げる", 
    "deploy": "実際のプロジェクトで実践"
  },
  "author": "miyabitti256",
  "license": "Learning-in-Progress"
}`}
      </pre>
    </div>
  );
}
```

## 📝 ブログシステムの実装

### Markdown記事システム

```typescript:articles.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface Article {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
  content: string;
}

const articlesDirectory = path.join(process.cwd(), 'public/articles');

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const fullPath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const { data, content } = matter(fileContents);
    
    // MarkdownをHTMLに変換
    const processedContent = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(content);
    
    const contentHtml = processedContent.toString();
    
    return {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      tags: data.tags || [],
      featured: data.featured || false,
      content: contentHtml,
    };
  } catch (error) {
    console.error(`Error reading article ${slug}:`, error);
    return null;
  }
}

export async function getAllArticles(): Promise<Article[]> {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = await Promise.all(
    fileNames
      .filter(name => name.endsWith('.md'))
      .map(async (name) => {
        const slug = name.replace(/\.md$/, '');
        return await getArticleBySlug(slug);
      })
  );
  
  return articles
    .filter((article): article is Article => article !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
```

### Zenn風記事作成CLI

```typescript:scripts/create-article.ts
#!/usr/bin/env bun

import fs from 'fs';
import path from 'path';

interface ArticleOptions {
  slug: string;
  title?: string;
  description?: string;
  tags?: string[];
  featured?: boolean;
}

function createArticle(options: ArticleOptions) {
  const { slug, title, description, tags, featured } = options;
  
  // スラッグのバリデーション
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw new Error('スラッグは英小文字、数字、ハイフンのみ使用可能です');
  }
  
  const articlesDir = path.join(process.cwd(), 'public/articles');
  const filePath = path.join(articlesDir, `${slug}.md`);
  
  // 重複チェック
  if (fs.existsSync(filePath)) {
    throw new Error(`記事 ${slug} は既に存在します`);
  }
  
  // front matterテンプレート
  const frontMatter = `---
title: "${title || slug}"
description: "${description || ''}"
publishedAt: "${new Date().toISOString().split('T')[0]}"
tags: [${tags?.map(tag => `"${tag}"`).join(', ') || ''}]
featured: ${featured || false}
---

# ${title || slug}

ここに記事の内容を書いてください。

## セクション例

- リスト項目1
- リスト項目2

\`\`\`typescript:example.ts
console.log('Hello, World!');
\`\`\`

`;

  // ディレクトリ作成
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }
  
  // ファイル作成
  fs.writeFileSync(filePath, frontMatter);
  
  console.log(`✅ 記事を作成しました: ${filePath}`);
  console.log(`📝 編集コマンド: code ${filePath}`);
}

// CLI引数解析
const args = process.argv.slice(2);
const options: ArticleOptions = { slug: '' };

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  
  if (arg.startsWith('--slug=')) {
    options.slug = arg.split('=')[1];
  } else if (arg.startsWith('--title=')) {
    options.title = arg.split('=')[1];
  } else if (arg.startsWith('--description=')) {
    options.description = arg.split('=')[1];
  } else if (arg.startsWith('--tags=')) {
    options.tags = arg.split('=')[1].split(',');
  } else if (arg === '--featured') {
    options.featured = true;
  }
}

if (!options.slug) {
  console.error('❌ --slug オプションは必須です');
  process.exit(1);
}

try {
  createArticle(options);
} catch (error) {
  console.error('❌ エラー:', error.message);
  process.exit(1);
}
```

## 📱 レスポンシブ対応

### iPhone SE対応の課題と解決

特に苦労したのが、iPhone SE (375px) での表示問題でした。

```typescript:課題と解決策
// ❌ 問題：長いURLが画面からはみ出る
<div className="text-blue-400">
  https://github.com/miyabitti256/portfolio-website
</div>

// ✅ 解決：break-allで強制改行
<div className="text-blue-400 break-all">
  https://github.com/miyabitti256/portfolio-website  
</div>

// ❌ 問題：package.json風デザインでpadding不足
<div className="p-6 font-mono">
  
// ✅ 解決：レスポンシブpadding
<div className="p-3 sm:p-6 font-mono">

// ❌ 問題：フォントサイズが小さすぎる  
<div className="text-xs">

// ✅ 解決：段階的フォントサイズ
<div className="text-xs sm:text-sm md:text-base">
```

### Intersection Observer の調整

スキルセクションのアニメーション発火タイミングも調整しました。

```typescript:改善前後の比較
// ❌ 改善前：threshold: 0.1（10%表示で発火）
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  },
  { threshold: 0.1 }  // 小さい画面では発火しにくい
);

// ✅ 改善後：threshold: 0.01 + rootMargin
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  },
  { 
    threshold: 0.01,      // より敏感に
    rootMargin: '100px'   // 100px手前から発火
  }
);
```

## 🎨 デザインシステム

### カラーパレット設計

```typescript:tailwind.config.ts
export const colors = {
  primary: {
    50: '#f0f9ff',   // 最も淡い空色
    100: '#e0f2fe',  
    200: '#bae6fd',  
    300: '#7dd3fc',  
    400: '#38bdf8',  
    500: '#0ea5e9',  
    600: '#0284c7',  
    700: '#0369a1',  // 最も濃い
  },
  engineer: {
    terminal: '#1a1a1a',
    code: '#2d3748',
    syntax: {
      keyword: '#3b82f6',  // 青
      string: '#10b981',   // 緑  
      comment: '#6b7280',  // グレー
      function: '#8b5cf6', // 紫
    },
  },
};
```

### エンジニア感のあるカスタムクラス

```css:globals.css
@layer components {
  .terminal-window {
    @apply bg-gray-900 rounded-lg border border-gray-700 overflow-hidden;
  }
  
  .terminal-header {
    @apply bg-gray-800 px-4 py-2 flex items-center gap-2;
  }
  
  .terminal-dot {
    @apply w-3 h-3 rounded-full;
  }
  
  .package-json-style {
    @apply bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono;
  }
  
  .vscode-tab {
    @apply bg-gray-800 border-t-2 border-blue-500 px-4 py-2 text-sm rounded-t-lg;
  }
  
  .git-commit {
    @apply flex items-center gap-3 p-3 border-l-4 border-blue-500 bg-gray-50;
  }
}
```

## 🚧 開発過程で遭遇した課題

### 1. ページ遷移アニメーション問題

**課題**：初回ロード時にコンテンツが一瞬見えてしまう

**解決策**：
```typescript
// コンテンツを完全に隠すクラス制御
<motion.div
  className={showContent ? '' : 'opacity-0 pointer-events-none'}
>
  {children}
</motion.div>
```

### 2. モーダル表示時のアニメーション制御

**課題**：Parallel Routes使用時にもページ遷移アニメーションが再生される

**解決策**：
```typescript
// モーダル検知ロジックの実装
export function isModalRelatedTransition(): boolean {
  const currentPath = window.location.pathname;
  const isIntercepting = /\/\(.*\)/.test(currentPath);
  const isParallel = currentPath.includes('@modal');
  return isIntercepting || isParallel;
}
```

### 3. VSCodeEditor内でのstate更新エラー

**課題**：レンダリング中にstateを更新しようとしてエラー

**解決策**：
```typescript
// 個別フォルダの展開状態管理
const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());

const toggleFolder = useCallback((folderId: string, e?: React.MouseEvent) => {
  e?.stopPropagation();
  setExpandedFolders(prev => {
    const newSet = new Set(prev);
    if (newSet.has(folderId)) {
      newSet.delete(folderId);
    } else {
      newSet.add(folderId);
    }
    return newSet;
  });
}, []);
```

### 4. 非推奨アイコンの警告

**課題**：LucideのTwitter、GitHubアイコンが非推奨

**解決策**：Simple Iconsライブラリによる自作アイコンコンポーネント
```typescript:social-icons.tsx
export const GitHubIcon = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className}>
    <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);
```

## 📊 パフォーマンス最適化

### Lighthouse スコア

最終的なパフォーマンス指標：
- **Performance**: 92点
- **Accessibility**: 95点  
- **Best Practices**: 96点
- **SEO**: 90点

### 最適化手法

**1. 画像最適化**
```typescript
// Next.js Image コンポーネント活用
<Image
  src="/images/projects/project-1.webp"
  alt="プロジェクト画像"
  width={600}
  height={400}
  priority={false}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

**2. 動的インポート**
```typescript
// 重いコンポーネントの遅延読み込み
const VSCodeEditor = dynamic(() => import('@/components/engineer-ui/VSCodeEditor'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // クライアントサイドでのみ実行
});
```

**3. フォント最適化**
```typescript:next.config.ts
module.exports = {
  experimental: {
    optimizeFonts: true,
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ],
  },
};
```

## 🎓 学習成果と今後の展望

### 技術的成長

**Next.js 15の深い理解**
- App Routerの完全活用
- Parallel RoutesとIntercepting Routesの実践的応用
- Server/Client Componentの適切な使い分け

**Framer Motionによるアニメーション技術**
- 宣言的なアニメーション設計
- パフォーマンスを意識したアニメーション実装
- 複雑な条件分岐を持つアニメーション制御

**TypeScriptでの大規模開発**
- 型安全性を活かした開発効率向上
- インターフェース設計とコンポーネント間の型連携
- エラーハンドリングと型ガードの実装

### 開発プロセスの改善

**段階的な実装アプローチ**
1. 機能単位での完全実装
2. 動作確認とテスト
3. 次の機能へ進行

**コードの品質管理**
- ESLint + TypeScriptによる静的解析
- 一貫したコーディングスタイル
- コンポーネントの再利用性を意識した設計

### 今後の技術学習計画

**短期目標（3ヶ月）**
- Rust/Goの基礎学習
- WebAssemblyの研究
- マイクロフロントエンドアーキテクチャの学習

**中期目標（6ヶ月）**
- フルスタックアプリケーションのスケールアップ
- CI/CDパイプラインの実装
- テスト自動化（Jest、Playwright）

**長期目標（1年）**
- 大規模Webアプリケーションの設計・実装
- パフォーマンス最適化の深掘り
- オープンソースプロジェクトへの貢献

## 📋 まとめ

このポートフォリオサイトの開発を通じて、単なる情報展示サイトではなく、**技術力を具体的に示すインタラクティブなWebアプリケーション**を作ることができました。

### 主な成果

**技術面**
- Next.js 15の高度な機能を実践的に活用
- Framer Motionによる高品質なアニメーションシステム
- レスポンシブデザインの完全対応
- TypeScriptによる型安全な大規模開発

**デザイン面**  
- エンジニア感のあるUI/UXの実現
- VS Code風、ターミナル風などの差別化されたデザイン
- 一貫したデザインシステムの構築

**開発プロセス面**
- 段階的な実装による品質管理
- 問題解決能力の向上
- 最新技術への適応力の実証

就職活動において、このポートフォリオは単なる作品集ではなく、**学習能力・問題解決能力・技術的好奇心**を具体的に示すツールとして機能すると確信しています。

### 技術ブログとして

このプロジェクトで学んだ知識は、今後も継続的に技術ブログとして発信していく予定です。特に：

- Next.js 15の高度な機能解説
- Framer Motionアニメーション実装パターン
- TypeScriptでの大規模開発ベストプラクティス
- レスポンシブ対応の実践的手法

など、実際の開発で遭遇した課題とその解決策を中心に、実用的な情報を提供していきたいと思います。

---

**GitHub Repository**: [https://github.com/miyabitti256/portfolio](https://github.com/miyabitti256/portfolio)  
**Live Demo**: [https://portfolio-miyabitti256.vercel.app](https://portfolio-miyabitti256.vercel.app)  
**技術記事**: [Zenn - miyabitti256](https://zenn.dev/miyabitti256)

最後まで読んでいただき、ありがとうございました。質問やフィードバックがあれば、ぜひお気軽にお声がけください！


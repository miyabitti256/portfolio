'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  FileText, 
  Globe,
  Package,
  BookOpen,
  Folder
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import VSCodeEditor from '@/components/engineer-ui/VSCodeEditor';

// FileItem型を定義
interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  content?: React.ReactNode;
  extension?: string;
  children?: FileItem[];
}

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentVSCodeTab, setCurrentVSCodeTab] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // プロジェクト毎のファイル構造を生成
  const generateProjectFiles = (): FileItem[] => {
    return projects.map(project => ({
      id: project.id,
      name: project.titleEn || project.title,
      type: 'folder' as const,
      icon: Folder,
      children: [
        {
          id: `${project.id}-readme`,
          name: 'README.md',
          type: 'file' as const,
          icon: FileText,
          extension: '.md',
          content: (
            <div className="p-6 text-gray-300 font-zen-maru">
              <h1 className="text-2xl font-bold text-white mb-6">{project.title}</h1>
              <div className="space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-blue-300 mb-2">📖 概要</h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
                
                <div>
                  <h2 className="text-lg font-semibold text-blue-300 mb-2">🛠️ 技術スタック</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-700 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-blue-300 mb-2">📊 ステータス</h2>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      project.status === 'completed' ? 'bg-green-500' :
                      project.status === 'in-progress' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`}></div>
                    <span>{
                      project.status === 'completed' ? '完成' :
                      project.status === 'in-progress' ? '開発中' : '計画中'
                    }</span>
                  </div>
                </div>

                {project.longDescription && (
                  <div>
                    <h2 className="text-lg font-semibold text-blue-300 mb-2">📝 詳細説明</h2>
                    <div className="whitespace-pre-line leading-relaxed text-gray-300">
                      {project.longDescription}
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-lg font-semibold text-blue-300 mb-2">🔗 リンク</h2>
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                         className="flex items-center gap-2 text-blue-400 hover:text-blue-300">
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-green-400 hover:text-green-300">
                        <Globe size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.articleUrl && (
                      <a href={project.articleUrl} target="_blank" rel="noopener noreferrer"
                         className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                        <BookOpen size={16} />
                        技術記事
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ),
        },
        {
          id: `${project.id}-package`,
          name: 'package.json',
          type: 'file' as const,
          icon: Package,
          extension: '.json',
          content: (
            <div className="p-6 bg-gray-900 text-gray-300 font-mono text-sm">
              <pre>{JSON.stringify({
                name: project.id,
                version: "1.0.0",
                description: project.description,
                main: "index.js",
                scripts: {
                  dev: "next dev",
                  build: "next build",
                  start: "next start",
                  lint: "eslint ."
                },
                dependencies: project.technologies.reduce((acc, tech) => {
                  const techVersions: Record<string, string> = {
                    'Next.js': '^15.3.3',
                    'React': '^19.0.0',
                    'TypeScript': '^5.0.0',
                    'Tailwind CSS': '^4.0.0',
                    'Framer Motion': '^11.0.0',
                    'shadcn/ui': '^0.8.0',
                    'Discord.js': '^14.0.0',
                    'Hono': '^4.0.0',
                    'Prisma': '^5.0.0',
                    'Supabase': '^2.0.0',
                    'Auth.js': '^5.0.0'
                  };
                  if (techVersions[tech]) {
                    acc[tech.toLowerCase().replace(/[^a-z0-9]/g, '-')] = techVersions[tech];
                  }
                  return acc;
                }, {} as Record<string, string>),
                devDependencies: {
                  "@types/node": "^20.0.0",
                  "@types/react": "^18.0.0",
                  "eslint": "^8.0.0",
                  "eslint-config-next": "15.3.3"
                },
                keywords: project.technologies,
                author: "miyabitti256",
                license: "MIT"
              }, null, 2)}</pre>
            </div>
          ),
        },
        {
          id: `${project.id}-learning`,
          name: 'LEARNING.md',
          type: 'file' as const,
          icon: FileText,
          extension: '.md',
          content: (
            <div className="p-6 text-gray-300 font-zen-maru">
              <h1 className="text-2xl font-bold text-white mb-6">📚 学習記録 - {project.title}</h1>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-semibold text-green-300 mb-3">✨ 主な学習ポイント</h2>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-yellow-300 mb-3">🎯 技術的ハイライト</h2>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-yellow-400 mt-1">★</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-red-300 mb-3">🚧 課題・困難点</h2>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-red-400 mt-1">⚠</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.architecture && (
                  <div>
                    <h2 className="text-lg font-semibold text-purple-300 mb-3">🏗️ アーキテクチャ</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.architecture.frontend && (
                        <div className="bg-gray-800 p-4 rounded">
                          <h3 className="font-semibold text-blue-300 mb-2">Frontend</h3>
                          <ul className="space-y-1 text-sm">
                            {project.architecture.frontend.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.architecture.backend && (
                        <div className="bg-gray-800 p-4 rounded">
                          <h3 className="font-semibold text-green-300 mb-2">Backend</h3>
                          <ul className="space-y-1 text-sm">
                            {project.architecture.backend.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.architecture.database && (
                        <div className="bg-gray-800 p-4 rounded">
                          <h3 className="font-semibold text-yellow-300 mb-2">Database</h3>
                          <ul className="space-y-1 text-sm">
                            {project.architecture.database.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.architecture.deployment && (
                        <div className="bg-gray-800 p-4 rounded">
                          <h3 className="font-semibold text-purple-300 mb-2">Deployment</h3>
                          <ul className="space-y-1 text-sm">
                            {project.architecture.deployment.map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-700 pt-4 mt-6">
                  <p className="text-sm text-gray-400">
                    開発期間: {project.startDate} 〜 {project.endDate || '進行中'}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    カテゴリ: {project.category}
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        ...(project.id === 'portfolio-site' ? [{
          id: `${project.id}-structure`,
          name: 'フォルダ構造.md',
          type: 'file' as const,
          icon: FileText,
          extension: '.md',
          content: (
            <div className="p-6 text-gray-300 font-zen-maru">
              <h1 className="text-2xl font-bold text-white mb-6">📁 Portfolio Site - フォルダ構造</h1>
              
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
{`portfolio/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 📁 @modal/            # 🔀 Parallel Routes
│   │   │   ├── 📁 (.)profile/    # 🎯 Intercepting Routes
│   │   │   ├── 📁 (.)projects/   # 🎯 Intercepting Routes  
│   │   │   └── default.tsx       # デフォルトUI
│   │   ├── 📁 articles/          # ブログ機能
│   │   │   ├── 📁 [slug]/        # 動的ルート
│   │   │   └── page.tsx
│   │   ├── 📁 profile/           # プロフィール詳細
│   │   ├── 📁 projects/          # プロジェクト詳細
│   │   │   └── 📁 [id]/          # 動的ルート
│   │   ├── layout.tsx            # ルートレイアウト
│   │   ├── page.tsx              # ホームページ
│   │   └── globals.css           # グローバルスタイル
│   ├── 📁 components/
│   │   ├── 📁 animations/        # 🎬 Framer Motion
│   │   │   └── PageTransition.tsx
│   │   ├── 📁 engineer-ui/       # 👨‍💻 エンジニア感のあるUI
│   │   │   └── VSCodeEditor.tsx  # VS Code風エディタ
│   │   ├── 📁 layout/            # レイアウト関連
│   │   │   └── Footer.tsx
│   │   ├── 📁 modals/            # モーダル関連
│   │   │   ├── ProfileContent.tsx
│   │   │   └── ProjectDetailContent.tsx
│   │   ├── 📁 sections/          # ページセクション
│   │   │   ├── HeroSection.tsx   # 🎯 メインビジュアル
│   │   │   ├── AboutSection.tsx  # 自己紹介
│   │   │   ├── SkillsSection.tsx # スキル表示
│   │   │   ├── ProjectsSection.tsx # プロジェクト紹介
│   │   │   ├── BlogSection.tsx   # ブログ一覧
│   │   │   └── ContactSection.tsx # お問い合わせ
│   │   └── 📁 ui/                # shadcn/ui + カスタム
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── social-icons.tsx  # SNSアイコン
│   │       └── tech-icons.tsx    # 技術アイコン
│   ├── 📁 data/                  # 静的データ
│   │   ├── personal.ts           # 個人情報
│   │   ├── projects.ts           # プロジェクト情報
│   │   ├── skills.ts             # スキル情報
│   │   └── animations.ts         # アニメーション定義
│   └── 📁 lib/                   # ユーティリティ
│       ├── utils.ts              # 汎用関数
│       ├── constants.ts          # 定数定義
│       ├── types.ts              # 型定義
│       ├── articles.ts           # 記事関連
│       └── new-articles.ts       # 記事作成
├── 📁 public/                    # 静的ファイル
│   ├── 📁 articles/              # Markdown記事
│   │   ├── discord-bot-development.md
│   │   ├── nextjs-learning-journey.md
│   │   └── test.md
│   ├── 📁 images/                # 画像ファイル
│   │   └── 📁 projects/          # プロジェクト画像
│   └── 📁 icons/                 # アイコン
├── 📄 package.json               # 依存関係
├── 📄 next.config.ts             # Next.js設定
├── 📄 tailwind.config.ts         # Tailwind設定
├── 📄 tsconfig.json              # TypeScript設定
└── 📄 bun.lock                   # パッケージロック

🔧 主要技術構成:
├── ⚛️  Next.js 15.3.3 (App Router)
├── ⚛️  React 19
├── 🔷 TypeScript 5
├── 🎨 Tailwind CSS 4  
├── 🎬 Framer Motion (アニメーション)
├── 🎯 shadcn/ui (UIコンポーネント)
├── 📦 Bun (パッケージマネージャー)
└── 🚀 Vercel (デプロイ)

💡 特殊機能:
├── 🔀 Parallel Routes でモーダル実装
├── 🎯 Intercepting Routes でプロジェクト詳細
├── 🎬 ページ遷移アニメーション (Framer Motion)
├── 📱 完全レスポンシブ対応
├── 👨‍💻 VS Code風プロジェクト表示
├── 📝 Markdown記事システム
├── ⚡️ ZennスタイルCLI (記事作成)
└── 🎨 エンジニア感のあるデザイン`}
                </pre>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <h2 className="text-lg font-semibold text-blue-300 mb-2">🔀 Parallel Routes の活用</h2>
                  <p className="text-gray-300">
                    <code className="bg-gray-800 px-2 py-1 rounded">@modal</code>フォルダを使って、
                    モーダル表示を効率的に実装。URL変更なしでコンテンツオーバーレイが可能。
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-green-300 mb-2">🎯 Intercepting Routes</h2>
                  <p className="text-gray-300">
                    <code className="bg-gray-800 px-2 py-1 rounded">(.)profile</code>、
                    <code className="bg-gray-800 px-2 py-1 rounded">(.)projects</code>で
                    詳細ページをモーダルでインターセプト。UX向上とSEO両立。
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-purple-300 mb-2">🎬 アニメーションシステム</h2>
                  <p className="text-gray-300">
                    Framer Motionを活用した高品質なページ遷移とコンポーネントアニメーション。
                    モーダル表示時の適切なアニメーション制御も実装。
                  </p>
                </div>
              </div>
            </div>
          ),
        }] : [])
      ],
    }));
  };



  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-zen-maru">
            Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-zen-maru">
            フルスタック開発を中心とした実践的なプロジェクト
          </p>
        </motion.div>

        {/* VS Code風エディター */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[600px] xl:h-[700px] min-h-[500px]">
            <VSCodeEditor
              projectName="Portfolio Projects"
              files={generateProjectFiles()}
              onTabChange={setCurrentVSCodeTab}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
export interface Project {
  id: string;
  title: string;
  titleEn?: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  liveUrl?: string;
  articleUrl?: string;
  imageUrl?: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  challenges: string[];
  learnings: string[];
  architecture?: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
  };
}

export const mainProject: Project = {
  id: "jihou-g",
  title: "時報G",
  titleEn: "Jihou-G",
  description: "Discord Bot + フルスタックWeb管理画面を持つ定時メッセージアプリケーション",
  longDescription: `
    「時報G」は、一日一度設定時間にDiscordチャットへメッセージを送信するBotと、
    それを管理するフルスタックWebアプリケーションです。
    Discord OAuth認証を実装し、メッセージの管理（CRUD操作）、
    おみくじ・コインフリップなどのミニゲーム機能も搭載しています。
    
    マイクロサービス的なアーキテクチャを採用し、
    Botサーバー（fly.io）とWebアプリ（Vercel）を分離して構築しました。
  `,
  technologies: [
    "Next.js 15", "React 19", "TypeScript", "Discord.js", "Hono", 
    "Bun", "Supabase", "PostgreSQL", "Prisma", "Auth.js", 
    "shadcn/ui", "Tailwind CSS", "Vercel", "fly.io"
  ],
  category: "fullstack",
  featured: true,
  status: "completed",
  githubUrl: "https://github.com/miyabitti256/discord-bot-project",
  liveUrl: "https://jihou-bot-project.vercel.app",
  articleUrl: "https://zenn.dev/miyabitti256/articles/discordbot-web-app",
  imageUrl: "/images/jihou-g-hero.png",
  startDate: "2025-01",
  endDate: "2025-03",
  
  highlights: [
    "Discord OAuth認証の実装",
    "RESTful API設計（Hono + Bun）",
    "リアルタイムデータベース連携",
    "レスポンシブWebアプリケーション",
    "マイクロサービス的な構成",
    "定時処理とcron job実装",
    "エラーハンドリング・ログ管理"
  ],
  
  challenges: [
    "Discord APIの複雑な認証フロー理解",
    "Supabase + Prismaでのデータベース設計",
    "フロントエンド・バックエンド間の通信設計",
    "fly.ioでのBot継続稼働の実現",
    "レスポンシブUI/UXの実装"
  ],
  
  learnings: [
    "OAuth 2.0認証フローの深い理解",
    "RESTful API設計のベストプラクティス",
    "PostgreSQLとORMの実践的な使用",
    "モダンなフルスタック開発手法",
    "デプロイとインフラ管理の基礎",
    "ユーザー体験を考慮したUI設計"
  ],
  
  architecture: {
    frontend: ["Next.js 15", "React 19", "TypeScript", "shadcn/ui", "Tailwind CSS"],
    backend: ["Hono", "Bun", "Discord.js", "Auth.js"],
    database: ["Supabase", "PostgreSQL", "Prisma"],
    deployment: ["Vercel (Web)", "fly.io (Bot)", "GitHub Actions"]
  }
};

// export const subProjects: Project[] = [
//   {
//     id: "portfolio-site",
//     title: "ポートフォリオサイト",
//     titleEn: "Portfolio Site",
//     description: "就職活動用のモダンなポートフォリオサイト（現在開発中）",
//     longDescription: `
//       Next.js 15とFramer Motionを使用した、エンジニア感のあるポートフォリオサイトです。
//       VS Code風のタブUI、Git commit履歴風の学習経歴表示、package.json風のスキル表示など、
//       エンジニアらしいUIを意識して設計・実装しています。
//     `,
//     technologies: [
//       "Next.js 15", "React 19", "TypeScript", "Framer Motion", 
//       "shadcn/ui", "Tailwind CSS", "Lucide React", "Vercel"
//     ],
//     category: "frontend",
//     featured: true,
//     status: "in-progress",
//     githubUrl: "https://github.com/miyabitti256/portfolio",
//     startDate: "2025-06",
    
//     highlights: [
//       "Parallel/Intercepting Routes活用",
//       "Server Component優先設計",
//       "リッチアニメーション実装",
//       "エンジニア感のあるUI要素",
//       "レスポンシブデザイン"
//     ],
    
//     challenges: [
//       "Framer Motionでの複雑なアニメーション",
//       "Next.js 15の新機能活用",
//       "Server/Client Component設計",
//       "パフォーマンス最適化"
//     ],
    
//     learnings: [
//       "Next.js 15の高度な機能",
//       "Framer Motionによるアニメーション設計",
//       "モダンなフロントエンド設計手法",
//       "UX/UIデザインの実装"
//     ]
//   },
  
//   {
//     id: "discord-bot-basic",
//     title: "Discord Bot（基礎版）",
//     titleEn: "Discord Bot (Basic)",
//     description: "Discord.jsを学習するために作成した基本的なDiscord Bot",
//     longDescription: `
//       プログラミング学習の一環として開発したDiscord Botです。
//       基本的なコマンド処理、メッセージ送信、ユーザー情報取得などの
//       Discord APIの基礎機能を実装しました。
//     `,
//     technologies: ["Node.js", "Discord.js", "JavaScript"],
//     category: "backend",
//     featured: false,
//     status: "completed",
//     startDate: "2024-12",
//     endDate: "2025-01",
    
//     highlights: [
//       "Discord API基礎の習得",
//       "非同期処理の理解",
//       "コマンドパターンの実装"
//     ],
    
//     challenges: [
//       "Discord APIの理解",
//       "非同期処理の扱い",
//       "エラーハンドリング"
//     ],
    
//     learnings: [
//       "Discord.jsライブラリの使用方法",
//       "非同期プログラミングの基礎",
//       "APIドキュメントの読み方"
//     ]
//   }
// ];

export const allProjects = [mainProject];

// プロジェクトフィルタリング用の関数
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return allProjects;
  return allProjects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return allProjects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return allProjects.find(project => project.id === id);
};

// プロジェクトカテゴリ
export const projectCategories = [
  { id: 'all', name: '全て', nameEn: 'All' },
  { id: 'fullstack', name: 'フルスタック', nameEn: 'Full Stack' },
  { id: 'frontend', name: 'フロントエンド', nameEn: 'Frontend' },
  { id: 'backend', name: 'バックエンド', nameEn: 'Backend' },
] as const; 
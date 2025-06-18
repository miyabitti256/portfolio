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
    frontend?: string[];
    backend?: string[];
    database?: string[];
    deployment?: string[];
    design?: string[];
  };
}

export const projects: Project[] = [
  {
    id: "jihou-g",
    title: "時報G",
    titleEn: "Jihou-G",
    description: "Discord Bot + Web管理画面を持つ定時メッセージアプリケーション",
    longDescription: `
      「時報G」は、一日一度設定時間にDiscordチャンネルへメッセージを送信するBotと、
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
    imageUrl: "/images/projects/jihou-g-hero.png",
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
  },

  {
    id: "portfolio-site",
    title: "ポートフォリオサイト",
    titleEn: "Portfolio Site",
    description: "就職活動用のモダンなポートフォリオサイト",
    longDescription: `
      Next.js 15とFramer Motionを使用した、エンジニア感のあるポートフォリオサイトです。
      VS Code風のタブUI、Git commit履歴風の学習経歴表示、package.json風のスキル表示など、
      エンジニアらしいUIを意識して設計・実装しています。
      
      Parallel/Intercepting Routesを活用したモーダル表示、Server Component優先の設計、
      Markdown記事システム、レスポンシブデザインなど、モダンな技術スタックを活用しています。
    `,
    technologies: [
      "Next.js 15", "React 19", "TypeScript", "Framer Motion", 
      "shadcn/ui", "Tailwind CSS", "Lucide React", "Simple Icons",
      "Vercel", "Markdown", "Git"
    ],
    category: "frontend",
    featured: true,
    status: "in-progress",
    githubUrl: "https://github.com/miyabitti256/portfolio",
    liveUrl: "https://portfolio-miyabitti.vercel.app",
    startDate: "2025-06",
    
    highlights: [
      "Parallel/Intercepting Routes活用",
      "Server Component優先設計", 
      "リッチアニメーション実装（Framer Motion）",
      "エンジニア感のあるUI要素",
      "レスポンシブデザイン（Mobile First）",
      "Markdown記事システム",
      "VS Code風タブUI",
      "ページ遷移アニメーション"
    ],
    
    challenges: [
      "Framer Motionでの複雑なアニメーション",
      "Next.js 15の新機能（App Router）活用",
      "Server/Client Component設計",
      "パフォーマンス最適化",
      "iPhone SE対応のレスポンシブ調整",
      "モーダル表示時のアニメーション制御"
    ],
    
    learnings: [
      "Next.js 15の高度な機能",
      "Framer Motionによるアニメーション設計",
      "モダンなフロントエンド設計手法",
      "UX/UIデザインの実装",
      "アクセシビリティの基礎",
      "SEO最適化の実践"
    ],

    architecture: {
      frontend: ["Next.js 15", "React 19", "TypeScript", "Framer Motion"],
      design: ["shadcn/ui", "Tailwind CSS", "Lucide React", "Simple Icons"],
      deployment: ["Vercel", "GitHub Actions"]
    }
  },

  {
    id: "discord-bot-basic",
    title: "Discord Bot（基礎版）",
    titleEn: "Discord Bot (Basic)",
    description: "Discord.jsを学習するために作成した基本的なDiscord Bot",
    longDescription: `
      プログラミング学習の一環として開発したDiscord Botです。
      基本的なコマンド処理、メッセージ送信、ユーザー情報取得などの
      Discord APIの基礎機能を実装しました。
      
      この経験が後の「時報G」プロジェクトの基盤となりました。
    `,
    technologies: ["Node.js", "Discord.js", "JavaScript"],
    category: "backend",
    featured: false,
    status: "completed",
    startDate: "2024-12",
    endDate: "2025-01",
    
    highlights: [
      "Discord API基礎の習得",
      "非同期処理の理解",
      "コマンドパターンの実装",
      "エラーハンドリングの実装"
    ],
    
    challenges: [
      "Discord APIの理解",
      "非同期処理の扱い",
      "エラーハンドリング",
      "Bot権限の管理"
    ],
    
    learnings: [
      "Discord.jsライブラリの使用方法",
      "非同期プログラミングの基礎",
      "APIドキュメントの読み方",
      "JavaScript ES6+の実践的な使用"
    ],

    architecture: {
      backend: ["Node.js", "Discord.js", "JavaScript"]
    }
  }
];

// メインプロジェクト（後方互換性のため）
export const mainProject = projects[0];

// プロジェクトフィルタリング用の関数
export const getProjectsByCategory = (category: string) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find(project => project.id === id);
};

// allProjectsも後方互換性のため
export const allProjects = projects;

// プロジェクトカテゴリ
export const projectCategories = [
  { id: 'all', name: '全て', nameEn: 'All' },
  { id: 'fullstack', name: 'フルスタック', nameEn: 'Full Stack' },
  { id: 'frontend', name: 'フロントエンド', nameEn: 'Frontend' },
  { id: 'backend', name: 'バックエンド', nameEn: 'Backend' },
] as const; 
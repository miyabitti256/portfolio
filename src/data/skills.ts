export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-100
  levelText: string;
  description: string;
  iconName: string; // Simple Icons用のアイコン名
  color: string;
  projects?: string[];
  documentation?: string;
  inProgress?: boolean;
}

export const skills: Skill[] = [
  // Frontend Technologies
  {
    id: "javascript",
    name: "JavaScript",
    category: "frontend",
    level: 60,
    levelText: "中級",
    description: "モダンなES6+構文、非同期処理、DOM操作等を学習。Discord Bot開発からフロントエンド開発まで幅広く活用。",
    iconName: "javascript",
    color: "#f7df1e",
    projects: ["jihou-g", "discord-bot-basic"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    level: 55,
    levelText: "中級",
    description: "型安全な開発を重視し、Next.js + TypeScriptでのフルスタック開発を実践。型定義とジェネリクスを活用。",
    iconName: "typescript",
    color: "#3178c6",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    level: 50,
    levelText: "初級〜中級",
    description: "Hooks、Context API、Server/Client Componentを理解。React 19の新機能も学習中。",
    iconName: "react",
    color: "#61dafb",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: 50,
    levelText: "初級〜中級",
    description: "App Router、Server Components、Parallel/Intercepting Routes等の最新機能を学習中。",
    iconName: "nextdotjs",
    color: "#000000",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "frontend",
    level: 55,
    levelText: "中級",
    description: "レスポンシブデザイン、カスタムテーマ設定、コンポーネントライブラリとの組み合わせを学習。",
    iconName: "tailwindcss",
    color: "#06b6d4",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "frontend",
    level: 40,
    levelText: "初級",
    description: "複雑なアニメーション、ページ遷移、インタラクティブなUI要素の実装を学習中。",
    iconName: "framer",
    color: "#ff0055",
    projects: ["portfolio-site"],
    inProgress: true,
  },

  // Backend Technologies
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    level: 50,
    levelText: "中級",
    description: "Express.js、Hono等のフレームワークを使用したAPI開発。非同期処理とファイルシステム操作を学習。",
    iconName: "nodedotjs",
    color: "#339933",
    projects: ["jihou-g", "discord-bot-basic"],
  },
  {
    id: "hono",
    name: "Hono",
    category: "backend",
    level: 40,
    levelText: "初級〜中級",
    description: "軽量で高速なWeb framework。RESTful API設計、ミドルウェア、CORS設定等を学習中。",
    iconName: "hono",
    color: "#ff6600",
    projects: ["jihou-g"],
  },
  {
    id: "bun",
    name: "Bun",
    category: "backend",
    level: 50,
    levelText: "中級",
    description: "高速なJavaScript runtime。パッケージマネージャー、bundler、テストランナーとしても活用。",
    iconName: "bun",
    color: "#f9f1e1",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "discordjs",
    name: "Discord.js",
    category: "backend",
    level: 60,
    levelText: "中級",
    description: "Discord Bot開発の中核技術。コマンド処理、イベント処理、OAuth認証実装を学習。",
    iconName: "discord",
    color: "#5865f2",
    projects: ["jihou-g", "discord-bot-basic"],
  },

  // Database & ORM
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    level: 40,
    levelText: "初級",
    description: "Supabaseを通じて実践的なデータベース設計、リレーション設計を学習中。",
    iconName: "postgresql",
    color: "#336791",
    projects: ["jihou-g"],
  },
  {
    id: "prisma",
    name: "Prisma",
    category: "database",
    level: 45,
    levelText: "初級〜中級",
    description: "型安全なORM。スキーマ設計、マイグレーション、クエリ最適化を学習中。",
    iconName: "prisma",
    color: "#2d3748",
    projects: ["jihou-g"],
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "database",
    level: 40,
    levelText: "初級",
    description: "Firebase代替のオープンソースBaaS。認証、リアルタイムDB、ストレージ機能を学習中。",
    iconName: "supabase",
    color: "#3ecf8e",
    projects: ["jihou-g"],
  },

  // Tools & DevOps
  {
    id: "git",
    name: "Git",
    category: "tools",
    level: 30,
    levelText: "初級",
    description: "基本的なブランチ戦略、マージ・リベース、競合解決等を学習。チーム開発経験が無いため、ブランチ戦略やマージ方法を学習中。",
    iconName: "git",
    color: "#f05032",
    projects: ["jihou-g", "portfolio-site", "discord-bot-basic"],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "tools",
    level: 45,
    levelText: "初級〜中級", 
    description: "Next.js最適化デプロイ、環境変数管理、ドメイン設定、プレビュー機能を学習中。",
    iconName: "vercel",
    color: "#000000",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "flyio",
    name: "fly.io",
    category: "tools",
    level: 70,
    levelText: "中級",
    description: "Dockerコンテナデプロイ、継続稼働設定、ログ監視を学習中。",
    iconName: "fly",
    color: "#7b46f6",
    projects: ["jihou-g"],
  },

  // UI/Design
  {
    id: "shadcn-ui",
    name: "shadcn/ui",
    category: "frontend",
    level: 50,
    levelText: "初級〜中級",
    description: "カスタマイズ可能なコンポーネントライブラリ。テーマ設定、カスタムバリアント作成を学習中。",
    iconName: "shadcnui",
    color: "#000000",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "figma",
    name: "Figma",
    category: "design",
    level: 10,
    levelText: "初級",
    description: "基本的なデザイン作成、プロトタイプ作成、デザインシステム理解を学習中。",
    iconName: "figma",
    color: "#f24e1e",
    projects: ["portfolio-site"],
    inProgress: true,
  },
];

// 学習予定・興味のある技術
export const futureSkills = [
  {
    id: "rust",
    name: "Rust",
    category: "backend",
    description: "システムプログラミング言語。パフォーマンスと安全性を両立した言語として注目。WebAssembly等での活用も視野。",
    iconName: "rust",
    color: "#ce422b",
  },
  {
    id: "go",
    name: "Go",
    category: "backend", 
    description: "マイクロサービス、CLI開発に優れた言語。Dockerやクラウドネイティブ技術との親和性が高い。",
    iconName: "go",
    color: "#00add8",
  },
  {
    id: "aws",
    name: "AWS",
    category: "tools",
    description: "クラウドコンピューティングプラットフォーム。EC2、S3、Lambda等の基本サービスから学習予定。",
    iconName: "amazonaws",
    color: "#ff9900",
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    description: "コンテナ化技術。開発環境統一、デプロイ効率化、マイクロサービス構築のために習得予定。",
    iconName: "docker",
    color: "#2496ed",
  },
];

// スキルカテゴリ
export const skillCategories = [
  { id: 'all', name: '全て', nameEn: 'All' },
  { id: 'frontend', name: 'フロントエンド', nameEn: 'Frontend' },
  { id: 'backend', name: 'バックエンド', nameEn: 'Backend' },
  { id: 'database', name: 'データベース', nameEn: 'Database' },
  { id: 'tools', name: 'ツール・DevOps', nameEn: 'Tools & DevOps' },
  { id: 'design', name: 'デザイン', nameEn: 'Design' },
] as const;

// スキルフィルタリング関数
export const getSkillsByCategory = (category: string) => {
  if (category === 'all') return skills;
  return skills.filter(skill => skill.category === category);
};

export const getSkillLevel = (level: number): string => {
  if (level >= 60) return '中級';
  if (level >= 40) return '初級〜中級';
  if (level >= 25) return '初級';
  return '学習中';
};

export const getSkillColor = (level: number): string => {
  if (level >= 60) return 'bg-blue-500';
  if (level >= 40) return 'bg-green-500'; 
  if (level >= 25) return 'bg-yellow-500';
  return 'bg-gray-400';
};
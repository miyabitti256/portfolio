export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number; // 1-100
  levelText: string;
  description: string;
  icon?: string;
  color: string;
  startDate: string;
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
    level: 85,
    levelText: "上級",
    description: "モダンなES6+構文、非同期処理、DOM操作等を習得。Discord Bot開発からフロントエンド開発まで幅広く活用。",
    color: "#f7df1e",
    startDate: "2024-10",
    projects: ["jihou-g", "discord-bot-basic"],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    level: 80,
    levelText: "上級",
    description: "型安全な開発を重視し、Next.js + TypeScriptでのフルスタック開発を実践。型定義とジェネリクスを活用。",
    color: "#3178c6",
    startDate: "2024-11",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "react",
    name: "React",
    category: "frontend",
    level: 75,
    levelText: "中級〜上級",
    description: "Hooks、Context API、Server/Client Componentを理解。React 19の新機能も活用した開発を実践。",
    color: "#61dafb",
    startDate: "2024-12",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "frontend",
    level: 75,
    levelText: "中級〜上級",
    description: "App Router、Server Components、Parallel/Intercepting Routes等の最新機能を活用したモダンな開発を実践。",
    color: "#000000",
    startDate: "2025-01",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    category: "frontend",
    level: 80,
    levelText: "上級",
    description: "レスポンシブデザイン、カスタムテーマ設定、コンポーネントライブラリとの組み合わせを習得。",
    color: "#06b6d4",
    startDate: "2024-12",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "framer-motion",
    name: "Framer Motion",
    category: "frontend",
    level: 65,
    levelText: "中級",
    description: "複雑なアニメーション、ページ遷移、インタラクティブなUI要素の実装を学習中。",
    color: "#ff0055",
    startDate: "2025-06",
    projects: ["portfolio-site"],
    inProgress: true,
  },

  // Backend Technologies
  {
    id: "nodejs",
    name: "Node.js",
    category: "backend",
    level: 70,
    levelText: "中級〜上級",
    description: "Express.js、Hono等のフレームワークを使用したAPI開発。非同期処理とファイルシステム操作を習得。",
    color: "#339933",
    startDate: "2024-12",
    projects: ["jihou-g", "discord-bot-basic"],
  },
  {
    id: "hono",
    name: "Hono",
    category: "backend",
    level: 65,
    levelText: "中級",
    description: "軽量で高速なWeb framework。RESTful API設計、ミドルウェア、CORS設定等を実装。",
    color: "#ff6600",
    startDate: "2025-01",
    projects: ["jihou-g"],
  },
  {
    id: "bun",
    name: "Bun",
    category: "backend",
    level: 60,
    levelText: "中級",
    description: "高速なJavaScript runtime。パッケージマネージャー、bundler、テストランナーとしても活用。",
    color: "#000000",
    startDate: "2025-01",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "discordjs",
    name: "Discord.js",
    category: "backend",
    level: 75,
    levelText: "中級〜上級",
    description: "Discord Bot開発の中核技術。コマンド処理、イベント処理、OAuth認証実装を習得。",
    color: "#5865f2",
    startDate: "2024-12",
    projects: ["jihou-g", "discord-bot-basic"],
  },

  // Database & ORM
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "database",
    level: 65,
    levelText: "中級",
    description: "Supabaseを通じて実践的なデータベース設計、リレーション設計、インデックス最適化を学習。",
    color: "#336791",
    startDate: "2025-01",
    projects: ["jihou-g"],
  },
  {
    id: "prisma",
    name: "Prisma",
    category: "database",
    level: 70,
    levelText: "中級〜上級",
    description: "型安全なORM。スキーマ設計、マイグレーション、クエリ最適化を実践。",
    color: "#2d3748",
    startDate: "2025-01",
    projects: ["jihou-g"],
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "database",
    level: 65,
    levelText: "中級",
    description: "Firebase代替のオープンソースBaaS。認証、リアルタイムDB、ストレージ機能を活用。",
    color: "#3ecf8e",
    startDate: "2025-01",
    projects: ["jihou-g"],
  },

  // Tools & DevOps
  {
    id: "git",
    name: "Git",
    category: "tools",
    level: 75,
    levelText: "中級〜上級",
    description: "ブランチ戦略、マージ・リベース、競合解決等を理解。GitHub ActionsでのCI/CD構築経験。",
    color: "#f05032",
    startDate: "2024-10",
    projects: ["jihou-g", "portfolio-site", "discord-bot-basic"],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "tools",
    level: 70,
    levelText: "中級〜上級", 
    description: "Next.js最適化デプロイ、環境変数管理、ドメイン設定、プレビュー機能を活用。",
    color: "#000000",
    startDate: "2025-01",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "flyio",
    name: "fly.io",
    category: "tools",
    level: 55,
    levelText: "初級〜中級",
    description: "Dockerコンテナデプロイ、継続稼働設定、ログ監視を実践。",
    color: "#7b46f6",
    startDate: "2025-02",
    projects: ["jihou-g"],
  },

  // UI/Design
  {
    id: "shadcn-ui",
    name: "shadcn/ui",
    category: "frontend",
    level: 75,
    levelText: "中級〜上級",
    description: "カスタマイズ可能なコンポーネントライブラリ。テーマ設定、カスタムバリアント作成を習得。",
    color: "#000000",
    startDate: "2025-01",
    projects: ["jihou-g", "portfolio-site"],
  },
  {
    id: "figma",
    name: "Figma",
    category: "design",
    level: 45,
    levelText: "初級",
    description: "基本的なデザイン作成、プロトタイプ作成、デザインシステム理解。",
    color: "#f24e1e",
    startDate: "2025-05",
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
    color: "#ce422b",
    plannedStart: "2025-08",
  },
  {
    id: "go",
    name: "Go",
    category: "backend", 
    description: "マイクロサービス、CLI開発に優れた言語。Dockerやクラウドネイティブ技術との親和性が高い。",
    color: "#00add8",
    plannedStart: "2025-09",
  },
  {
    id: "aws",
    name: "AWS",
    category: "tools",
    description: "クラウドコンピューティングプラットフォーム。EC2、S3、Lambda等の基本サービスから学習予定。",
    color: "#ff9900",
    plannedStart: "2025-10",
  },
  {
    id: "docker",
    name: "Docker",
    category: "tools",
    description: "コンテナ化技術。開発環境統一、デプロイ効率化、マイクロサービス構築のために習得予定。",
    color: "#2496ed",
    plannedStart: "2025-07",
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
  if (level >= 80) return '上級';
  if (level >= 60) return '中級';
  if (level >= 40) return '初級';
  return '学習中';
};

export const getSkillColor = (level: number): string => {
  if (level >= 80) return 'bg-green-500';
  if (level >= 60) return 'bg-blue-500'; 
  if (level >= 40) return 'bg-yellow-500';
  return 'bg-gray-400';
};
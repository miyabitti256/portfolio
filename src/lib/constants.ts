// サイト設定
export const SITE_CONFIG = {
  name: "miyabitti's Portfolio",
  title: "miyabitti - Web Developer Portfolio",
  description: "学習と創造を続けるWeb開発者のポートフォリオサイト。JavaScript/TypeScript、React/Next.js、フルスタック開発を学習中。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  author: "miyabitti",
  keywords: [
    "miyabitti",
    "ポートフォリオ",
    "Web開発者",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "フルスタック開発",
    "Discord Bot",
  ],
} as const;

// ナビゲーション設定
export const NAVIGATION_ITEMS = [
  { id: "home", label: "ホーム", href: "#home" },
  { id: "about", label: "自己紹介", href: "#about" },
  { id: "skills", label: "スキル", href: "#skills" },
  { id: "projects", label: "作品", href: "#projects" },
  { id: "contact", label: "連絡先", href: "#contact" },
] as const;

// アニメーション設定
export const ANIMATION_CONFIG = {
  // Hero Section - リッチアニメーション
  hero: {
    typewriter: {
      letterDelay: 0.05,
      sentenceDelay: 1.5,
    },
    particle: {
      count: 50,
      speed: 1,
      fadeDistance: 100,
    },
    floatingIcon: {
      amplitude: 10,
      duration: 4,
    },
  },
  
  // セクション - 控えめアニメーション
  section: {
    fadeInDelay: 0.1,
    staggerDelay: 0.1,
    duration: 0.6,
  },
  
  // ページ遷移
  pageTransition: {
    duration: 0.6,
    ease: "easeOut",
    terminalLoading: {
      stepDelay: 150,
      completionDelay: 300,
      messages: [
        '$ cd /portfolio',
        '$ npm run build',
        '$ Loading components...',
        '$ Rendering page...',
        '$ ✓ Build completed',
      ],
    },
  },
  
  // ホバーエフェクト
  hover: {
    cardScale: 1.02,
    cardY: -5,
    buttonScale: 1.05,
    iconRotate: 15,
    duration: 0.2,
  },
} as const;

// レスポンシブ設定
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// カラーパレット（CSS変数に対応）
export const COLORS = {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
  },
  engineer: {
    terminal: "#1a1a1a",
    code: "#2d3748",
    syntax: {
      keyword: "#3b82f6",
      string: "#10b981",
      comment: "#6b7280",
      function: "#8b5cf6",
    },
  },
} as const;

// パフォーマンス設定
export const PERFORMANCE_CONFIG = {
  // Intersection Observer
  observerOptions: {
    threshold: 0.1,
    rootMargin: "-10% 0px -10% 0px",
  },
  
  // 画像最適化
  imageOptions: {
    quality: 85,
    formats: ["webp", "jpg"],
  },
  
  // デバウンス・スロットル
  debounceDelay: 300,
  throttleDelay: 100,
  
  // アニメーション
  reducedMotion: true, // prefers-reduced-motionを考慮
} as const;

// ソーシャルリンク
export const SOCIAL_LINKS = {
  github: {
    name: "GitHub",
    username: "@miyabitti256",
    url: "https://github.com/miyabitti256",
    icon: "github",
    color: "#333",
  },
  twitter: {
    name: "Twitter",
    username: "@miyabitti0256",
    url: "https://twitter.com/miyabitti0256",
    icon: "twitter",
    color: "#1da1f2",
  },
  discord: {
    name: "Discord",
    username: "@miyabitti256",
    icon: "discord",
    color: "#5865f2",
  },
  zenn: {
    name: "Zenn",
    username: "@miyabitti256",
    url: "https://zenn.dev/miyabitti256",
    icon: "zenn",
    color: "#3ea8ff",
  },
} as const;

// エラーメッセージ
export const ERROR_MESSAGES = {
  generic: "エラーが発生しました。しばらく時間をおいてから再度お試しください。",
  network: "ネットワークエラーが発生しました。接続を確認してください。",
  notFound: "お探しのページが見つかりませんでした。",
  serverError: "サーバーエラーが発生しました。",
} as const;

// 開発環境設定
export const DEV_CONFIG = {
  isDevelopment: process.env.NODE_ENV === "development",
  showDebugInfo: process.env.NODE_ENV === "development",
  enablePerformanceMonitoring: process.env.NODE_ENV === "development",
  logLevel: process.env.NODE_ENV === "development" ? "debug" : "error",
} as const;

// メタデータ設定
export const METADATA = {
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    site: "@miyabitti0256",
    creator: "@miyabitti0256",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
} as const;

// 型定義のエクスポート
export type NavigationItem = (typeof NAVIGATION_ITEMS)[number];
export type SocialLink = (typeof SOCIAL_LINKS)[keyof typeof SOCIAL_LINKS];
export type BreakpointKey = keyof typeof BREAKPOINTS; 
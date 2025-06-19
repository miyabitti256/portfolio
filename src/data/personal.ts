export const personalInfo = {
  name: "miyabitti",
  nameJa: "みやびっち",
  title: "ニート",
  subtitle: "趣味でプログラミングをしている者だ(現場未経験)",
  description: "WordPressから始まり、JavaScript/TypeScriptの世界に魅力を感じ、現代的な技術スタックでのフルスタック開発を学んでいます。",
  location: "Japan",

  // Hero Section用のメッセージ
  heroMessages: {
    primary: "学習と創造を続けるWeb開発者になりたい人",
    secondary: "技術で価値を生み出すことを目指しています",
    alternative: "未経験からスタートした学習の軌跡",
  },

  // 学習経緯
  learningJourney: [
    {
      id: "wordpress-start",
      period: "きっかけ",
      title: "WordPressサイト制作への挑戦",
      description: "プログラミングへの興味から知り合いにWordPressサイト制作を依頼されるも、PHPよりもJavaScriptに魅力を感じる",
      status: "completed",
      color: "#f59e0b"
    },
    {
      id: "js-learning",
      period: "基礎学習",
      title: "JavaScript学習開始",
      description: "PHP(WordPress)に興味を持てずJavaScriptから学習をスタート。モダンな開発環境と構文に魅力を感じる",
      status: "completed",
      color: "#10b981"
    },
    {
      id: "ts-learning",
      period: "TypeScript学習",
      title: "TypeScript学習",
      description: "JavaScriptの型安全性を高めるためTypeScriptを学習。型安全な開発を実現",
      status: "completed",
      color: "#10b981"
    },
    {
      id: "react-nextjs",
      period: "フレームワーク習得",
      title: "React/Next.js習得",
      description: "モダンなフロントエンド開発のためReact/Next.jsを学習。コンポーネント指向の開発手法を習得",
      status: "completed",
      color: "#3b82f6"
    },
    {
      id: "discord-bot",
      period: "実践プロジェクト",
      title: "Discord Bot開発",
      description: "学習したスキルを活かし、Discord.jsを使用したBotを開発。Bot開発の基礎を学ぶ",
      status: "completed",
      color: "#8b5cf6"
    },
    {
      id: "fullstack-app",
      period: "フルスタック開発",
      title: "時報G - フルスタックアプリ開発",
      description: "Discord Bot + Hono API + Next.js + Supabaseを組み合わせたフルスタック構成でWebアプリケーションを開発。フロントエンドからバックエンドまでを学ぶ",
      status: "completed",
      color: "#06b6d4"
    },
    {
      id: "portfolio",
      period: "現在",
      title: "ポートフォリオサイト開発",
      description: "学習成果をまとめ、技術力をアピールするためのポートフォリオサイトを開発中",
      status: "current",
      color: "#f97316"
    }
  ],

  // 連絡先・SNS
  contacts: {
    github: {
      username: "miyabitti256",
      url: "https://github.com/miyabitti256",
      display: "@miyabitti256"
    },
    twitter: {
      username: "miyabitti0256",
      url: "https://twitter.com/miyabitti0256",
      display: "@miyabitti0256"
    },
    discord: {
      username: "miyabitti256",
      url: "https://discord.com/users/686898398305189891",
      display: "@miyabitti256"
    },
    zenn: {
      username: "miyabitti256",
      url: "https://zenn.dev/miyabitti256",
      display: "@miyabitti256"
    }
  },

  // 目標・価値観
  goals: {
    immediate: "Web系エンジニアとして就職",
    longTerm: "技術で課題を解決し、価値を生み出す開発者になること",
    interests: ["フルスタック開発", "モダンな技術スタック", "UI/UX", "パフォーマンス最適化"],
    futureInterests: ["Rust", "Go", "クラウドアーキテクチャ"]
  },

  // アピールポイント
  strengths: [
    "学習意欲の高さ - 新しい技術のキャッチアップを積極的に行う",
    "実践経験 - 規模は小さいが実際にアプリケーションを開発",
    "現代的技術スタック - 最新のベストプラクティスに基づく開発",
  ]
};

export type PersonalInfo = typeof personalInfo;

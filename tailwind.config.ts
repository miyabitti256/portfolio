import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // プロジェクトのメインカラーパレット（淡い青系・明度40%〜100%）
        primary: {
          50: '#f0f9ff',   // 明度100% - 最も淡い
          100: '#e0f2fe',  // 明度95%
          200: '#bae6fd',  // 明度85%
          300: '#7dd3fc',  // 明度75%
          400: '#38bdf8',  // 明度65%
          500: '#0ea5e9',  // 明度55%
          600: '#0284c7',  // 明度45%
          700: '#0369a1',  // 明度40% - 最も濃い
          800: '#075985',  // ダーク用
          900: '#0c4a6e',  // ダーク用
          DEFAULT: '#0ea5e9',
          foreground: '#ffffff',
        },
        // セカンダリカラー（補完色）
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9', 
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          DEFAULT: '#f1f5f9',
          foreground: '#0f172a',
        },
        // エンジニア感のある色
        engineer: {
          terminal: '#1a1a1a',
          code: '#2d3748',
          syntax: {
            keyword: '#3b82f6',
            string: '#10b981',
            comment: '#6b7280',
            function: '#8b5cf6',
          },
        },
        // shadcn/ui のカスタムカラー（プロジェクトパレットに合わせて調整）
        background: '#ffffff',
        foreground: '#0f172a',
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b',
        },
        accent: {
          DEFAULT: '#e0f2fe',
          foreground: '#0369a1',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#0ea5e9',
        // プログレスバー用カラー
        progress: {
          bg: '#f1f5f9',
          fill: '#0ea5e9',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
      fontFamily: {
        'zen-maru': ['Zen Maru Gothic', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'terminal-blink': 'terminal-blink 1s infinite',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
      },
      keyframes: {
        'terminal-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};

export default config; 
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.jsのルールを継承
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  
  // カスタムルール
  {
    rules: {
      // 未使用変数・インポート
      "@typescript-eslint/no-unused-vars": [
        "error",
        { 
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ],
      "no-unused-vars": "off", // TypeScript版を使用
      
      // any型の使用を禁止
      "@typescript-eslint/no-explicit-any": "error",
      
      // console使用は警告
      "no-console": "warn",
      
      // 基本的なベストプラクティス
      "prefer-const": "error",
      "no-var": "error",
      "no-debugger": "error",
      "no-duplicate-imports": "error",
      "no-unreachable": "error",
      
      // React関連
      "react/no-unescaped-entities": "off", // JSON文字列内での引用符を許可
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-key": "error",
      "react/self-closing-comp": "error",
      
      // Next.js関連
      "@next/next/no-img-element": "error",
      
      // スタイル関連（基本的なもののみ）
      "eol-last": ["error", "always"],
      "no-trailing-spaces": "error",
      "semi": ["error", "always"],
    },
  },
  
  // 除外設定
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "dist/**",
      "build/**",
      "coverage/**",
      ".env*",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
      "public/**",
    ],
  },
];

export default eslintConfig;

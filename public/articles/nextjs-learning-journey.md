---
title: "Next.js学習の軌跡 - WordPress開発者からモダンWeb開発へ"
description: "WordPress開発からNext.js、React、TypeScriptへの転向体験記。学習過程での躓きや発見、そして現代的なWeb開発への理解を深める過程を詳しく記録しました。"
publishedAt: "2024-11-20"
updatedAt: "2024-12-10"
tags: ["Next.js", "React", "TypeScript", "学習記録", "キャリアチェンジ"]
featured: true
---

# Next.js学習の軌跡 - WordPress開発者からモダンWeb開発へ

## 学習の背景

Web開発を始めた当初、WordPressでのサイト制作から入りました。しかし、PHPでの開発にあまり興味を持てず、「もっとモダンな技術で開発してみたい」と感じるようになりました。

そんな中で出会ったのが **JavaScript/TypeScript** の世界でした。

## なぜNext.jsを選んだのか

### JavaScriptから始めた理由

- **フロントエンドとバックエンドの両方で使える**
- **豊富なエコシステム**
- **学習リソースが充実している**

### Next.jsに魅力を感じたポイント

1. **React基盤**: コンポーネント思考の開発
2. **フルスタック対応**: API Routesでバックエンド処理も可能
3. **パフォーマンス**: 標準でSSG/SSRサポート
4. **開発体験**: Hot ReloadやTypeScript対応

## 学習過程で躓いたポイント

### 1. React Hooksの理解

```jsx
// 最初は理解が難しかった
const [count, setCount] = useState(0);

useEffect(() => {
  // いつ実行されるの？
  console.log('Count updated:', count);
}, [count]); // 依存配列って何？
```

**解決方法**: 
- 公式ドキュメントを読み込む
- 小さなプロジェクトで実践練習
- コミュニティの記事を参考にする

### 2. TypeScriptの型システム

```typescript
// 型定義に慣れるまで時間がかかった
interface User {
  id: number;
  name: string;
  email?: string; // オプショナルって？
}

// ジェネリクスは特に混乱した
function fetchData<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json());
}
```

**学習のコツ**:
- 既存のライブラリの型定義を読む
- TypeScript Playgroundで試行錯誤
- エラーメッセージをしっかり読む

### 3. Next.js App Routerの概念

```typescript
// Pages Routerとの違いに混乱
// app/page.tsx と pages/index.tsx の違いは？

// Server ComponentとClient Componentの使い分け
'use client'; // いつ必要？

export default function Component() {
  // これはサーバーで実行される？クライアントで実行される？
}
```

## 学習方法と使用したリソース

### 1. 公式ドキュメント

- **React公式**: https://react.dev/
- **Next.js公式**: https://nextjs.org/docs
- **TypeScript公式**: https://www.typescriptlang.org/docs/

### 2. 実践プロジェクト

1. **ToDoアプリ**: React Hooksの基礎練習
2. **ポートフォリオサイト**: SSG/SSRの理解
3. **Discord Bot管理画面**: フルスタック開発
4. **現在のポートフォリオ**: 最新機能の活用

### 3. コミュニティ・学習サイト

- **Zenn**: 日本語の良質な技術記事
- **Qiita**: 実践的なTips
- **GitHub**: オープンソースコードの研究

## 現在のスキルレベル

### 習得済み
- ✅ React基礎（JSX、コンポーネント、Hooks）
- ✅ Next.js基礎（ルーティング、SSG/SSR）
- ✅ TypeScript基礎（型システム、インターfaces）
- ✅ Tailwind CSS
- ✅ Git/GitHub

### 学習中
- 🔄 Next.js App Router（Parallel Routes、Intercepting Routes）
- 🔄 サーバーアクション
- 🔄 パフォーマンス最適化
- 🔄 テスト（Jest、Testing Library）

### 今後学習予定
- 📝 Rust（システムプログラミング）
- 📝 Go（バックエンド開発）
- 📝 Docker/Kubernetes（インフラ）
- 📝 AWS/GCP（クラウド）

## 学習を通じて感じたこと

### 1. 継続学習の重要性

Web開発の技術は日進月歩です。特にJavaScriptエコシステムは変化が激しく、継続的な学習が必要だと感じました。

### 2. 実践の価値

ドキュメントを読むだけでなく、実際にプロジェクトを作ることで理解が深まりました。

### 3. コミュニティの力

困った時にStack OverflowやDiscordコミュニティで質問することで、多くの問題を解決できました。

## これから学習を始める方へのアドバイス

### 1. 基礎をしっかりと

- まずはJavaScript（ES6+）をしっかり理解する
- Reactの公式チュートリアルから始める
- TypeScriptは段階的に導入する

### 2. 小さなプロジェクトから

```javascript
// 最初はシンプルなものから
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

// 徐々に複雑な機能を追加
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 3. エラーを恐れない

エラーメッセージは学習の大きな手がかりです。エラーが出たら：

1. まずエラーメッセージをしっかり読む
2. 公式ドキュメントで該当箇所を調べる
3. Stack Overflowで類似の問題を検索
4. 最後の手段として質問する

## まとめ

WordPress開発からNext.js開発への転向は、決して簡単ではありませんでした。しかし、現代的な開発手法を学ぶことで、より効率的で保守性の高いアプリケーションを作れるようになりました。

**特に価値を感じているポイント**:
- **型安全性**: TypeScriptによるバグの早期発見
- **コンポーネント思考**: 再利用可能なUIの作成
- **モダンなツール**: 開発効率の大幅向上

これからも継続的に学習を続け、より良いWebアプリケーションを作っていきたいと思います！

---

**学習リソース**:
- [React公式ドキュメント](https://react.dev/)
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

何か質問があれば、お気軽にコメントください！ 
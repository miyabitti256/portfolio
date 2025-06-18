---
title: "Discord Bot「時報G」開発記録 - フルスタック開発への挑戦"
description: "Discord Bot と Web管理画面を開発した際の技術的な挑戦と学習の記録。Next.js、Supabase、Discord.jsを使用したフルスタック開発について詳しく解説します。"
publishedAt: "2024-12-15"
tags: ["Discord Bot", "Next.js", "TypeScript", "Supabase", "フルスタック"]
featured: true
---

# Discord Bot「時報G」開発記録

## はじめに

こんにちは！今回は、私が開発したDiscord Bot「時報G」について、開発過程で学んだことや技術的な挑戦について記録したいと思います。

このプロジェクトは私にとって初めてのフルスタック開発であり、多くの学びがありました。

## プロジェクト概要

**時報G**は、設定された時間にDiscordチャンネルにメッセージを送信するBotです。単純な時報機能だけでなく、Web管理画面からメッセージの管理ができるのが特徴です。

### 主な機能

- **定時メッセージ送信**: 設定時間に自動でメッセージ配信
- **Web管理画面**: ブラウザからメッセージの追加・編集・削除
- **Discord OAuth認証**: Discordアカウントでのログイン
- **ミニゲーム機能**: おみくじ、コインフリップなど

## 技術スタック

### Backend
- **Discord.js**: Discord Bot開発
- **Hono**: API Server（軽量フレームワーク）
- **Bun**: JavaScript/TypeScriptランタイム

### Database
- **Supabase**: PostgreSQLベースのBaaS
- **Prisma**: TypeScript対応のORM

### Frontend
- **Next.js 14**: App Router使用
- **Auth.js**: Discord OAuth認証
- **shadcn/ui**: UIコンポーネント

### Deploy
- **Vercel**: フロントエンド
- **fly.io**: Botサーバー

## 開発で学んだこと

### 1. 認証・認可の実装

Discord OAuthを使った認証機能の実装は、初めての経験でした。

```typescript:lib/auth.ts
// Discord OAuth設定例
import Discord from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  // ... その他の設定
};
```

特に学んだポイント：
- OAuthフローの理解
- セッション管理の重要性
- 環境変数の適切な管理

### 2. データベース設計

Prismaを使ったデータベース設計では、リレーショナルな関係性を意識しました。

```prisma:schema.prisma
model Server {
  id        String     @id
  name      String
  messages  Message[]
  createdAt DateTime   @default(now())
}

model Message {
  id       String  @id @default(cuid())
  content  String
  hour     Int
  minute   Int
  server   Server  @relation(fields: [serverId], references: [id])
  serverId String
}
```

### 3. API設計

RESTfulなAPI設計を心がけました。

```typescript:api/messages.ts
// Hono API例
app.get('/api/messages/:serverId', async (c) => {
  const serverId = c.req.param('serverId');
  const messages = await prisma.message.findMany({
    where: { serverId },
    orderBy: [{ hour: 'asc' }, { minute: 'asc' }],
  });
  return c.json(messages);
});
```

## 技術的な挑戦

### 1. マイクロサービス的なアーキテクチャ

フロントエンドとBotサーバーを分離することで、関心の分離を実現しました。

### 2. エラーハンドリング

DiscordのAPI制限やネットワークエラーに対する適切な処理を学びました。

```typescript:bot/error-handler.ts
// Discord API制限対応
try {
  await channel.send(message);
} catch (error) {
  if (error.code === 50013) {
    console.error('権限エラー: メッセージ送信権限がありません');
  }
  // 適切なエラーログ出力とリトライ処理
}
```

### 3. デプロイメント

複数のサービスを協調させるデプロイメントを経験しました。

```bash:deploy.sh
#!/bin/bash
# フロントエンドデプロイ
vercel --prod

# Botサーバーデプロイ  
flyctl deploy

# 環境変数の確認
echo "デプロイ完了"
```

## パッケージ構成

プロジェクトの依存関係は以下のようになっています：

```json:package.json
{
  "name": "jihou-bot-project",
  "version": "1.0.0",
  "dependencies": {
    "next": "^14.0.0",
    "discord.js": "^14.11.0",
    "hono": "^3.0.0",
    "@supabase/supabase-js": "^2.0.0",
    "prisma": "^5.0.0",
    "next-auth": "^4.22.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "bot": "bun run bot/index.ts"
  }
}
```

## 今後の改善点

1. **パフォーマンス最適化**: データベースクエリの最適化
2. **機能拡張**: より多様なゲーム機能の追加
3. **UI/UX改善**: ユーザビリティの向上
4. **テスト追加**: 単体テスト・統合テストの実装

## まとめ

この「時報G」プロジェクトを通じて、フルスタック開発の基礎を学ぶことができました。特に：

- **現代的な技術スタックの習得**
- **認証・認可の実装経験**
- **データベース設計の理解**
- **API設計・実装のスキル**

これらの経験は、今後のWeb開発において大きな財産になると感じています。

---

**プロジェクトリンク**:
- [ライブサイト](https://jihou-bot-project.vercel.app)
- [技術記事（Zenn）](https://zenn.dev/miyabitti256/articles/discordbot-web-app)

何かご質問があれば、お気軽にお声がけください！ 
export default function ReadmeMd() {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed">
      <h1 className="text-2xl font-bold text-white mb-6">クソしょうもないDiscord BotをWebから操作できるようにした話</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🎯 プロジェクト概要</h2>
        <p className="text-gray-300 mb-4">
          身内サーバー用に作った「しょうもないDiscord Bot」を、ブラウザから操作できるように
          フルスタック開発で拡張したプロジェクト。完全無料（fly.ioのみクレカ必要）で構築。
        </p>
        <div className="bg-gray-800 p-3 rounded mt-3">
          <p className="text-yellow-300 text-sm">
            🌐 デプロイ済みサイト: <a href="https://jihou-bot-project.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">jihou-bot-project.vercel.app</a>
          </p>
          <p className="text-gray-400 text-xs mt-1">
            ※ Botが参加しているサーバーのユーザーのみログイン可能
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">✨ 実装済み機能</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">🤖 Discord Bot機能</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 定時メッセージ送信（時報システム）</li>
              <li>• スラッシュコマンド対応</li>
              <li>• ミニゲーム（おみくじ・コインフリップ）</li>
              <li>• イベントハンドリング</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">🌐 Web管理機能</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Discord OAuth認証</li>
              <li>• メッセージ管理（CRUD操作）</li>
              <li>• Bot設定の Web UI</li>
              <li>• レスポンシブデザイン</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">🔗 Bot-Web連携</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 同一プロセスでAPI server起動</li>
              <li>• リアルタイムデータ同期</li>
              <li>• サービス層による状態管理</li>
              <li>• 外部からのHTTPリクエスト対応</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🛠️ 技術スタック</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold text-green-300 mb-2">Frontend (Next.js)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Next.js v15</li>
              <li>NextAuth（Discord OAuth）</li>
              <li>Tailwind CSS v4</li>
              <li>Shadcn UI</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold text-green-300 mb-2">Backend (Bot側)</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Bun runtime</li>
              <li>Hono（軽量API server）</li>
              <li>Discord.js v14</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold text-green-300 mb-2">Database & ORM</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Supabase（PostgreSQL）</li>
              <li>Prisma ORM</li>
              <li>型安全なクエリ</li>
              <li>マイグレーション管理</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold text-green-300 mb-2">Infrastructure</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Vercel（Frontend）</li>
              <li>fly.io（Bot server）</li>
              <li>GitHub連携自動デプロイ</li>
              <li>Docker container</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🏗️ システム構成</h2>
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-300 text-sm mb-3">
            Discord Botと同時にAPIサーバーを立てて、WebアプリからBot機能を操作する構成。
            DB操作は全てサービス層で行い、状態の一貫性を保持。
          </p>
          <div className="text-xs text-gray-400">
            <p>Webアプリ(Next.js) ↔ APIエンドポイント(Hono) ↔ サービス層 ↔ DB(Supabase)</p>
            <p className="ml-8">↕</p>
            <p className="ml-4">Botクライアント(Discord.js) ↔ Discord</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">📊 開発の振り返り</h2>
        <div className="space-y-3">
          <div className="bg-green-900/30 p-3 rounded border border-green-500/30">
            <h4 className="font-semibold text-green-300 mb-2">🎉 うまくいったこと</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• フルスタック開発の全体像を体験できた</li>
              <li>• 最新フレームワークの学習曲線が思ったより緩やか</li>
              <li>• AIの支援でJS/TSの開発がかなり効率的</li>
              <li>• GitHub連携の自動デプロイで開発体験が向上</li>
            </ul>
          </div>

          <div className="bg-yellow-900/30 p-3 rounded border border-yellow-500/30">
            <h4 className="font-semibold text-yellow-300 mb-2">⚠️ 課題と学び</h4>
            <p className="text-gray-300 text-sm">
              Bot-Web間の状態同期やエラーハンドリングなど、実際の運用で見えてくる課題も多かった。
              小規模なら SQLite で十分だったかもしれない。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🔗 関連リンク</h2>
        <div className="space-y-2 text-sm">
          <p><span className="text-yellow-300">🌐 Webアプリ:</span> <a href="https://jihou-bot-project.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">jihou-bot-project.vercel.app</a></p>
          <p><span className="text-yellow-300">📝 技術記事:</span> <a href="https://zenn.dev/miyabitti256/articles/discordbot-web-app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">zenn.dev/miyabitti256/articles/discordbot-web-app</a></p>
          <p><span className="text-yellow-300">💻 GitHub:</span> <a href="https://github.com/miyabitti256/jihou-bot-project" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">miyabitti256/jihou-bot-project</a></p>
        </div>
      </div>
    </div>
  );
}

export default function ReadmeMd() {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed">
      <h1 className="text-2xl font-bold text-white mb-6">Portfolio Website - Modern Tech Stack</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🎯 プロジェクト概要</h2>
        <p className="text-gray-300 mb-4">
          未経験からAIや教材を活用して、最新のNext.js 15で開発したポートフォリオサイト。
          VSCode風のエンジニア感あるUIと、丁寧に作り込んだアニメーションで技術力をアピール。
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">✨ 実装済み機能</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">🎨 アニメーション豊富なUI</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Framer Motionによる滑らかなページ遷移</li>
              <li>• パーティクル背景と浮遊エフェクト</li>
              <li>• ホバー・クリック時のインタラクションアニメーション</li>
              <li>• レスポンシブ対応のモーダルアニメーション</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">💻 VSCode風エディターUI</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• プロジェクトファイル構造の可視化</li>
              <li>• タブ機能付きファイルエディター</li>
              <li>• リサイズ可能なサイドバー</li>
              <li>• フォルダの展開・折りたたみ機能</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">🛣️ Next.js 15高度機能</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Parallel Routes でモーダル表示</li>
              <li>• Intercepting Routes でプロフィール詳細</li>
              <li>• Server/Client Components の適切な使い分け</li>
              <li>• App Router によるファイルベースルーティング</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">📝 ブログ・記事機能</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Markdownファイルの動的読み込み</li>
              <li>• シンタックスハイライト対応</li>
              <li>• 読み取り時間の自動計算</li>
              <li>• タグ・カテゴリー機能</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🛠️ 技術スタック</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold text-green-300 mb-2">Core Framework</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Next.js 15.3.3 (App Router)</li>
              <li>React 19</li>
              <li>TypeScript 5</li>
              <li>Tailwind CSS 4</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold text-green-300 mb-2">UI & Animation</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Framer Motion 12</li>
              <li>Radix UI (Dialog, Progress)</li>
              <li>Lucide React (アイコン)</li>
              <li>Simple Icons (スキルアイコン)</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold text-green-300 mb-2">Content Management</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>gray-matter (Frontmatter解析)</li>
              <li>remark (Markdown処理)</li>
              <li>rehype-highlight (コードハイライト)</li>
              <li>class-variance-authority (スタイル管理)</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="font-semibold text-green-300 mb-2">Development Tools</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>ESLint 9 (コード品質)</li>
              <li>TypeScript ESLint</li>
              <li>Bun (パッケージマネージャー)</li>
              <li>Turbopack (高速ビルド)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🏗️ アーキテクチャ設計</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-3 rounded border-l-4 border-blue-400">
            <h4 className="font-semibold text-blue-300 mb-1">Server Component優先</h4>
            <p className="text-gray-300 text-sm">
              ページデータの取得、静的コンテンツの表示はServer Componentで実装し、初期ロードを高速化
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-300 mb-1">Client Component最小化</h4>
            <p className="text-gray-300 text-sm">
              アニメーション、状態管理、ユーザーインタラクションのみClient Componentで実装
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">📊 目標と成果</h2>
        <div className="space-y-4">
          <div className="bg-green-900/30 p-4 rounded border border-green-500/30">
            <h4 className="font-semibold text-green-300 mb-2">🎯 開発目標</h4>
            <p className="text-gray-300 text-sm">
              未経験からモダンな技術スタックを使用し、実際のプロダクトレベルの
              ポートフォリオサイトを作成することで学習能力と実装力をアピール
            </p>
          </div>
          <div className="bg-blue-900/30 p-4 rounded border border-blue-500/30">
            <h4 className="font-semibold text-blue-300 mb-2">✅ 達成成果</h4>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Server/Client Componentsの適切な使い分け</li>
              <li>• React Hooks（useState, useEffect, useCallback）の効果的活用</li>
              <li>• Framer MotionとTailwindによる高品質アニメーション実装</li>
              <li>• Next.js 15最新機能（Parallel/Intercepting Routes）の習得</li>
            </ul>
          </div>
          <div className="bg-yellow-900/30 p-4 rounded border border-yellow-500/30">
            <h4 className="font-semibold text-yellow-300 mb-2">⚠️ 課題と学び</h4>
            <p className="text-gray-300 text-sm">
              アニメーションを多用している関係でLighthouseスコアは課題があるが、
              ユーザー体験と技術的な実装力の向上を重視した設計判断を行いました。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🎓 学習ポイント</h2>
        <p className="text-gray-300 text-sm mb-4">
          単なるチュートリアルの模倣ではなく、要件定義から設計、実装、デプロイまで
          一貫した開発プロセスを経験。新しい技術への積極的なチャレンジと、
          継続的な学習姿勢を示すポートフォリオとして作成しました。
        </p>
      </div>
    </div>
  );
}

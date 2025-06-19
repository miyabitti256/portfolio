export default function LearningMd() {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed">
      <h1 className="text-2xl font-bold text-white mb-6">学習記録 - Portfolio作成の道のり</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">💭 なぜこのプロジェクトを作ったか</h2>
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-300 mb-3">
            未経験からエンジニアを目指すにあたって、「実際に動くものを作った」という
            証拠が欲しかったのがきっかけです。
          </p>
          <p className="text-gray-300">
            ただのコピペサイトじゃなくて、自分なりにこだわった部分があるものを
            作りたいと思って、アニメーションとVSCode風UIに挑戦しました。
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">📖 学習の流れ</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">React/Next.js基礎固め</h4>
            <p className="text-gray-300 text-sm">
              Pages Routerしか知らなかったのでApp Routerの理解から。
              Server ComponentとClient Componentの違いに苦戦しました。
              <br />
              今度のプロジェクトはroute handlerを使用して、Next.jsのみでフルスタック開発を実装してみたい
            </p>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">デザインとアニメーション</h4>
            <p className="text-gray-300 text-sm">
              Tailwind CSSの知らないクラスなどを調べながら、Framer Motionでアニメーションを付けるのが
              思った以上に難しくて、パフォーマンスとの兼ね合いに悩みました。
            </p>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">VSCode風UIの実装</h4>
            <p className="text-gray-300 text-sm">
              React Hooksを活用して、タブ機能、サイドバーのリサイズ、
              ファイルツリーの展開など、普段使ってるVSCodeの再現にこだわりました。そこそこの出来だと思います
            </p>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">Parallel/Intercepting Routes</h4>
            <p className="text-gray-300 text-sm">
              Next.js の比較的新しい機能。モーダルをURLで管理する仕組みが面白くて、
              プロフィール詳細で実装してみました。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">😅 つまずいたポイント</h2>
        <div className="space-y-3">
          <div className="bg-red-900/20 border border-red-500/30 p-3 rounded">
            <h4 className="font-semibold text-red-300 mb-2">アニメーションのパフォーマンス</h4>
            <p className="text-gray-300 text-sm">
              見た目重視でアニメーション盛りすぎて、Lighthouseスコアが…
              reduce-motionの対応とか、最適化の大切さを学びました。
            </p>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-2">TypeScriptの型エラー</h4>
            <p className="text-gray-300 text-sm">
              最近は、開発を始める前にある程度ちゃんと型を書くようになって
              開発体験が格段に良くなりました。まだまだ勉強中です。
            </p>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-2">レスポンシブ対応</h4>
            <p className="text-gray-300 text-sm">
              デスクトップで作ってからモバイル対応すると大変だということを痛感。
              Tailwindには便利なユーティリティクラスが多くあるので、
              それを活用してモバイルファーストで作りたいです。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">💡 学んだこと</h2>
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded border border-blue-500/30">
          <ul className="text-gray-300 space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-300 mr-2">•</span>
              <span>React HooksはuseCallbackとかuseMemoも使えるようになった</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-300 mr-2">•</span>
              <span>Server/Client Componentの使い分けで、かなりパフォーマンス変わる</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-300 mr-2">•</span>
              <span>TypeScriptちゃんと書くと、バグが減って開発が楽になる</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🤔 今後の課題</h2>
        <div className="space-y-2">
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-1">パフォーマンス最適化</h4>
            <p className="text-gray-300 text-sm">
              Lighthouseスコア改善とか、画像最適化とかまだまだ学ぶことが多い
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-1">テストの導入</h4>
            <p className="text-gray-300 text-sm">
              JestとかTesting Libraryとか、まだ全然できてない
            </p>
          </div>
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-1">アクセシビリティ</h4>
            <p className="text-gray-300 text-sm">
              見た目重視で作ったけど、誰でも使いやすいサイトにしたい
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">✨ 感想</h2>
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-300 text-sm mb-3">
            思ってた以上に大変でしたが、完成したときはすごく達成感がありました。
            特にVSCode風UIが動いたときは嬉しかったです。
          </p>
          <p className="text-gray-300 text-sm">
            まだまだ未熟ですが、このプロジェクトを通して「自分で調べて、
            試して、形にする」という流れを体験できたのが一番の収穫だと思います。
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LearningMd() {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed">
      <h1 className="text-2xl font-bold text-white mb-6">学習記録 - 初フルスタック開発への挑戦</h1>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">💭 なぜこれを作ったのか</h2>
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-300 mb-3">
            約1年前に作った「クソしょうもないDiscord Bot」があったんですが、
            「ブラウザから操作できたら面白いのでは？」と思い立って挑戦してみました。
          </p>
          <p className="text-gray-300">
            あと、フロントエンドだけじゃなくてバックエンドも触ってみたくて、
            フルスタック開発にも興味があったんです。
          </p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🛠️ 技術選定のノリ</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">「これ使ってみたい！」で選んだもの</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-yellow-300">Bun</span>: Node.jsより速いらしいし、TypeScriptネイティブ</li>
              <li>• <span className="text-yellow-300">Hono</span>: 軽量でシンプル、今熱いフレームワーク</li>
              <li>• <span className="text-yellow-300">NextAuth</span>: Discord認証が爆速で実装できる</li>
              <li>• <span className="text-yellow-300">Prisma</span>: 型安全でプロパティ名でミスらない</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">無料枠重視で選んだもの</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• <span className="text-blue-300">Vercel</span>: Next.js作った会社、めちゃくちゃ簡単</li>
              <li>• <span className="text-blue-300">Supabase</span>: みんな使ってるからとりあえず採用</li>
              <li>• <span className="text-blue-300">fly.io</span>: クレカ必要だけど、Botも動かせる</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">📚 開発の流れ</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">最初は「とりあえず動かす」</h4>
            <p className="text-gray-300 text-sm">
              GitHubリポジトリ作って、Discord Developer PortalでBot登録。
              Supabaseも適当に設定して、まずは基本機能を実装。
            </p>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">Bot開発 → API追加</h4>
            <p className="text-gray-300 text-sm">
              Discord.jsでBot作ってから、同じプロセスでHonoのAPIサーバーを立てる構成に。
              Discordのイベントハンドラとサービス層を分離したのが良かった。
            </p>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">フロントエンド実装</h4>
            <p className="text-gray-300 text-sm">
              Next.js + NextAuth + Shadcn UIで管理画面作成。
              認証まわりが思った以上にすんなりいって感動しました。
            </p>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-green-300 mb-2">デプロイと本番環境</h4>
            <p className="text-gray-300 text-sm">
              GitHub連携で自動デプロイ設定。pushするだけで反映されるのめちゃくちゃ楽。
              環境変数の設定でちょっと躓いたけど、無事に動作確認完了。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">😅 つまずいたポイント</h2>
        <div className="space-y-3">
          <div className="bg-red-900/20 border border-red-500/30 p-3 rounded">
            <h4 className="font-semibold text-red-300 mb-2">Bot-Web間の状態同期</h4>
            <p className="text-gray-300 text-sm">
              BotサーバーとWebアプリが別プロセスなので、データの整合性確保が思った以上に大変。
              最終的にcronで定期同期することで解決したけど、もうちょっといい方法ありそう。
            </p>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-500/30 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-2">エラーハンドリング</h4>
            <p className="text-gray-300 text-sm">
              身内サーバー用だからと手抜きしてたら、予想外のエラーでアプリが落ちたり…
              規模が小さくても、ちゃんと例外処理は大事だと痛感しました。
            </p>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 p-3 rounded">
            <h4 className="font-semibold text-blue-300 mb-2">Dockerの学習</h4>
            <p className="text-gray-300 text-sm">
              fly.ioデプロイでDockerが必要だったけど、初めてだったので結構苦戦。
              Bunのイメージ作るところで何回かやり直しました。
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">💡 学んだこと・気づき</h2>
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-4 rounded border border-blue-500/30">
          <ul className="text-gray-300 space-y-2 text-sm">
            <li className="flex items-start">
              <span className="text-green-300 mr-2">•</span>
              <span>フルスタック開発、思ったより面白い。全体像が見えるのが楽しい</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-300 mr-2">•</span>
              <span>最近のフレームワークは本当に開発体験が良い。学習曲線も緩やか</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-300 mr-2">•</span>
              <span>AIがJS/TSに異常に強い。詰まったときの解決速度が段違い</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-300 mr-2">•</span>
              <span>GitHub連携の自動デプロイ、一度設定すると手放せない便利さ</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-300 mr-2">•</span>
              <span>小規模でもちゃんと設計考えないと、後で痛い目に遭う</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">🤔 反省と今後</h2>
        <div className="space-y-3">
          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-2">もっとシンプルでよかったかも</h4>
            <p className="text-gray-300 text-sm">
              この程度の規模なら、わざわざSupabase使わなくても
              SQLiteでローカルDBでも十分だったかもしれない。
            </p>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-2">テストコード書きたい</h4>
            <p className="text-gray-300 text-sm">
              もう少し大規模になったら、Jest とか Testing Library とか
              ちゃんとテスト書けるようになりたいです。
            </p>
          </div>

          <div className="bg-gray-800 p-3 rounded">
            <h4 className="font-semibold text-yellow-300 mb-2">ニート脱却したい</h4>
            <p className="text-gray-300 text-sm">
              このプロジェクトで少し自信がついたので、
              就職活動頑張って、ニート脱却したいな～ 🥺
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-blue-300 mb-3">✨ 総括</h2>
        <div className="bg-gray-800 p-4 rounded">
          <p className="text-gray-300 text-sm mb-3">
            Discord Bot作成からWebアプリまで、初めてのフルスタック開発でしたが、
            想像以上に楽しくて、技術への興味がさらに湧きました。
          </p>
          <p className="text-gray-300 text-sm">
            AIの支援もあって、初学者でも挑戦のハードルは意外と低いなと実感。
            次は何を作ろうかな…🤔
          </p>
        </div>
      </div>
    </div>
  );
}

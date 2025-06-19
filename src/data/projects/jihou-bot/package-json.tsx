export default function PackageJson() {
  return (
    <div className="p-6 bg-gray-900 text-gray-100 font-mono text-sm leading-relaxed">
      <div className="whitespace-pre-wrap">
        <div>{'{'}</div>
        <div className="ml-4">
          <span className="text-blue-300">"name"</span>: <span className="text-green-300">"jihou-bot-project"</span>,
        </div>
        <div className="ml-4">
          <span className="text-blue-300">"version"</span>: <span className="text-green-300">"1.0.0"</span>,
        </div>
        <div className="ml-4">
          <span className="text-blue-300">"description"</span>: <span className="text-green-300">"Discord Bot with Web Management Interface"</span>,
        </div>
        <div className="ml-4">
          <span className="text-blue-300">"scripts"</span>: {'{'}
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"dev"</span>: <span className="text-green-300">"next dev"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"build"</span>: <span className="text-green-300">"next build"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"start"</span>: <span className="text-green-300">"next start"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"bot"</span>: <span className="text-green-300">"bun run discord-bot/src/index.ts"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"db:generate"</span>: <span className="text-green-300">"prisma generate"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"db:push"</span>: <span className="text-green-300">"prisma db push"</span>
        </div>
        <div className="ml-4">
          {'},'}
        </div>
        <div className="ml-4">
          <span className="text-blue-300">"dependencies"</span>: {'{'}
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"next"</span>: <span className="text-green-300">"^15.0.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"react"</span>: <span className="text-green-300">"^19.0.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"react-dom"</span>: <span className="text-green-300">"^19.0.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"discord.js"</span>: <span className="text-green-300">"^14.14.1"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"hono"</span>: <span className="text-green-300">"^4.0.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"next-auth"</span>: <span className="text-green-300">"^4.24.5"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"@auth/prisma-adapter"</span>: <span className="text-green-300">"^1.4.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"@prisma/client"</span>: <span className="text-green-300">"^5.8.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"tailwindcss"</span>: <span className="text-green-300">"^4.0.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"@radix-ui/react-dialog"</span>: <span className="text-green-300">"^1.0.5"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"@radix-ui/react-dropdown-menu"</span>: <span className="text-green-300">"^2.0.6"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"lucide-react"</span>: <span className="text-green-300">"^0.263.1"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"class-variance-authority"</span>: <span className="text-green-300">"^0.7.0"</span>
        </div>
        <div className="ml-4">
          {'},'}
        </div>
        <div className="ml-4">
          <span className="text-blue-300">"devDependencies"</span>: {'{'}
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"typescript"</span>: <span className="text-green-300">"^5.3.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"@types/node"</span>: <span className="text-green-300">"^20.0.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"@types/react"</span>: <span className="text-green-300">"^18.0.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"prisma"</span>: <span className="text-green-300">"^5.8.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"eslint"</span>: <span className="text-green-300">"^8.0.0"</span>,
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"eslint-config-next"</span>: <span className="text-green-300">"^15.0.0"</span>
        </div>
        <div className="ml-4">
          {'}'}
        </div>
        <div className="ml-4">
          <span className="text-blue-300">"etc"</span>: {'{'}
        </div>
        <div className="ml-8">
          <span className="text-blue-300">"10+ other packages"</span>: <span className="text-green-300">"latest"</span>
        </div>
        <div className="ml-4">
          {'}'}
        </div>
        <div>{'}'}</div>
      </div>
    </div>
  );
}

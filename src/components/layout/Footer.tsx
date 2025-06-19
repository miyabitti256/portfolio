import { GitHubIcon, XIcon, ZennIcon } from '@/components/ui/social-icons';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* 左側：コピーライト */}
          <div className="mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <p className="text-sm font-mono text-gray-700">
                <span className="text-primary-600">$</span> echo "Built with ❤️ and Next.js"
              </p>
              <p className="text-xs text-gray-500 mt-1">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
            </div>
          </div>

          {/* 右側：ソーシャルリンク */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.contacts.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:scale-105 transform"
              aria-label="GitHub"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={personalInfo.contacts.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200 hover:scale-105 transform"
              aria-label="X (Twitter)"
            >
              <XIcon size={20} />
            </a>
            <a
              href={personalInfo.contacts.zenn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-green-500 transition-colors duration-200 hover:scale-105 transform"
              aria-label="Zenn"
            >
              <ZennIcon size={20} />
            </a>
          </div>
        </div>

        {/* 技術スタック情報 */}
        <div className="mt-6 pt-4 border-t border-gray-200 text-center">
          <div className="text-xs text-gray-500 font-mono">
            <span className="text-primary-600 font-medium">Built with:</span>{' '}
            <span className="text-gray-700">
              Next.js 15 • React 19 • TypeScript • Tailwind CSS • Framer Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

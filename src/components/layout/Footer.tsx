import { Github, Twitter, ExternalLink } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-primary-100 py-12 border-t border-primary-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* 左側：コピーライト */}
          <div className="mb-6 md:mb-0">
            <div className="text-center md:text-left">
              <p className="text-sm font-mono">
                <span className="text-blue-400">$</span> echo "Built with ❤️ and Next.js"
              </p>
              <p className="text-xs text-primary-300 mt-1">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
            </div>
          </div>

          {/* 右側：ソーシャルリンク */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.contacts.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.contacts.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-blue-400 transition-colors duration-200 hover:scale-110 transform"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href={personalInfo.contacts.zenn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-green-400 transition-colors duration-200 hover:scale-110 transform"
              aria-label="Zenn"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* 技術スタック情報 */}
        <div className="mt-8 pt-6 border-t border-primary-700 text-center">
          <div className="text-xs text-primary-300 font-mono">
            <span className="text-blue-400">Built with:</span>{' '}
            Next.js 15 • React 19 • TypeScript • Tailwind CSS • Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
} 
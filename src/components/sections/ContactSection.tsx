'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Terminal,
  Copy,
  Check
} from 'lucide-react';
import { GitHubIcon, XIcon, ZennIcon, DiscordIcon } from '@/components/ui/social-icons';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { personalInfo } from '@/data/personal';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#contact');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(''), 2000);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('コピーに失敗しました:', error);
    }
  };

  const contacts = [
    {
      id: 'github',
      name: 'GitHub',
      username: '@miyabitti256',
      url: personalInfo.contacts.github.url,
      icon: GitHubIcon,
      color: 'text-gray-600 hover:text-gray-900',
      bgColor: 'bg-gray-100',
      description: 'ソースコード・プロジェクト',
      command: 'git clone',
    },
    {
      id: 'twitter',
      name: 'X (Twitter)',
      username: '@miyabitti0256',
      url: personalInfo.contacts.twitter.url,
      icon: XIcon,
      color: 'text-black hover:text-gray-700',
      bgColor: 'bg-gray-50',
      description: '技術情報・日常のつぶやき',
      command: 'curl -X GET',
    },
    {
      id: 'zenn',
      name: 'Zenn',
      username: '@miyabitti256',
      url: personalInfo.contacts.zenn.url,
      icon: ZennIcon,
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'bg-blue-50',
      description: '技術記事・学習記録',
      command: 'npm install',
    },
    {
      id: 'discord',
      name: 'Discord',
      username: '@miyabitti256',
      url: personalInfo.contacts.discord.url,
      icon: DiscordIcon,
      color: 'text-indigo-600 hover:text-indigo-700',
      bgColor: 'bg-indigo-50',
      description: 'リアルタイム連絡',
      command: 'ssh connect',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-zen-maru">
            Contact
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-zen-maru px-4">
            お気軽にご連絡ください。技術的な質問や協業のご相談をお待ちしています。
          </p>
        </motion.div>

        {/* ターミナル風コンタクト情報 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* ターミナルウィンドウ */}
          <div className="terminal-window mb-6 sm:mb-8">
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-dot bg-red-500" />
                <div className="terminal-dot bg-yellow-500" />
                <div className="terminal-dot bg-green-500" />
              </div>
              <div className="text-gray-300 text-xs sm:text-sm ml-2 sm:ml-4 flex items-center gap-1 sm:gap-2">
                <Terminal size={14} className="sm:w-4 sm:h-4" />
                <span className="hidden xs:inline">~/contact</span>
              </div>
            </div>

            <div className="p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
              {/* ターミナルプロンプト */}
              <div className="mb-3 sm:mb-4">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 ml-2">whoami</span>
              </div>
              <div className="mb-3 sm:mb-4 text-gray-300">
                {personalInfo.name} - {personalInfo.subtitle}
              </div>

              <div className="mb-3 sm:mb-4">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 ml-2">cat contacts.json</span>
              </div>

              {/* JSON風コンタクト情報 */}
              <div className="bg-gray-800 rounded-lg p-2 sm:p-3 md:p-4 mb-3 sm:mb-4 border border-gray-700 overflow-x-auto break-words">
                <pre className="text-gray-300 text-xs sm:text-sm">
{`{
  "developer": "${personalInfo.name}",
  "status": "job_seeking",
  "location": "Japan",
  "contacts": {`}
                </pre>
                {contacts.map((contact, index) => (
                  <div key={contact.id} className="ml-2 sm:ml-4 my-1 sm:my-2">
                    <div className="text-blue-400 text-xs sm:text-sm">
                      "{contact.id}": {"{"}
                    </div>
                    <div className="ml-2 sm:ml-4">
                      <div className="text-gray-300 text-xs sm:text-sm">
                        "username": <span className="text-green-400">"{contact.username}"</span>,
                      </div>
                      <div className="text-gray-300 text-xs sm:text-sm">
                        "url": <span className="text-green-400 break-all">"{contact.url}"</span>,
                      </div>
                      <div className="text-gray-300 text-xs sm:text-sm">
                        "description": <span className="text-green-400">"{contact.description}"</span>
                      </div>
                    </div>
                    <div className="text-blue-400 text-xs sm:text-sm">
                      {"}"}{index < contacts.length - 1 ? ',' : ''}
                    </div>
                  </div>
                ))}
                <pre className="text-gray-300 text-xs sm:text-sm">
{`  }
}`}
                </pre>
              </div>

              <div className="mb-2">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 ml-2">ls -la social/</span>
              </div>
            </div>
          </div>

          {/* コンタクトカード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`relative p-4 sm:p-6 ${contact.bgColor} rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group`}
              >
                {/* コマンドライン風ヘッダー */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 rounded-lg">
                    <contact.icon size={16} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 font-zen-maru text-sm sm:text-base">
                      {contact.name}
                    </h3>
                                         <code className="text-xs sm:text-sm text-gray-600 font-mono block break-all">
                      {contact.command} {contact.username}
                    </code>
                  </div>
                </div>

                {/* 説明 */}
                <p className="text-gray-700 mb-3 sm:mb-4 font-zen-maru text-xs sm:text-sm">
                  {contact.description}
                </p>

                {/* ユーザー名とコピーボタン */}
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="outline" className="font-mono text-xs break-all max-w-[60%]">
                    {contact.username}
                  </Badge>

                  <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(contact.username, contact.id)}
                      className="text-gray-600 hover:text-gray-900 p-1 h-8 w-8"
                    >
                      {copiedText === contact.id ? (
                        <Check size={14} className="text-green-600" />
                      ) : (
                        <Copy size={14} />
                      )}
                    </Button>

                    {contact.url !== '#' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className={`${contact.color} p-1 h-8 w-8`}
                      >
                        <a
                          href={contact.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* ホバー時のエフェクト */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-lg transition-all duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* フッターメッセージ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-12"
          >
            <div className="terminal-window inline-block w-full">
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot bg-red-500" />
                  <div className="terminal-dot bg-yellow-500" />
                  <div className="terminal-dot bg-green-500" />
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <div className="text-green-400 text-xs sm:text-sm font-mono mb-2">
                  <span className="text-blue-400">$</span> echo "Thank you for visiting!"
                </div>
                <div className="text-gray-300 text-xs sm:text-sm font-mono">
                  一緒に素晴らしいプロダクトを作りましょう！
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

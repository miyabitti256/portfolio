'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Mail, 
  ExternalLink,
  Terminal,
  Copy,
  Check
} from 'lucide-react';
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
      console.error('コピーに失敗しました:', error);
    }
  };

  const contacts = [
    {
      id: 'github',
      name: 'GitHub',
      username: '@miyabitti256',
      url: personalInfo.contacts.github.url,
      icon: Github,
      color: 'text-gray-600 hover:text-gray-900',
      bgColor: 'bg-gray-100',
      description: 'ソースコード・プロジェクト',
      command: 'git clone',
    },
    {
      id: 'twitter',
      name: 'Twitter',
      username: '@miyabitti0256',
      url: personalInfo.contacts.twitter.url,
      icon: Twitter,
      color: 'text-blue-500 hover:text-blue-600',
      bgColor: 'bg-blue-50',
      description: '技術情報・日常のつぶやき',
      command: 'curl -X GET',
    },
    {
      id: 'zenn',
      name: 'Zenn',
      username: '@miyabitti256',
      url: personalInfo.contacts.zenn.url,
      icon: ExternalLink,
      color: 'text-green-600 hover:text-green-700',
      bgColor: 'bg-green-50',
      description: '技術記事・学習記録',
      command: 'npm install',
    },
    {
      id: 'discord',
      name: 'Discord',
      username: '@miyabitti256',
      url: '#',
      icon: Mail,
      color: 'text-purple-600 hover:text-purple-700',
      bgColor: 'bg-purple-50',
      description: 'リアルタイム連絡',
      command: 'ssh connect',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
      <div className="container mx-auto px-6">
        {/* セクションヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-zen-maru">
            Contact
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-zen-maru">
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
          <div className="terminal-window mb-8">
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
              </div>
              <div className="text-gray-300 text-sm ml-4 flex items-center gap-2">
                <Terminal size={16} />
                ~/contact
              </div>
            </div>
            
            <div className="p-6 font-mono text-sm">
              {/* ターミナルプロンプト */}
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 ml-2">whoami</span>
              </div>
              <div className="mb-4 text-gray-300">
                {personalInfo.name} - {personalInfo.subtitle}
              </div>
              
              <div className="mb-4">
                <span className="text-green-400">$</span>
                <span className="text-blue-400 ml-2">cat contacts.json</span>
              </div>
              
              {/* JSON風コンタクト情報 */}
              <div className="bg-gray-800 rounded-lg p-4 mb-4 border border-gray-700">
                <pre className="text-gray-300">
{`{
  "developer": "${personalInfo.name}",
  "status": "job_seeking",
  "location": "Japan",
  "contacts": {`}
                </pre>
                {contacts.map((contact, index) => (
                  <div key={contact.id} className="ml-4 my-2">
                    <div className="text-blue-400">
                      "{contact.id}": {"{"}
                    </div>
                    <div className="ml-4">
                      <div className="text-gray-300">
                        "username": <span className="text-green-400">"{contact.username}"</span>,
                      </div>
                      <div className="text-gray-300">
                        "url": <span className="text-green-400">"{contact.url}"</span>,
                      </div>
                      <div className="text-gray-300">
                        "description": <span className="text-green-400">"{contact.description}"</span>
                      </div>
                    </div>
                    <div className="text-blue-400">
                      {"}"}{index < contacts.length - 1 ? ',' : ''}
                    </div>
                  </div>
                ))}
                <pre className="text-gray-300">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className={`relative p-6 ${contact.bgColor} rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 group`}
              >
                {/* コマンドライン風ヘッダー */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-900 rounded-lg">
                    <contact.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 font-zen-maru">
                      {contact.name}
                    </h3>
                    <code className="text-sm text-gray-600 font-mono">
                      {contact.command} {contact.username}
                    </code>
                  </div>
                </div>

                {/* 説明 */}
                <p className="text-gray-700 mb-4 font-zen-maru text-sm">
                  {contact.description}
                </p>

                {/* ユーザー名とコピーボタン */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="font-mono text-xs">
                    {contact.username}
                  </Badge>
                  
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(contact.username, contact.id)}
                      className="text-gray-600 hover:text-gray-900 p-1"
                    >
                      {copiedText === contact.id ? (
                        <Check size={16} className="text-green-600" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </Button>
                    
                    {contact.url !== '#' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className={`${contact.color} p-1`}
                      >
                        <a 
                          href={contact.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
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
            className="text-center mt-12"
          >
            <div className="terminal-window inline-block">
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="text-green-400 text-sm font-mono mb-2">
                  <span className="text-blue-400">$</span> echo "Thank you for visiting!"
                </div>
                <div className="text-gray-300 text-sm font-mono">
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
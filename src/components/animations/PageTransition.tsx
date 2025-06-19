'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useState, useEffect, useRef } from 'react';

// ターミナル風ローディングメッセージ
const LOADING_MESSAGES = [
  '$ cd /portfolio',
  '$ npm run build',
  '$ Loading components...',
  '$ Rendering page...',
  '$ ✓ Build completed',
] as const;

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true); // 初回ロードはローディングから開始
  const [loadingStep, setLoadingStep] = useState(0);
  const [showTerminal, setShowTerminal] = useState(true);
  const [shouldSkipAnimation, setShouldSkipAnimation] = useState(false);
  const [pageKey, setPageKey] = useState(pathname); // ページコンポーネントの再マウントを制御するキー

  const previousPathnameRef = useRef<string>('/'); // 初期値をルートに設定
  const isInitialLoadRef = useRef(true);
  const animationTimerRef = useRef<NodeJS.Timeout[]>([]);
  const completeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // モーダルとして扱われるパスか判定
  const isModalPath = (path: string) => /^\/(profile|projects\/[^/]+)/.test(path);

  useEffect(() => {
    // すべての既存タイマーをクリア
    animationTimerRef.current.forEach(clearTimeout);
    if (completeTimerRef.current) clearTimeout(completeTimerRef.current);

    const previousPathname = previousPathnameRef.current;

    // パスが変わっていない場合は何もしない
    if (pathname === previousPathname && !isInitialLoadRef.current) {
      return;
    }

    let skip = false;
    if (isInitialLoadRef.current) {
      // 初回ロードはアニメーション実行
      skip = false;
    } else {
      // モーダル関連の遷移かを判定
      const fromHomeToModal = previousPathname === '/' && isModalPath(pathname);
      const fromModalToHome = isModalPath(previousPathname) && pathname === '/';
      const modalToModal = isModalPath(previousPathname) && isModalPath(pathname);

      if (fromHomeToModal || fromModalToHome || modalToModal) {
        skip = true;
      }
    }

    setShouldSkipAnimation(skip);

    if (process.env.NODE_ENV === 'development') {
      console.log('PageTransition Debug:', {
        pathname,
        previousPathname,
        isInitialLoad: isInitialLoadRef.current,
        shouldSkip: skip,
        pageKey,
      });
    }

    if (skip) {
      setIsLoading(false);
      setShowTerminal(false);
    } else {
      window.scrollTo(0, 0); // ページ遷移時にスクロールをトップに戻す
      setPageKey(pathname); // 通常の遷移の時だけキーを更新する
      setIsLoading(true);
      setShowTerminal(true);
      setLoadingStep(0);

      animationTimerRef.current = LOADING_MESSAGES.map((_, index) =>
        setTimeout(() => {
          setLoadingStep(index);
        }, index * 150)
      );

      completeTimerRef.current = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setShowTerminal(false);
        }, 200);
      }, LOADING_MESSAGES.length * 150 + 300);
    }

    // 状態を更新
    previousPathnameRef.current = pathname;
    isInitialLoadRef.current = false;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {/* ターミナル風ローディングオーバーレイ - モーダル関連時は完全に非表示 */}
      <AnimatePresence>
        {showTerminal && !shouldSkipAnimation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d3748 100%)',
            }}
          >
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl max-w-lg w-full mx-4">
              {/* ターミナルヘッダー */}
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-gray-300 text-sm ml-2 font-mono">
                  portfolio-terminal
                </span>
              </div>

              {/* ターミナル本体 */}
              <div className="p-4 min-h-[200px] font-mono text-sm">
                {LOADING_MESSAGES.slice(0, loadingStep + 1).map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`mb-2 ${
                      message.includes('✓')
                        ? 'text-green-400'
                        : message.includes('$')
                        ? 'text-blue-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {message}
                    {index === loadingStep && (
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="text-white"
                      >
                        |
                      </motion.span>
                    )}
                  </motion.div>
                ))}

                {/* プログレスバー */}
                {loadingStep >= 2 && (
                  <div className="mt-4">
                    <div className="text-gray-400 text-xs mb-1">Progress:</div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* メインページコンテンツ - ローディング中は完全に隠す */}
      <div className={`w-full ${isLoading && !shouldSkipAnimation ? 'opacity-0 pointer-events-none' : ''}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={pageKey}
            {...(shouldSkipAnimation ? {
              // モーダル時はアニメーションプロパティを設定しない
            } : {
              // 通常時のアニメーション - ローディング完了後に開始
              initial: { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
              animate: {
                opacity: isLoading ? 0 : 1,
                scale: isLoading ? 0.98 : 1,
                filter: isLoading ? 'blur(4px)' : 'blur(0px)'
              },
              exit: { opacity: 0, scale: 1.02, filter: 'blur(2px)' },
              transition: {
                duration: isLoading ? 0 : 0.6,
                ease: 'easeOut',
                delay: isLoading ? 0 : 0.1
              },
            })}
            className="w-full"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, useState, useEffect, useRef } from 'react';
import { modalUtils } from '@/lib/utils';

interface PageTransitionProps {
  children: ReactNode;
}

// ターミナル風ローディングメッセージ
const LOADING_MESSAGES = [
  '$ cd /portfolio',
  '$ npm run build',
  '$ Loading components...',
  '$ Rendering page...',
  '$ ✓ Build completed',
] as const;

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);
  const [previousPathname, setPreviousPathname] = useState<string>('');
  const [shouldSkipAnimation, setShouldSkipAnimation] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const isModalActiveRef = useRef(false);

  // モーダル関連のルートかどうかをチェックする包括的な関数
  const checkModalStatus = (currentPath: string, previousPath: string, isFirstLoad: boolean) => {
    // 初回ロード時は常にアニメーションを実行
    if (isFirstLoad) {
      return false;
    }

    // ホームページの場合の特別処理
    if (currentPath === '/') {
      // 同じパス（/から/）の場合はスキップしない
      if (previousPath === '/') {
        return false;
      }
      // モーダルから戻ってきた場合は一度だけスキップ
      if (previousPath.includes('profile') || previousPath.includes('projects/')) {
        // モーダル状態をリセット
        setTimeout(() => {
          isModalActiveRef.current = false;
        }, 50);
        return true;
      }
      return false;
    }

    // 現在のパスがモーダル関連
    const currentIsModal = modalUtils.isModalRoute(currentPath) || 
                          modalUtils.isParallelRoute(currentPath);
    
    // 前のパスがモーダル関連
    const previousIsModal = modalUtils.isModalRoute(previousPath) || 
                           modalUtils.isParallelRoute(previousPath);
    
    // モーダル関連の遷移パターン
    const isModalTransition = modalUtils.isModalTransition(currentPath, previousPath);
    
    // ホームページからモーダルへの遷移（2回目以降のナビゲーション）
    const homeToModal = previousPath === '/' && 
                        (currentPath.includes('profile') || currentPath.includes('projects/')) &&
                        !isFirstLoad;
    
    // URLパラメータでモーダル状態が示されている
    const hasModalParam = searchParams.has('modal');
    
    // いずれかの条件に当てはまればアニメーションをスキップ
    return currentIsModal || 
           previousIsModal || 
           isModalTransition || 
           homeToModal || 
           hasModalParam;
  };

  useEffect(() => {
    // 初回ロード検知 - パスの変更が初めてかどうか
    const isFirstLoad = isInitialLoad && previousPathname === '';
    
    // モーダル状態をチェック
    const shouldSkip = checkModalStatus(pathname, previousPathname, isFirstLoad);
    
    // モーダル状態を記録
    if (pathname.includes('profile') || pathname.includes('projects/')) {
      isModalActiveRef.current = true;
    } else if (pathname === '/' && previousPathname !== '/') {
      // ホームページに戻った時は即座にモーダル状態をリセット
      isModalActiveRef.current = false;
    }
    
    setShouldSkipAnimation(shouldSkip);
    
    // デバッグ用ログ（開発時のみ）
    if (process.env.NODE_ENV === 'development') {
      console.log('PageTransition Debug:', {
        pathname,
        previousPathname,
        isFirstLoad,
        shouldSkip,
        isModalActive: isModalActiveRef.current,
        hasModalParam: searchParams.has('modal'),
      });
    }
    
    // アニメーションをスキップする場合は早期リターン
    if (shouldSkip) {
      setIsLoading(false);
      setShowTerminal(false);
      setPreviousPathname(pathname);
      setIsInitialLoad(false);
      return;
    }

    // 通常のページ遷移時のローディング制御
    setIsLoading(true);
    setShowTerminal(true);
    setLoadingStep(0);

    // ローディングステップの進行
    const stepTimers = LOADING_MESSAGES.map((_, index) => 
      setTimeout(() => {
        setLoadingStep(index);
      }, index * 150)
    );

    // ローディング完了
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowTerminal(false);
      }, 200);
    }, LOADING_MESSAGES.length * 150 + 300);

    // 前回のパスを更新
    setPreviousPathname(pathname);
    setIsInitialLoad(false);

    return () => {
      stepTimers.forEach(clearTimeout);
      clearTimeout(completeTimer);
    };
  }, [pathname, previousPathname, searchParams, isInitialLoad]);

  // 検索パラメータが変更された時（モーダル内でのナビゲーション等）
  useEffect(() => {
    // モーダルパラメータがある場合は即座にアニメーションをスキップ
    const hasModalParam = searchParams.has('modal');
    if (hasModalParam) {
      setShouldSkipAnimation(true);
      setIsLoading(false);
      setShowTerminal(false);
    }
  }, [searchParams]);

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
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
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
            key={shouldSkipAnimation ? `${pathname}-static` : pathname}
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
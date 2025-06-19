import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 日付フォーマット関数
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
  });
};

// スムーズスクロール関数
export const scrollToElement = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// スクロール位置取得
export const getScrollProgress = (): number => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  return (scrollTop / scrollHeight) * 100;
};

// デバウンス関数
export const debounce = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

// スロットル関数
export const throttle = <T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();

    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

// ランダムな遅延を生成（アニメーション用）
export const randomDelay = (min: number = 0, max: number = 0.5): number => {
  return Math.random() * (max - min) + min;
};

// ランダムな配列要素を選択
export const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// 配列をシャッフル
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// クエリパラメータを更新
export const updateSearchParams = (
  searchParams: URLSearchParams,
  key: string,
  value: string | null
): string => {
  const params = new URLSearchParams(searchParams);
  if (value === null) {
    params.delete(key);
  } else {
    params.set(key, value);
  }
  return params.toString();
};

// ローカルストレージのヘルパー関数
export const storage = {
  get: <T>(key: string): T | null => {
    if (typeof window === 'undefined') return null;
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  },

  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Handle quota exceeded or other errors
    }
  },

  remove: (key: string): void => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  },

  clear: (): void => {
    if (typeof window === 'undefined') return;
    localStorage.clear();
  },
};

// エラーハンドリング用の型ガード
export const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

// パフォーマンス計測
export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    // eslint-disable-next-line no-console
    console.log(`${name}: ${end - start}ms`);
  } else {
    fn();
  }
};

// ブラウザサポートチェック
export const browserSupports = {
  intersectionObserver: () => typeof window !== 'undefined' && 'IntersectionObserver' in window,
  webp: () => {
    if (typeof window === 'undefined') return false;
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('webp') > -1;
  },
  passiveEvents: () => {
    if (typeof window === 'undefined') return false;
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return false;
        },
      } as EventListenerOptions;
      window.addEventListener('test', () => {}, options);
      window.removeEventListener('test', () => {}, options);
    } catch {
      passiveSupported = false;
    }
    return passiveSupported;
  },
};

// モーダル関連のユーティリティ関数
export const modalUtils = {
  // モーダル経由かどうかを判定
  isModalRoute: (pathname: string): boolean => {
    // インターセプティングルート（(.)で始まるルート）を検出
    return pathname.includes('/(.)') || pathname.includes('@modal');
  },

  // パラレルルートかどうかを判定
  isParallelRoute: (pathname: string): boolean => {
    return pathname.includes('@modal') || pathname.includes('/(.)');
  },

  // モーダル遷移かどうかを判定
  isModalTransition: (currentPath: string, previousPath: string): boolean => {
    // ホームページからプロフィール/プロジェクトへの遷移
    if (previousPath === '/' &&
        (currentPath.includes('/profile') || currentPath.includes('/projects/'))) {
      return true;
    }

    // モーダル内での遷移
    if (currentPath.includes('/(.)') || currentPath.includes('@modal')) {
      return true;
    }

    return false;
  },

  // 現在のページがモーダル表示中かどうかを判定
  isModalActive: (): boolean => {
    if (typeof window === 'undefined') return false;

    // URLにモーダル関連のパラメータがあるかチェック
    const url = new URL(window.location.href);
    const searchParams = url.searchParams;

    // modal=trueパラメータがあるかチェック
    return searchParams.has('modal') ||
           // またはパスがモーダル経由であることを示すパターンをチェック
           url.pathname.includes('/(.)') ||
           url.pathname.includes('@modal');
  },

  // モーダル状態をURLパラメータに設定
  setModalParam: (isModal: boolean) => {
    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    if (isModal) {
      url.searchParams.set('modal', 'true');
    } else {
      url.searchParams.delete('modal');
    }

    window.history.replaceState({}, '', url.toString());
  },

  // モーダルを閉じる時の処理
  closeModal: () => {
    if (typeof window === 'undefined') return;

    // URL パラメータからモーダル関連を削除
    const url = new URL(window.location.href);
    url.searchParams.delete('modal');

    // ホームページに戻る
    window.history.replaceState({}, '', '/');
  },
};

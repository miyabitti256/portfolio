// Hero Section用のリッチアニメーション
export const heroAnimations = {
  typewriter: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
  letter: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  particle: {
    animate: {
      y: [0, -20, 0],
      opacity: [0.4, 1, 0.4],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  fadeInScale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  },
  floatingIcon: {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

// 他セクション用の控えめなアニメーション
export const sectionAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  fadeInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 }
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  slideIn: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  },
};

// エンジニア感のあるUI用アニメーション
export const engineerUIAnimations = {
  terminalBlink: {
    animate: {
      opacity: [1, 0, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  codeHighlight: {
    initial: { backgroundColor: "transparent" },
    animate: { backgroundColor: ["transparent", "#3b82f6", "transparent"] },
    transition: { duration: 2, repeat: Infinity }
  },
  terminalType: {
    hidden: { width: 0 },
    visible: {
      width: "auto",
      transition: {
        duration: 2,
        ease: "linear"
      }
    }
  },
  gitCommitSlide: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  },
  vscodeFocus: {
    inactive: { 
      backgroundColor: "#374151",
      borderTopColor: "transparent",
      color: "#9ca3af"
    },
    active: { 
      backgroundColor: "#1f2937",
      borderTopColor: "#3b82f6",
      color: "#f3f4f6"
    },
    transition: { duration: 0.2 }
  },
};

// ページ遷移アニメーション
export const pageTransitions = {
  // エンジニア感のあるページ遷移（ターミナル風ローディング付き）
  terminal: {
    initial: { opacity: 0, scale: 0.98, filter: 'blur(4px)' },
    animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
    exit: { opacity: 0, scale: 1.02, filter: 'blur(2px)' },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.05 },
    transition: { duration: 0.4, ease: "easeInOut" }
  },
};

// ホバーエフェクト
export const hoverAnimations = {
  cardHover: {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -5,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  },
  buttonHover: {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    tap: { scale: 0.95 }
  },
  iconHover: {
    rest: { rotate: 0 },
    hover: { 
      rotate: 15,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  },
};

// スクロールアニメーション
export const scrollAnimations = {
  revealOnScroll: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },
  parallax: (speed: number = 0.5) => ({
    animate: {
      y: `${speed * 100}%`,
      transition: {
        ease: "linear"
      }
    }
  }),
}; 
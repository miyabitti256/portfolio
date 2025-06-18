'use client';

import { memo } from 'react';
import { 
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siFramer,
  siNodedotjs,
  siDiscord,
  siPostgresql,
  siPrisma,
  siSupabase,
  siGit,
  siVercel,
  siFigma,
  siRust,
  siGo,
  siDocker,
  siShadcnui,
  siHono,
  siBun,
  siFlydotio
} from 'simple-icons';

interface TechIconProps {
  iconName: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const iconMap = {
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  nextdotjs: siNextdotjs,
  tailwindcss: siTailwindcss,
  framer: siFramer,
  nodedotjs: siNodedotjs,
  discord: siDiscord,
  postgresql: siPostgresql,
  prisma: siPrisma,
  supabase: siSupabase,
  git: siGit,
  vercel: siVercel,
  figma: siFigma,
  rust: siRust,
  go: siGo,
  docker: siDocker,
  shadcnui: siShadcnui,
  hono: siHono,
  bun: siBun,
  fly: siFlydotio,
} as const;

export const TechIcon = memo(({ iconName, size = 24, className = '', style }: TechIconProps) => {
  // AWS用のカスタムアイコン（Simple Iconsにないため）
  if (iconName === 'amazonaws') {
    return (
      <div 
        className={`inline-flex items-center justify-center ${className}`}
        style={{ width: size, height: size, ...style }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={style?.color || 'currentColor'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
    );
  }

  const icon = iconMap[iconName as keyof typeof iconMap];
  
  if (!icon) {
    return (
      <div 
        className={`inline-flex items-center justify-center bg-gray-400 rounded ${className}`}
        style={{ width: size, height: size, ...style }}
      >
        <span style={{ fontSize: size * 0.5, color: 'white' }}>?</span>
      </div>
    );
  }

  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={style?.color || 'currentColor'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icon.path} />
      </svg>
    </div>
  );
});

TechIcon.displayName = 'TechIcon'; 
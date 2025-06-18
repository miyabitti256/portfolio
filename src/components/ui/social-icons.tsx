import { siGithub, siX, siZenn, siDiscord } from 'simple-icons';

interface IconProps {
  size?: number;
  className?: string;
}

// SVGアイコンのベースコンポーネント
const SvgIcon = ({ 
  path, 
  size = 24, 
  className = "",
  viewBox = "0 0 24 24" 
}: { 
  path: string; 
  size?: number; 
  className?: string;
  viewBox?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox={viewBox}
    className={className}
    fill="currentColor"
    role="img"
  >
    <path d={path} />
  </svg>
);

// GitHub アイコン
export const GitHubIcon = ({ size = 24, className = "" }: IconProps) => (
  <SvgIcon 
    path={siGithub.path} 
    size={size} 
    className={className}
    viewBox="0 0 24 24"
  />
);

// X (旧Twitter) アイコン
export const XIcon = ({ size = 24, className = "" }: IconProps) => (
  <SvgIcon 
    path={siX.path} 
    size={size} 
    className={className}
    viewBox="0 0 24 24"
  />
);

// Zenn アイコン
export const ZennIcon = ({ size = 24, className = "" }: IconProps) => (
  <SvgIcon 
    path={siZenn.path} 
    size={size} 
    className={className}
    viewBox="0 0 24 24"
  />
);

// Discord アイコン
export const DiscordIcon = ({ size = 24, className = "" }: IconProps) => (
  <SvgIcon 
    path={siDiscord.path} 
    size={size} 
    className={className}
    viewBox="0 0 24 24"
  />
); 
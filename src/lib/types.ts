// 共通の型定義

// アニメーション関連の型
export interface AnimationVariant {
  initial?: any;
  animate?: any;
  exit?: any;
  transition?: any;
  hidden?: any;
  visible?: any;
  rest?: any;
  hover?: any;
  tap?: any;
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  stagger?: number;
  repeat?: number;
  repeatType?: "loop" | "reverse" | "mirror";
}

// コンポーネントのベース型
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

// セクションプロパティ
export interface SectionProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  description?: string;
  background?: "light" | "dark" | "gradient";
}

// ボタンの型
export interface ButtonProps extends BaseComponentProps {
  variant?: "default" | "outline" | "ghost" | "link" | "destructive";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

// カードコンポーネントの型
export interface CardProps extends BaseComponentProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
  variant?: "default" | "outlined" | "elevated" | "filled";
  hoverable?: boolean;
  clickable?: boolean;
}

// モーダルプロパティ
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

// フォーム関連の型
export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
}

export interface InputProps extends FormFieldProps {
  type?: "text" | "email" | "password" | "tel" | "url" | "search";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface TextareaProps extends FormFieldProps {
  value?: string;
  rows?: number;
  cols?: number;
  resize?: "none" | "horizontal" | "vertical" | "both";
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

// ナビゲーション関連の型
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  badge?: string | number;
  disabled?: boolean;
  external?: boolean;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

// API関連の型
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  statusCode?: number;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  pagination: PaginationInfo;
}

// フィルター・検索関連の型
export interface FilterOption {
  value: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

export interface SearchParams {
  q?: string;
  category?: string;
  sort?: string;
  order?: "asc" | "desc";
  page?: number;
  limit?: number;
}

// メディア関連の型
export interface ImageInfo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  placeholder?: string;
  priority?: boolean;
}

export interface VideoInfo {
  src: string;
  poster?: string;
  width?: number;
  height?: number;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

// エラーハンドリング関連の型
export interface AppError {
  name: string;
  message: string;
  code?: string | number;
  statusCode?: number;
  stack?: string;
  cause?: Error;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: AppError;
  errorInfo?: React.ErrorInfo;
}

// テーマ関連の型
export interface ThemeConfig {
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    accent: Record<string, string>;
    neutral: Record<string, string>;
  };
  fonts: {
    sans: string[];
    serif: string[];
    mono: string[];
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}

// ユーティリティ型
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };
export type Nullable<T> = T | null;
export type Maybe<T> = T | undefined;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// React関連の型エイリアス
export type FC<P = {}> = React.FunctionComponent<P>;
export type ReactElement = React.ReactElement;
export type ReactNode = React.ReactNode;
export type ReactChildren = React.ReactChildren;
export type CSSProperties = React.CSSProperties;

// イベントハンドラーの型
export type MouseEventHandler<T = HTMLElement> = React.MouseEventHandler<T>;
export type ChangeEventHandler<T = HTMLElement> = React.ChangeEventHandler<T>;
export type KeyboardEventHandler<T = HTMLElement> = React.KeyboardEventHandler<T>;
export type FocusEventHandler<T = HTMLElement> = React.FocusEventHandler<T>;

// Ref関連の型
export type RefObject<T> = React.RefObject<T>;
export type MutableRefObject<T> = React.MutableRefObject<T>;
export type ForwardedRef<T> = React.ForwardedRef<T>;

// コンテキスト関連の型
export type ContextValue<T> = T | undefined;
export type ProviderProps<T> = {
  children: ReactNode;
  value: T;
};

// カスタムフック関連の型
export interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: AppError | null;
}

export interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

export interface UseLocalStorageReturn<T> {
  value: T | null;
  setValue: (value: T) => void;
  removeValue: () => void;
}

// パフォーマンス関連の型
export interface PerformanceMetrics {
  renderTime: number;
  componentCount: number;
  memoryUsage?: number;
  networkRequests?: number;
}

export interface LazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  disabled?: boolean;
} 
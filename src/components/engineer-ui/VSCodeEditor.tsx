'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderOpen, 
  Folder, 
  FileText, 
  Package,
  BookOpen,
  X,
  Menu,
  ChevronRight,
  ChevronDown,
  Settings,
  Search,
  GitBranch
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  icon: React.ComponentType<{ size?: number; className?: string }>;
  content?: React.ReactNode;
  extension?: string;
  children?: FileItem[];
}

interface Tab {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  content: React.ReactNode;
  modified?: boolean;
}

interface VSCodeEditorProps {
  projectName: string;
  files: FileItem[];
  onTabChange?: (tabId: string) => void;
}

export default function VSCodeEditor({ projectName, files, onTabChange }: VSCodeEditorProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [explorerExpanded, setExplorerExpanded] = useState(true);
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(280);
  const [dragStartX, setDragStartX] = useState<number>(0);
  const [dragStartWidth, setDragStartWidth] = useState<number>(280);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // モバイルではデフォルトでサイドバーを閉じる
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ドラッグ機能のハンドラー
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isMobile) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartWidth(sidebarWidth);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || isMobile) return;
    
    const deltaX = e.clientX - dragStartX;
    const newWidth = dragStartWidth + deltaX;
    
    if (newWidth < 150) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
      setSidebarWidth(Math.min(Math.max(newWidth, 200), 500));
    }
  }, [isDragging, isMobile, dragStartX, dragStartWidth]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    // ドラッグ終了時にbodyのカーソルをリセット
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  useEffect(() => {
    if (isDragging) {
      // ドラッグ中はbody全体にカーソルスタイルを適用
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      // クリーンアップ時にもbodyスタイルをリセット
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // サイドバーが再度開かれたときにデフォルト幅をリセット
  useEffect(() => {
    if (sidebarOpen && sidebarWidth < 200) {
      setSidebarWidth(280);
    }
  }, [sidebarOpen, sidebarWidth]);

  const openFile = (file: FileItem) => {
    if (file.type === 'folder') return;

    const existingTab = openTabs.find(tab => tab.id === file.id);
    if (existingTab) {
      setActiveTab(file.id);
      onTabChange?.(file.id);
      return;
    }

    const newTab: Tab = {
      id: file.id,
      name: file.name,
      icon: file.icon,
      content: file.content,
    };

    setOpenTabs(prev => [...prev, newTab]);
    setActiveTab(file.id);
    onTabChange?.(file.id);

    // モバイルでファイルを開いたらサイドバーを閉じる
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const closeTab = (tabId: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    
    setOpenTabs(prev => {
      const filtered = prev.filter(tab => tab.id !== tabId);
      
      // 閉じたタブがアクティブだった場合
      if (activeTab === tabId) {
        if (filtered.length > 0) {
          const newActiveTab = filtered[filtered.length - 1].id;
          setActiveTab(newActiveTab);
          onTabChange?.(newActiveTab);
        } else {
          setActiveTab('');
          onTabChange?.('');
        }
      }
      
      return filtered;
    });
  };

  const renderFileTree = (items: FileItem[], depth = 0) => {
    return items.map((item) => (
      <div key={item.id} style={{ marginLeft: `${depth * 12}px` }}>
        <div
          className={`flex items-center gap-2 px-2 py-1 text-sm text-gray-300 hover:bg-gray-700 cursor-pointer rounded transition-colors duration-200 ${
            activeTab === item.id ? 'bg-gray-700 text-white' : ''
          }`}
          onClick={() => item.type === 'file' ? openFile(item) : setExplorerExpanded(!explorerExpanded)}
        >
          {item.type === 'folder' ? (
            explorerExpanded ? (
              <ChevronDown size={16} className="text-gray-400" />
            ) : (
              <ChevronRight size={16} className="text-gray-400" />
            )
          ) : (
            <div className="w-4" />
          )}
          
          <item.icon 
            size={16} 
            className={
              item.type === 'folder' 
                ? 'text-blue-400' 
                : item.extension === '.md' 
                  ? 'text-blue-300'
                  : item.extension === '.json'
                    ? 'text-yellow-400'
                    : 'text-gray-300'
            } 
          />
          <span className="flex-1 truncate">{item.name}</span>
          {item.type === 'file' && activeTab === item.id && (
            <div className="w-2 h-2 bg-white rounded-full opacity-60" />
          )}
        </div>
        
        {item.type === 'folder' && item.children && explorerExpanded && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              {renderFileTree(item.children, depth + 1)}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    ));
  };

  const activeTabContent = openTabs.find(tab => tab.id === activeTab)?.content;
  const activeTabData = openTabs.find(tab => tab.id === activeTab);
  
  const getFileType = (tab?: Tab) => {
    if (!tab) return 'Text';
    if (tab.name.endsWith('.md')) return 'Markdown';
    if (tab.name.endsWith('.json')) return 'JSON';
    if (tab.name.endsWith('.js')) return 'JavaScript';
    if (tab.name.endsWith('.html')) return 'HTML';
    if (tab.name.endsWith('.css')) return 'CSS';
    if (tab.name.endsWith('.scss')) return 'SCSS';
    if (tab.name.endsWith('.tsx')) return 'TypeScript';
    if (tab.name.endsWith('.ts')) return 'TypeScript';
    if (tab.name.endsWith('.jsx')) return 'JavaScript';
    return 'Text';
  };

  return (
    <div 
      className={`relative flex flex-col h-full bg-gray-900 text-gray-100 rounded-lg overflow-hidden border border-gray-700 ${
        isDragging ? 'select-none' : ''
      }`}
      style={{ cursor: isDragging ? 'col-resize' : 'default' }}
    >
      {/* トップバー - 常に最上部 */}
      <div className="flex items-center justify-between p-2 bg-gray-800 border-b border-gray-700 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 hover:text-white p-1"
          >
            <Menu size={16} />
          </Button>
          
          {/* macOS風ドット */}
          <div className="flex gap-2 ml-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* メインコンテンツエリア */}
      <div className="flex flex-1 min-h-0">
        {/* サイドバー */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: isMobile ? '85%' : `${sidebarWidth}px`, 
                opacity: 1 
              }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`bg-gray-800 border-r border-gray-700 flex ${
                isMobile ? 'absolute inset-y-0 left-0 z-50' : 'relative'
              }`}
            >
              {/* サイドバーコンテンツ */}
              <div className="flex flex-col flex-1">
              {/* サイドバーヘッダー */}
              <div className="flex items-center justify-between p-3 border-b border-gray-700">
                <h3 className="text-sm font-medium text-gray-300">エクスプローラー</h3>
                {isMobile && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSidebarOpen(false)}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <X size={16} />
                  </Button>
                )}
              </div>

              {/* プロジェクトツリー */}
              <div className="flex-1 overflow-y-auto p-2">
                <div className="mb-4">
                  <div
                    className="flex items-center gap-2 text-sm text-gray-300 font-medium cursor-pointer hover:text-white transition-colors duration-200"
                    onClick={() => setExplorerExpanded(!explorerExpanded)}
                  >
                    {explorerExpanded ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                    <FolderOpen size={16} className="text-blue-400" />
                    <span className="uppercase tracking-wide">{projectName}</span>
                  </div>
                  
                  <AnimatePresence>
                    {explorerExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2"
                      >
                        {renderFileTree(files)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* サイドバーフッター */}
              <div className="p-3 border-t border-gray-700 flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                    <Search size={14} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                    <GitBranch size={14} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                    <Settings size={14} />
                  </Button>
                </div>
              </div>
              </div>

              {/* ドラッグハンドル（PC表示のみ） */}
              {!isMobile && (
                <div
                  className={`w-1 bg-transparent hover:bg-blue-500 cursor-col-resize transition-colors duration-150 ${
                    isDragging ? 'bg-blue-500' : ''
                  } relative`}
                  onMouseDown={handleMouseDown}
                >
                  {/* 実際のクリック領域を広げるための透明な領域 */}
                  <div className="absolute inset-y-0 -left-1 -right-1 cursor-col-resize" />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* メインエディタエリア */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* タブバー */}
          {openTabs.length > 0 && (
            <div className="flex bg-gray-800 border-b border-gray-700 overflow-x-auto">
              <AnimatePresence mode="popLayout">
                {openTabs.map((tab) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center gap-2 px-3 py-2 text-sm border-r border-gray-700 cursor-pointer transition-colors duration-200 whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-gray-900 text-white border-t-2 border-t-blue-500'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                    onClick={() => {
                      setActiveTab(tab.id);
                      onTabChange?.(tab.id);
                    }}
                  >
                    <tab.icon size={14} />
                    <span className={`truncate ${isMobile ? 'max-w-20' : 'max-w-32'}`}>{tab.name}</span>
                    {tab.modified && <div className="w-2 h-2 bg-white rounded-full" />}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => closeTab(tab.id, e)}
                      className="text-gray-400 hover:text-white p-0 w-4 h-4 ml-1"
                    >
                      <X size={12} />
                    </Button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* エディタコンテンツ */}
          <div className="flex-1 overflow-y-auto text-sm sm:text-base">
            <AnimatePresence mode="wait">
              {activeTabContent ? (
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  {activeTabContent}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center h-full text-gray-500"
                >
                  <div className="text-center">
                    <FileText size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="font-zen-maru">ファイルを選択してください</p>
                    <p className="text-sm text-gray-600 mt-2 font-zen-maru">
                      エクスプローラーからファイルをクリックして開始
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ステータスバー - 常に最下部 */}
      <div className="flex items-center justify-between px-3 py-1 bg-blue-600 text-white text-xs flex-shrink-0">
        <div className="flex items-center gap-4">
          <span>UTF-8</span>
          <span>LF</span>
          <span>{getFileType(activeTabData)}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>行 1, 列 1</span>
          <div className="flex items-center gap-1">
            <GitBranch size={12} />
            <span>main</span>
          </div>
        </div>
      </div>

      {/* モバイル用オーバーレイ */}
      {isMobile && sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
} 
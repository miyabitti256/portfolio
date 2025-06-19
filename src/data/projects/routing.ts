import { FileText, Package, Folder } from 'lucide-react';

// 型定義
export interface ProjectFile {
  id: string;
  name: string;
  type: 'file';
  icon: typeof FileText | typeof Package;
  extension: string;
  component: React.ComponentType | null;
}

export interface ProjectFolder {
  id: string;
  name: string;
  type: 'folder';
  icon: typeof Folder;
  children: ProjectFile[];
}



// 静的にプロジェクトファイル構造を定義
export const getProjectFileStructure = (): ProjectFolder[] => {
  return [
    {
      id: 'jihou-bot',
      name: 'Jihou-Bot Project',
      type: 'folder',
      icon: Folder,
      children: [
        {
          id: 'jihou-bot-readme-md',
          name: 'README.md',
          type: 'file',
          icon: FileText,
          extension: '.md',
          component: null
        },
        {
          id: 'jihou-bot-package-json',
          name: 'package.json',
          type: 'file',
          icon: Package,
          extension: '.json',
          component: null
        },
        {
          id: 'jihou-bot-learning-md',
          name: 'LEARNING.md',
          type: 'file',
          icon: FileText,
          extension: '.md',
          component: null
        }
      ]
    },
    {
      id: 'portfolio',
      name: 'Portfolio Website',
      type: 'folder',
      icon: Folder,
      children: [
        {
          id: 'portfolio-readme-md',
          name: 'README.md',
          type: 'file',
          icon: FileText,
          extension: '.md',
          component: null
        },
        {
          id: 'portfolio-package-json',
          name: 'package.json',
          type: 'file',
          icon: Package,
          extension: '.json',
          component: null
        },
        {
          id: 'portfolio-learning-md',
          name: 'LEARNING.md',
          type: 'file',
          icon: FileText,
          extension: '.md',
          component: null
        }
      ]
    }
  ];
};

// ファイルIDからプロジェクト名とファイル名を抽出
export const parseFileId = (fileId: string) => {
  // jihou-bot-readme-md -> { projectName: 'jihou-bot', fileName: 'readme-md.tsx' }
  // portfolio-package-json -> { projectName: 'portfolio', fileName: 'package-json.tsx' }

  if (fileId.startsWith('jihou-bot-')) {
    const filePart = fileId.replace('jihou-bot-', '');
    return {
      projectName: 'jihou-bot',
      fileName: `${filePart}.tsx`
    };
  } else if (fileId.startsWith('portfolio-')) {
    const filePart = fileId.replace('portfolio-', '');
    return {
      projectName: 'portfolio',
      fileName: `${filePart}.tsx`
    };
  }

  return null;
};

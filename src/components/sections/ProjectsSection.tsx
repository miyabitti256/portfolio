import { getProjectFileStructure } from '@/data/projects/routing';

// 動的コンポーネントを静的インポート
import JihouBotReadmeMd from '@/data/projects/jihou-bot/readme-md';
import JihouBotPackageJson from '@/data/projects/jihou-bot/package-json';
import JihouBotLearningMd from '@/data/projects/jihou-bot/learning-md';
import PortfolioReadmeMd from '@/data/projects/portfolio/readme-md';
import PortfolioPackageJson from '@/data/projects/portfolio/package-json';
import PortfolioLearningMd from '@/data/projects/portfolio/learning-md';
import ProjectsSectionClient from './ProjectsSectionClient';

// VSCodeEditor用のFileItem型を定義
export interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  iconName: string;
  content?: React.ReactNode;
  extension?: string;
  children?: FileItem[];
}

// Server Componentでコンテンツを生成
const getFileContent = (fileId: string): React.ReactNode => {
  // jihou-bot-readme-md -> jihou-bot / readme-md
  if (fileId === 'jihou-bot-readme-md') {
    return <JihouBotReadmeMd />;
  } else if (fileId === 'jihou-bot-package-json') {
    return <JihouBotPackageJson />;
  } else if (fileId === 'jihou-bot-learning-md') {
    return <JihouBotLearningMd />;
  } else if (fileId === 'portfolio-readme-md') {
    return <PortfolioReadmeMd />;
  } else if (fileId === 'portfolio-package-json') {
    return <PortfolioPackageJson />;
  } else if (fileId === 'portfolio-learning-md') {
    return <PortfolioLearningMd />;
  }

  return <div className="p-6 text-gray-300">ファイルが見つかりません</div>;
};

// プロジェクト毎のファイル構造を生成（Server Componentで実行）
const generateProjectFiles = (): FileItem[] => {
  const projectStructure = getProjectFileStructure();
  return projectStructure.map(project => ({
    id: project.id,
    name: project.name,
    type: 'folder' as const,
    iconName: 'Folder',
    children: project.children.map(file => ({
      id: file.id,
      name: file.name,
      type: file.type,
      iconName: file.extension === '.md' ? 'FileText' : 'Package',
      extension: file.extension,
      content: getFileContent(file.id)
    }))
  }));
};

// Server Component
export default function ProjectsSection() {
  const fileStructure = generateProjectFiles();

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            これまで開発したプロジェクトをVS Code風のエディターで探索できます。
            各プロジェクトのREADME、package.json、学習記録をご覧ください。
          </p>
        </div>

        <ProjectsSectionClient fileStructure={fileStructure} />
      </div>
    </section>
  );
}

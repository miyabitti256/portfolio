'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VSCodeEditor from '@/components/engineer-ui/VSCodeEditor';

// VSCodeEditor用のFileItem型を定義（ProjectsSectionから分離）
interface FileItem {
  id: string;
  name: string;
  type: 'file' | 'folder';
  iconName: string;
  content?: React.ReactNode;
  extension?: string;
  children?: FileItem[];
}

interface ProjectsSectionClientProps {
  fileStructure: FileItem[];
}

export default function ProjectsSectionClient({ fileStructure }: ProjectsSectionClientProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [_currentVSCodeTab, setCurrentVSCodeTab] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white rounded-xl shadow-2xl overflow-hidden"
      style={{ height: '600px' }}
    >
      <VSCodeEditor
        projectName="Portfolio Projects"
        files={fileStructure}
        onTabChange={(activeTab) => setCurrentVSCodeTab(activeTab)}
      />
    </motion.div>
  );
}


import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Toolbar } from './components/Toolbar';
import { FileGrid } from './components/FileGrid';

export type ViewMode = 'grid' | 'list';

export type FileItem = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  size?: string;
  modified: string;
  fileType?: string;
  shared?: boolean;
};

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-[1600px] mx-auto p-6">
            <Toolbar 
              viewMode={viewMode} 
              onViewModeChange={setViewMode}
              selectedCount={selectedItems.length}
            />
            
            <FileGrid 
              viewMode={viewMode}
              selectedItems={selectedItems}
              onSelectionChange={setSelectedItems}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

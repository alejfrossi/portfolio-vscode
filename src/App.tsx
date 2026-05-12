import { useState } from 'react';
import type { Language, FileId } from './data/types';
import { texts, filesData } from './data/portfolio';

function App() {
  const [lang, setLang] = useState<Language>('AR');
  const [openFiles, setOpenFiles] = useState<FileId[]>([]);
  const [activeFile, setActiveFile] = useState<FileId | null>(null);
  
  const toggleLanguage = () => {
    setLang(prevLang => (prevLang === 'AR' ? 'EN' : 'AR'));
  };

  const openFile = (fileId: FileId) => {
    if (!openFiles.includes(fileId)) {
      setOpenFiles([...openFiles, fileId]);
    }
    setActiveFile(fileId);
  };

  const closeFile = (fileId: FileId, event: React.MouseEvent) => {
    event.stopPropagation();
    
    const newOpenFiles = openFiles.filter(id => id !== fileId);
    setOpenFiles(newOpenFiles);
    
    if (activeFile === fileId) {
        setActiveFile(newOpenFiles.length > 0 ? newOpenFiles[newOpenFiles.length - 1] : null);
    }
  };

  const currentFiles = filesData[lang];

  return (
    <>
      <nav className="top-bar">
        <div className="site-title flex-row gap-8">
          <span className="material-symbols-outlined icon-lg color-darkblue">code</span>
          <span className="fs-14 fw-bold">Portfolio - Alejo Rossi</span>
        </div>
        <div className="controls">
          <button onClick={toggleLanguage} className="control-btn">
            {texts[lang].langNext}
          </button>
          <button className="control-btn">
            <span className="material-symbols-outlined">light_mode</span>
          </button>
        </div>
      </nav>

      <div className="main-layout">
        <aside className="activity-bar">
            <div className="icon active"><span className="material-symbols-outlined">content_copy</span></div>
            <div className="icon"><span className="material-symbols-outlined">search</span></div>
            <div className="icon"><span className="material-symbols-outlined">account_tree</span></div>
        </aside>

        <div className="container-right">
            <div className="working-area">
                
                <aside className="sidebar">
                    <div className="explorer-header" id="explorer-title">
                        {texts[lang].expHeader}
                    </div>
                    <div className="file-list">
                        {currentFiles.map((file) => (
                            <div 
                                key={file.id} 
                                className={`file ${activeFile === file.id ? 'active' : ''}`} 
                                onClick={() => openFile(file.id)}
                            >
                                <span className="material-symbols-outlined icon-sm" style={{ color: file.color }}>
                                    {file.icon}
                                </span> 
                                {file.title}
                            </div>
                        ))}
                    </div>
                </aside>

                <main className="main-content">
                    
                    {/* --- TABS --- */}
                    <header className="tabs">
                        {openFiles.map(id => {
                            const file = currentFiles.find(f => f.id === id);
                            if (!file) return null;

                            return (
                                <div 
                                    key={id} 
                                    className={`tab ${activeFile === id ? 'active' : ''}`} 
                                    onClick={() => openFile(id)}
                                >
                                    <span className="material-symbols-outlined tab-icon" style={{ color: file.color }}>
                                        {file.icon}
                                    </span>
                                    {file.title}
                                    <span className="material-symbols-outlined tab-close" onClick={(e) => closeFile(id, e)}>
                                        close
                                    </span>
                                </div>
                            );
                        })}
                    </header>
                    
                    {/* --- EDITOR --- */}
                    <section className="editor-view" style={{ justifyContent: activeFile ? 'initial' : 'center', alignItems: activeFile ? 'initial' : 'center' }}>
                        {activeFile ? (
                            <div style={{ padding: '20px', color: 'var(--text-color)' }}>
                                <h2>Mostrando el contenido de: {activeFile}</h2>
                            </div>
                        ) : (
                            <div className="empty-state">
                                <span className="material-symbols-outlined large-icon" style={{ fontSize: '60px' }}>code_blocks</span>
                                <p id="empty-msg" style={{ marginTop: '15px' }}>{texts[lang].emptyMsg}</p>
                            </div>
                        )}
                    </section>

                    {/* --- STATUS BAR --- */}
                    <div className="status-bar">
                        <div className="status-left">
                            <span id="status-msg">{texts[lang].statusMsg}</span>
                        </div>
                        <div className="status-right">
                            <span>{lang}</span>
                            <span>UTF-8</span>
                            <span>React TS</span>
                        </div>
                    </div>

                </main>

            </div>
        </div>
      </div>
    </>
  );
}

export default App;
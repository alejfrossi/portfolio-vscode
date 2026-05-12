export type Language = 'AR' | 'EN';

export interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    github: string;
    demo?: string;
}

export interface UITexts {
    expHeader: string;
    emptyMsg: string;
    statusMsg: string;
    langNext: string;
    featShow: string;
    featHide: string;
}

export type FileId = 'readme' | 'inicio' | 'sobre-mi' | 'proyectos';

export interface FileConfig {
    id: FileId;
    title: string;
    icon: string;
    color: string;
}
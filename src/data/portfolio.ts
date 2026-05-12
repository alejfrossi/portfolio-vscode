import type { Language, Project, UITexts, FileConfig } from './types';

export const texts: Record<Language, UITexts> = {
    'AR': {
        expHeader: 'EXPLORADOR',
        emptyMsg: 'Abrí un archivo desde el explorador',
        statusMsg: '✓ Portfolio casi listo para producción',
        langNext: 'EN',
        featShow: 'Ver Características',
        featHide: 'Ocultar Características'
    },
    'EN': {
        expHeader: 'EXPLORER',
        emptyMsg: 'Open a file from the explorer',
        statusMsg: '✓ Portfolio almost ready for production',
        langNext: 'AR',
        featShow: 'Show Features',
        featHide: 'Hide Features'
    }
};

export const projectsData: Record<Language, Project[]> = {
    'AR': [
        {
            id: 'portfolio-react',
            title: 'Mi Portfolio - VS Code Clone',
            description: 'Mi portfolio personal en el que se recrea la experiencia de un IDE con navegación por estados.',
            technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
            features: [
                'Arquitectura modular basada en componentes reutilizables.',
                'Gestión de estado global para archivos abiertos y navegación de pestañas.',
                'Soporte bilingüe completo (AR/EN) con diccionarios tipados.',
                'Sistema de temas dinámico (Dark/Light) inyectado mediante clases de CSS.',
                'Tipado estricto con TypeScript para prevenir errores en tiempo de ejecución.',
                'Diseño responsive adaptado para ofrecer una experiencia similar a VS Code en móviles.'
            ],
            github: 'https://github.com/alejfrossi/portfolio-vscode',
            demo: '#'
        },
        {
            id: 'task-manager',
            title: 'Administrador de Tareas',
            description: 'Aplicación Full Stack para la gestión de tareas, con una arquitectura desacoplada y diseño moderno.',
            technologies: ['FastAPI', 'React', 'Vite', 'SQLAlchemy', 'SQLite'],
            features: [
                'Arquitectura separada con Backend (API REST) y Frontend (SPA) totalmente desacoplados.',
                'Funcionalidad CRUD completa para crear, leer, actualizar y eliminar tareas.',
                'Persistencia de datos utilizando una base de datos SQLite.',
                'Interfaz de usuario moderna y rápida construida con React y Vite.',
                'Actualización optimista de la UI.',
                'Configuración profesional incluyendo manejo de CORS y variables de entorno.'
            ],
            github: 'https://github.com/alejfrossi/task-manager-fastapi-react',
            demo: 'https://fastapi-to-do-list.vercel.app/'
        },
        {
            id: 'stock-system',
            title: 'Sistema de Gestión de Stock',
            description: 'Sistema integral de inventarios con interfaz web administrativa, API RESTful para móviles y microservicio de reportes.',
            technologies: ['Django', 'DRF', 'FastAPI', 'Bootstrap'],
            features: [
                'Dashboard administrativo para gestión visual de productos.',
                'Control de stock transaccional con auditoría.',
                'Buscador inteligente con filtrado en tiempo real.',
                'API RESTful completa con endpoints CRUD accesibles vía JSON.',
                'Autenticación segura basada en Tokens.',
                'Documentación automática e interactiva de la API.',
                'Microservicio independiente en FastAPI para reportes PDF al vuelo.'
            ],
            github: 'https://github.com/alejfrossi/sistema-gestion-stock',
            demo: 'https://sistema-stock-alejo-rossi.onrender.com/'
        }
    ],
    'EN': [
        {
            id: 'portfolio-react',
            title: 'My Portfolio - VS Code Clone',
            description: 'My personal portfolio migrated to a modern stack, recreating an IDE experience with state-based navigation.',
            technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
            features: [
                'Modular architecture based on reusable components.',
                'Global state management for open files and tab navigation.',
                'Full bilingual support (AR/EN) with typed dictionaries.',
                'Dynamic theme system (Dark/Light) injected via CSS classes.',
                'Strict typing with TypeScript to prevent runtime errors.',
                'Responsive design tailored to provide a VS Code-like experience on mobile.'
            ],
            github: 'https://github.com/alejfrossi/portfolio-vscode',
            demo: '#'
        },
        {
            id: 'task-manager',
            title: 'Task Manager',
            description: 'Full Stack task management application with decoupled architecture and modern design.',
            technologies: ['FastAPI', 'React', 'Vite', 'SQLAlchemy', 'SQLite'],
            features: [
                'Separated architecture with fully decoupled Backend (REST API) and Frontend (SPA).',
                'Complete CRUD functionality.',
                'Data persistence using an SQLite database.',
                'Modern and fast user interface built with React and Vite.',
                'Optimistic UI updates.',
                'Professional configuration including CORS management.'
            ],
            github: 'https://github.com/alejfrossi/task-manager-fastapi-react',
            demo: 'https://fastapi-to-do-list.vercel.app/'
        },
        {
            id: 'stock-system',
            title: 'Inventory Management System',
            description: 'Robust inventory system with real-time stock control and cloud deployment.',
            technologies: ['Django', 'DRF', 'FastAPI', 'Bootstrap'],
            features: [
                'Administrative dashboard for visual management.',
                'Transactional stock control with input/output auditing.',
                'Intelligent search engine with real-time filtering.',
                'Complete RESTful API with CRUD endpoints.',
                'Secure Token-based authentication.',
                'Automatic and interactive API documentation.',
                'Independent FastAPI microservice for on-the-fly PDF report generation.'
            ],
            github: 'https://github.com/alejfrossi/sistema-gestion-stock',
            demo: 'https://sistema-stock-alejo-rossi.onrender.com/'
        }
    ]
};

export const filesData: Record<Language, FileConfig[]> = {
    'AR': [
        { id: 'readme', title: 'README.md', icon: 'description', color: '#4ec9b0' },
        { id: 'inicio', title: 'inicio.js', icon: 'terminal', color: '#3776ab' },
        { id: 'sobre-mi', title: 'sobre-mi.py', icon: 'person', color: '#f1e05a' },
        { id: 'proyectos', title: 'proyectos.jsx', icon: 'folder_open', color: '#995590' },
        { id: 'contacto', title: 'contacto.html', icon: 'mail', color: '#e34c26' }
    ],
    'EN': [
        { id: 'readme', title: 'README.md', icon: 'description', color: '#4ec9b0' },
        { id: 'inicio', title: 'home.js', icon: 'terminal', color: '#3776ab' },
        { id: 'sobre-mi', title: 'about-me.py', icon: 'person', color: '#f1e05a' },
        { id: 'proyectos', title: 'projects.jsx', icon: 'folder_open', color: '#995590' },
        { id: 'contacto', title: 'contact.html', icon: 'mail', color: '#e34c26' }
    ]
};
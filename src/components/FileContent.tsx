import { useState, useRef } from 'react';
import type { Language, FileId, Project } from '../data/types';
import { texts, projectsData } from '../data/portfolio';

const Icons = {
    github: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>,
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    download: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>,
    demo: <span className="material-symbols-outlined icon-md">rocket_launch</span>,
    chevron: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"></path></svg>
};

const ProjectCard = ({ project, lang }: { project: Project, lang: Language }) => {
    const [isOpen, setIsOpen] = useState(false);
    const ui = texts[lang];

    return (
        <div className="content-card">
            <h3 className="color-btn-purple mt-0">{project.title}</h3>
            <p>{project.description}</p>
            
            <div className="labels-container">
                {project.technologies.map(tech => <span key={tech} className="label">{tech}</span>)}
            </div>

            <div className="features-container">
                <button 
                    className={`toggle-features-btn ${isOpen ? 'open' : ''}`} 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {Icons.chevron} <span>{isOpen ? ui.featHide : ui.featShow}</span>
                </button>
                <div className="features-box" style={{ display: isOpen ? 'block' : 'none' }}>
                    <ul className="features-list">
                        {project.features.map((feat, i) => <li key={i}>▸ {feat}</li>)}
                    </ul>
                </div>
            </div>

            <div className="project-actions">
                <a href={project.github} target="_blank" rel="noreferrer" className="action-btn github-btn">
                    {Icons.github} GitHub
                </a>
                {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="action-btn demo-btn">
                        {Icons.demo} Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export const FileContent = ({ activeFile, lang }: { activeFile: FileId, lang: Language }) => {

    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState('');

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(lang === 'AR' ? 'Enviando...' : 'Sending...');

        const formData = new FormData(form.current!);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus(lang === 'AR' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
                form.current?.reset();
            } else {
                throw new Error('Error en el servidor');
            }
        } catch (err) {
            setStatus(lang === 'AR' ? 'Hubo un error, intenta de nuevo.' : 'Error, please try again.');
        }
    };
    
    if (activeFile === 'readme') {
        return (
            <div className="container">
                <h1 className="title">{lang === 'AR' ? '# ¡Bienvenid@ a mi portfolio!' : '# Welcome to my portfolio!'}</h1>
                <pre className="text">
                    {lang === 'AR' ? 'Utiliza el explorador de archivos para manejar qué ves.\n\n¡Espero que disfrutes de tu visita!' : 'Use the file explorer to manage what you see.\n\nI hope you enjoy your visit!'}
                </pre>
            </div>
        );
    }

    if (activeFile === 'inicio') {
        return (
            <div className="container">
                <div className="content-card">
                    <div className="profile-header">
                        <img src="/assets/alejo-rossi-profile-photo.jpg" alt="Foto de perfil" className="profile-pic" />
                        <div className="code-block ml-10">
                            <div className="mb-10">
                                <span className="keyword">const</span> <span className="variable">{lang === 'AR' ? 'desarrollador' : 'developer'}</span> = <span className="color-pink">{'{'}</span>
                            </div>
                            <div className="ml-20 flex-col gap-10">
                                <div><span className="variable">{lang === 'AR' ? 'nombre' : 'name'}</span> : <span className="string">"Alejo Rossi"</span>,<br/></div>
                                <div><span className="variable">{lang === 'AR' ? 'titulo' : 'title'}</span> : <span className="string">"Full Stack Developer"</span>,<br/></div>
                                <div><span className="variable">{lang === 'AR' ? 'ubicacion' : 'location'}</span> : <span className="string">"Buenos Aires, Argentina"</span>,<br/></div>
                                <div><span className="variable">{lang === 'AR' ? 'disponibilidad' : 'availability'}</span> : <span className="keyword">true</span>,</div>
                            </div>
                            <div className="mt-10"><span className="color-pink">{'}'}</span></div>
                        </div>
                    </div>
                </div>
                <div className="content-card">
                    <h2 className="color-heading my-10">Full Stack Developer</h2>
                    <p className="color-text lh-16">
                        {lang === 'AR' 
                            ? 'Soy un apasionado por la tecnología y el desarrollo de software, con experiencia en diseño y desarrollo web, proyectos personales y colaborativos. Me encanta poder transformar cualquier idea en un producto funcional. Siempre buscando aprender nuevas tecnologías, mejorar mis habilidades y colaborar en equipo.' 
                            : 'I\'m passionate about IT and software development, with experience in web design and development, personal and collaborative projects. I love transforming any idea into a functional product. Always looking to learn new technologies, improve my skills, and collaborate with teams.'}
                    </p>
                    <div className="flex-row gap-15 mt-20">
                        <a className="button" href="https://github.com/alejfrossi" target="_blank" rel="noreferrer" style={{ backgroundColor: '#393c57' }}>
                            {Icons.github} <span>GitHub</span>
                        </a>
                        <a className="button" href="https://www.linkedin.com/in/alejfrossi/" target="_blank" rel="noreferrer" style={{ backgroundColor: '#0077b5' }}>
                            {Icons.linkedin} <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    if (activeFile === 'sobre-mi') {
        const cvLink = lang === 'AR' ? '/assets/CV_Rossi.pdf' : '/assets/CV_English_Rossi.pdf';
        return (
            <div className="container">
                <span className="keyword">def</span> <span className="function">{lang === 'AR' ? 'desarrollador' : 'developer'}</span>() :
                <div className="content-card mt-20">
                    <span className="fw-bold color-blue fs-20">{lang === 'AR' ? 'Formación' : 'Education'}</span>
                    <ul className="my-10 lh-16">
                        <li>Ingeniería en Informática - UNDAV (En progreso)</li>
                        <li>Full Stack JavaScript - The Odin Project</li>
                        <li>Desarrollo de Videojuegos (Inicial) - UTN</li>
                        <li>Backend {lang === 'AR' ? 'con' : 'with'} Python, Node.js, Java, C#</li>
                        <li>Frontend {lang === 'AR' ? 'con' : 'with'} React, Vue.js, Angular</li>
                    </ul>
                </div>
                <div className="content-card mt-20 flex-col gap-10">
                    <span className="fw-bold color-green fs-20 mb-10">{lang === 'AR' ? 'Experiencia' : 'Experience'}</span>
                    <p className="fw-bold">Full Stack Developer (En progreso)</p>
                    <p>{lang === 'AR' ? 'Experiencia profesional: Cargando...' : 'Professional experience: Loading...'}</p>
                    <p className="mt-16 fw-bold">Web Designer {'>'} 2022 - 2026</p>
                    <p className="mt-16">{lang === 'AR' ? 'Proyectos propios, trabajos académicos y mucho debug!' : 'Personal and academic projects, and a lot of debugging!'}</p>
                </div>
                <div className="content-card mt-20 flex-col gap-10">
                    <span className="fw-bold color-purple fs-20 mb-10">{lang === 'AR' ? 'Intereses' : 'Interests'}</span>
                    <p>Frontend, Backend, UX/UI, {lang === 'AR' ? 'buenas prácticas y aprendizaje constante.' : 'good practices and continuous learning.'}</p>
                </div>
                <div className="content-card mt-20 flex-col gap-20">
                    <p>{lang === 'AR' ? 'Si querés conocer más sobre mi experiencia y formación:' : 'If you want to know more about my experience and background:'}</p>
                    <button className="button w-fit border-none cursor-pointer" style={{ backgroundColor: 'var(--accent-blue)' }} onClick={() => window.open(cvLink, '_blank')}>
                        {Icons.download} <span>{lang === 'AR' ? 'Descargar CV' : 'Download CV'}</span>
                    </button>
                </div>
            </div>
        );
    }

    if (activeFile === 'proyectos') {
        const proyectos = projectsData[lang];
        return (
            <div className="container">
                <span className="keyword">const</span> <span className="function">{lang === 'AR' ? 'proyectos' : 'projects'}</span>() = [
                
                {proyectos.map(proj => (
                    <ProjectCard key={proj.id} project={proj} lang={lang} />
                ))}
                
                ];
            </div>
        );
    }

    if (activeFile === 'contacto') {
        return (
            <div className="container">
                <h1 className="title">{lang === 'AR' ? '# Contacto' : '# Contact'}</h1>
                <div className="content-card">
                    <p className="color-text mb-10" style={{marginBottom: '20px'}}>
                        {lang === 'AR' 
                            ? 'Si tienes alguna propuesta o consulta, no dudes en escribirme.' 
                            : 'If you have any proposal or query, feel free to write to me.'}
                    </p>
                    
                    <form ref={form} onSubmit={sendEmail} className="flex-col gap-15">
                        <div className="flex-col gap-8">
                            <label className="fs-14 color-cyan">{lang === 'AR' ? 'Nombre' : 'Name'}</label>
                            <input type="text" name="user_name" required className="action-btn" style={{backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'white', padding: '10px', width: '100%', boxSizing: 'border-box'}} />
                        </div>
                        <div className="flex-col gap-8">
                            <label className="fs-14 color-cyan">Email</label>
                            <input type="email" name="user_email" required className="action-btn" style={{backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'white', padding: '10px', width: '100%', boxSizing: 'border-box'}} />
                        </div>
                        <div className="flex-col gap-8">
                            <label className="fs-14 color-cyan">{lang === 'AR' ? 'Mensaje' : 'Message'}</label>
                            <textarea name="message" required rows={5} className="action-btn" style={{backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'white', padding: '10px', width: '100%', boxSizing: 'border-box', fontFamily: 'inherit'}} />
                        </div>
                        
                        <button type="submit" className="button w-fit border-none cursor-pointer" style={{backgroundColor: 'var(--accent-blue)', marginTop: '10px'}}>
                            <span className="material-symbols-outlined">send</span>
                            <span>{lang === 'AR' ? 'Enviar Mensaje' : 'Send Message'}</span>
                        </button>

                        {status && <p className="fs-14 color-green mt-10">{status}</p>}
                    </form>
                </div>
            </div>
        );
    }

    return null;
};
# VS Code Clone Portfolio

Un portfolio personal interactivo desarrollado con **React** y **TypeScript**, diseñado para replicar la experiencia visual y funcional del editor **Visual Studio Code**. Este proyecto demuestra habilidades en arquitectura de componentes, gestión de estados complejos y despliegue de funciones serverless.

* **Link:** https://portfolio-alejfrossi.vercel.app/

## 🚀 Características Principales

* **Interfaz Realista de IDE**: Incluye barra de actividades, explorador de archivos dinámico, sistema de pestañas funcionales y barra de estado.
* **Gestión de Estados**: Manejo avanzado de archivos abiertos y navegación entre pestañas utilizando el hook `useState` de React.
* **Soporte Bilingüe**: Diccionarios de datos tipados que permiten alternar entre Español (AR) e Inglés (EN) de forma instantánea.
* **Temas Dinámicos**: Implementación de modo claro y oscuro mediante variables de CSS y manipulación del tema en tiempo real.
* **Contacto Automatizado**: Formulario de contacto integrado con la API de **Resend** a través de **Vercel**.
* **Arquitectura Escalable**: Separación estricta entre la capa de datos (proyectos y textos) y la lógica de renderizado de componentes.

## 🛠️ Tecnologías Utilizadas

* **Frontend**: React, TypeScript, Vite.
* **Estilos**: CSS moderno 
* **Backend / API**: Resend API y Vercel Functions para el manejo de correos electrónicos.
* **Iconografía**: Material Symbols (Google Fonts) y Lucide Icons

## 📖 Instalación y Uso

1. Clona el repositorio en tu máquina local.
2. Instala las dependencias necesarias: `npm install`.
3. Configura tu variable de entorno `RESEND_API_KEY` en tu archivo `.env`.
4. Inicia el servidor de desarrollo: `npm run dev`.
## Proyecto Node.js

## Descripción

Este proyecto utiliza Node.js y npm.

Requisitos

Node.js (versión LTS recomendada)

npm (incluido con Node.js)

## Instalación


## Crear un Proyecto con Vite

npm create vite@latest mi-proyecto --template react-ts

## Después, entra al proyecto:
cd mi-proyecto
npm install


## Agregar Tailwind CSS  para poder ver los estilos

npm install -D tailwindcss postcss autoprefixer


## Instalar @tailwindcss/postcss dependencias de tailwind CSS

npm install -D @tailwindcss/postcss

## Instalar axios
npm install axios

## Ejecutar proyecto
npm run dev



### Configurar server
cd mi-api

npm init -y
npm install express @prisma/client cors dotenv
npm install --save-dev prisma nodemon

### Inicializar Prisma
npx prisma init

### ejecutar server
npm run dev
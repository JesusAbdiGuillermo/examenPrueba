# Instalar dependecias de mi-proyecto 

Este proyecto utiliza Node.js y npm.

## Requisitos

Node.js (versión LTS recomendada)

npm (incluido con Node.js)

## Instalación

### 1- Después, entra al proyecto:
cd mi-proyecto
npm install


### 2- Agregar Tailwind CSS  para poder ver los estilos

npm install -D tailwindcss postcss autoprefixer


### 3- Instalar @tailwindcss/postcss dependencias de tailwind CSS

npm install -D @tailwindcss/postcss

### 4 - Instalar axios
npm install axios

### 5 - Ejecutar proyecto
npm run dev



# Configurar api mi-api
cd mi-api

npm init -y
npm install express @prisma/client cors dotenv
npm install --save-dev prisma nodemon

## ejecutar server
npm run dev

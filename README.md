# Instalar dependecias de mi-proyecto 

Este proyecto utiliza Node.js y npm.

## Requisitos

Node.js (versión LTS recomendada)

npm (incluido con Node.js)

## Instalación

### 1- Después, entra al proyecto:
`cd mi-proyecto`

`npm install`


### 2- Agregar Tailwind CSS  para poder ver los estilos

`npm install -D tailwindcss postcss autoprefixer`


### 3- Instalar @tailwindcss/postcss dependencias de tailwind CSS

`npm install -D @tailwindcss/postcss`

### 4 - Instalar axios
`npm install axios`

### 5 - Ejecutar proyecto
`npm run dev`



# Configurar api mi-api
`cd mi-api`

## 1- instalar express prisma client
`npm install express @prisma/client cors dotenv`
`npm install --save-dev prisma nodemon`
## 2- ejecutar las migraciones
`npx prisma migrate dev --name inicial`
## 3- verificar que se creo la bd con los datos
`npx prisma studio`
## 4- ejecutar server
`npm run dev`

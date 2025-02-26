# Usa una imagen base oficial de Node.js para construir la app
FROM node:18-alpine AS build

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Construir la aplicación
RUN npm run build

# Servir la aplicación con un servidor estático de producción
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist /app/dist
CMD ["serve", "-s", "dist", "-l", "3000"]

# Exponer el puerto del contenedor
EXPOSE 3000


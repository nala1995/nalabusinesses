# Etapa de construcción
FROM node:16-alpine AS build

# Establecer directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:16-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar las dependencias de node_modules desde la etapa de construcción
COPY --from=build /app/node_modules ./node_modules

# Copiar los archivos de construcción desde la etapa de construcción
COPY --from=build /app/build ./build

# Copiar el código fuente
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 5000

# Iniciar la aplicación
CMD ["npm", "start"]

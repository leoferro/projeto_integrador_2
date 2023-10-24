FROM node:16
ENV NODE_ENV development

WORKDIR /app

# Copia o arquivo de packages e instala as dependências.
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

# Copia o restante dos arquivos
 COPY . .

# Expose port 3000
EXPOSE 3000

CMD ["npm","start"]


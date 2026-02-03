# Imagem base do Node.js
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Porta usada pela aplicação
EXPOSE 8080

# Comando para iniciar a API
CMD ["npm", "run", "start"]

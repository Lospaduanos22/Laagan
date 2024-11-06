FROM node:20-alpine

WORKDIR /app

COPY package*.json . 

RUN npm install
RUN npm install install react-router-dom

COPY . .

EXPOSE 5174

CMD ["npm", "run", "dev"]


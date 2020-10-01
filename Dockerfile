FROM node:14.8.0-alpine3.12
WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app

CMD node app.js
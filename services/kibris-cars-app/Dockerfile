FROM node:14 AS production 

ARG NODE_ENV=production 
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package.json .  
COPY npm.lock .

RUN npm global install @nestjs/cli
RUN npm install --production=true

RUN apt-get -qupdate && apt-get -qy install netcat 

COPY . .

RUN npm run build

CMD ["sh", "c", "npm typeorm migration:run && npm start:prod"]
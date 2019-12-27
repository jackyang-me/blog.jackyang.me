FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g cnpm
RUN cnpm i

COPY . .

EXPOSE 4141
CMD npm run start-server

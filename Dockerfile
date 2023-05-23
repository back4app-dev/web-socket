FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN SLEEP 600

EXPOSE 8080

CMD ["npm", "start"]

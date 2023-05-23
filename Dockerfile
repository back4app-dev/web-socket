FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN apk --no-cache add coreutils
RUN ash -c "sleep 600"

EXPOSE 8080

CMD ["npm", "start"]

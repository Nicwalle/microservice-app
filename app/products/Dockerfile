FROM node:alpine

COPY . /app
COPY wait-for-mongodb.sh /usr/wait-for-mongodb.sh
RUN chmod +x /usr/wait-for-mongodb.sh

WORKDIR /app

RUN npm install --production

CMD /usr/wait-for-mongodb.sh --timeout=0 users-db:27017 & npm start

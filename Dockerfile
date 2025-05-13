FROM node:20.12.1
 
ENV http_proxy "http://localhost:3128/"
ENV https_proxy "http://localhost:3128/"
 
RUN mkdir /app
WORKDIR /app

ADD build /app/build

RUN npm install express

COPY server.js .


CMD ["node", "server.js"]
USER node


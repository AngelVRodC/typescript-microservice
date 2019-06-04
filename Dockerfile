FROM mhart/alpine-node:8.14.0

RUN mkdir /app
ADD ./ /app
WORKDIR /app
RUN apk update
RUN apk add --no-cache bash
RUN npm install -g ts-node typescript tslint mocha yarn node-gyp nodemon
RUN yarn install
RUN rm -rf /var/cache/apk/*

RUN tsc
EXPOSE 3000
CMD [ "node", "dist/main.js" ]

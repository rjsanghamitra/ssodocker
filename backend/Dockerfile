# specifying the base images to fetch from the docker registry
FROM node:21-alpine

ENV NODE_ENV development

WORKDIR /backend

COPY . .

EXPOSE 3001

RUN npm install

# command that will be run first after starting the container
CMD ["nodemon", "index.js"]
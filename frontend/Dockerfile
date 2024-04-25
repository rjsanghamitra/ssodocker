# specifying the base images to fetch from the docker registry
FROM node:21-alpine

WORKDIR /frontend

COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend/package.json

EXPOSE 5173

RUN npm install

# command that will be run first after starting the container
CMD ["npm", "run", "dev"]
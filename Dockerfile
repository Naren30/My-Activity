### STAGE 1: Build ###
FROM node:16.17.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build
# 2. Deploy our Angular app to NGINX
FROM nginx:alpine

## Replace the default nginx index page with our Angular app
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /dist /usr/share/nginx/html

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM node:latest as build

WORKDIR /app

COPY ./ /app/

RUN npm install

RUN npm run build --prod

FROM nginx:latest

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
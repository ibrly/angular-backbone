FROM node as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build --prod
FROM nginx:1.17.1-alpine as production-stage
COPY --from=build-stage /app/dist/angular-backbone/browser /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

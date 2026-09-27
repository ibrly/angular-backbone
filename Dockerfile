FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY ./ .
RUN npm run build -- --configuration production
FROM nginx:1.27-alpine as production-stage
COPY --from=build-stage /app/dist/angular-backbone/browser /usr/share/nginx/html
COPY --from=build-stage /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80

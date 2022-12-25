FROM node:latest
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
EXPOSE 8085
CMD [ "http-server", "dist" ]
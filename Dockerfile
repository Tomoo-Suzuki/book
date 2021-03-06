FROM node:13.12.0-alpine
RUN echo "now building..."
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8888
CMD ["npm", "start"]
RUN echo "npm start..."
FROM node:10

# App directory:
WORKDIR /usr/src/app

# Copy package to directory:
COPY package*.json /usr/src/app/

# Run install libaries:
RUN npm install

COPY . .

EXPOSE 1111

CMD [ "node","comment_service.js" ]

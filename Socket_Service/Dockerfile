FROM node:10

# App directory:
WORKDIR /usr/src/app

# Copy package to directory:
COPY package*.json /usr/src/app/

# Run install libaries:
RUN npm install

COPY . .

EXPOSE 2222

CMD [ "node","socket_service.js" ]

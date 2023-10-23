#
# https://stackoverflow.com/questions/51097652/install-node-modules-inside-docker-container-and-synchronize-them-with-host
#
FROM node:latest

# Create and define the node_modules's cache directory.
RUN mkdir /usr/src/cache
WORKDIR /usr/src/cache

# Install the application's dependencies into the node_modules's cache directory.
COPY package.json .
COPY package-lock.json .
RUN npm install

# Set the working directory to /home/node/app
WORKDIR /home/node/app
COPY . .

# Expose port 3000
EXPOSE 3000
#
# https://stackoverflow.com/questions/51097652/install-node-modules-inside-docker-container-and-synchronize-them-with-host
#
FROM node:16
ENV NODE_ENV development

# Create and define the node_modules's cache directory.
WORKDIR /home/node/app
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install

# Install the application's dependencies into the node_modules's cache directory.
COPY . .

# Expose port 3000
EXPOSE 3000

CMD ["npm","start"]


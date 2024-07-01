# FROM node:latest

# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm run build

# RUN rm -rf node_modules

# EXPOSE 4200

# CMD ["node", "dist/front-devops/server/server.mjs"]

# Fetch node image 
FROM node:latest

# Set the working directory (Inside the container)
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Build angular application 
RUN npm install

# Copy the source code to the container
COPY . .

RUN npm run build 

# Expose the port 4200
EXPOSE 4000

# Start the application
CMD ["npm","run", "serve:ssr"] 
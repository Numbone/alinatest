# Use an official Node runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install app dependencies
RUN yarn install

# Bundle app source
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]

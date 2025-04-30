# Use a base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Expose port and define start command
EXPOSE 5000
CMD ["npm", "start"]

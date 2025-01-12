# Use Node.js base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install backend dependencies
COPY package*.json ./
RUN npm install

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 4100

# Start backend server
CMD ["node", "src/components/Backend/server.js"]

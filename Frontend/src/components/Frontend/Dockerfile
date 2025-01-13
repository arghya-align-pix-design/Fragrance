# Use Node.js base image for build step
FROM node:16 as build

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code and build it
COPY . .
RUN npm run build

# Use nginx to serve the built frontend
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to serve frontend
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

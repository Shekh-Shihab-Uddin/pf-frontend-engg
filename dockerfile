FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the app
RUN npm run build

# Production Stage
FROM node:18-alpine

WORKDIR /app

# Copy the build files from the build stage
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/

# Install production dependencies
RUN npm install
# Expose port 80 (because we're using port 80 in the config)
EXPOSE 80

# Start Vite preview server on port 80
CMD ["npm", "run", "dev","--", "--host", "0.0.0.0", "--port", "80"]

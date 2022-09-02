# Name the node stage "builder"
FROM node:14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .

ENV GENERATE_SOURCEMAP=false
# install node modules and build assets
RUN export NODE_OPTIONS=--max-old-space-size=30000
RUN npm install && npm run build

# nginx state for serving content
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
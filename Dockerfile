FROM node:22.3-alpine

WORKDIR /app
COPY . .
RUN npm install && npm run build

CMD ["node", "./dist/server/entry.mjs"]
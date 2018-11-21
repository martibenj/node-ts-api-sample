FROM node:8 AS base
RUN mkdir -p /srv
WORKDIR /srv
COPY .npmrc .
COPY package.json .
COPY package-lock.json .

FROM base AS builder
RUN npm install --unsafe-perm
COPY . .
RUN npm run build

FROM builder AS tester
RUN mkdir -p reports
ENV NODE_ENV test
RUN npm run ci:lint
RUN npm run ci:test

FROM base
RUN npm install --production --unsafe-perm
COPY --from=builder /srv/config config
COPY --from=builder /srv/lib lib
COPY --from=builder /srv/swagger.json .
EXPOSE 3000
CMD ["node", "lib/index.js"]

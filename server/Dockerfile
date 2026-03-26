FROM node:25.6.1-alpine3.23 AS build
COPY package.json .
RUN npm install
COPY tsconfig.json .
COPY src src
RUN yarn build

FROM node:25.6.1-alpine3.23
COPY --from=build dist dist
# ou npm install --omit=dev pour éviter les dépendances de développement
COPY --from=build node_modules node_modules
COPY --from=build package.json .
CMD yarn start
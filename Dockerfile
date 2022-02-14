FROM node:16 AS deps
RUN apt-get update
RUN apt-get upgrade --yes
COPY ./package.json /app/
COPY ./yarn.lock /app/
WORKDIR /app
RUN yarn

FROM deps AS build
COPY . /app/
WORKDIR /app
RUN yarn build

FROM build
COPY --from=build /app/build /app/
WORKDIR /app
ENTRYPOINT ["npx", "serve", "-s", ".", "-l", "8080"]
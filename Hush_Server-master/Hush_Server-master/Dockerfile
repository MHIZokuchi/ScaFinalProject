# FROM node:10.15.2-alpine AS appbuild
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY ./ ./

# # Build Stage 2
# # This build takes the production build from staging build
# #
# FROM node:10.15.2-alpine
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY --from=appbuild /app/ ./
# EXPOSE 5300
# CMD npm start


FROM node:16-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5300

CMD npm start
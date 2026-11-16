FROM node:22-alpine AS build
WORKDIR /mera_micaela_ui_garden_build_checks
ENV HUSKY=0
COPY package.json package-lock.json .npmrc ./
RUN npm ci
COPY . .
RUN npm run build
FROM node:22-alpine
WORKDIR /mera_micaela_ui_garden_build_checks
RUN npm install -g serve
COPY --from=build /mera_micaela_ui_garden_build_checks/build ./build
EXPOSE 8018
CMD ["serve", "-s", "build", "-l", "8018"]
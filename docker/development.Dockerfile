FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV PORT=8080
RUN corepack enable

WORKDIR /app

RUN npm i -g @nestjs/cli

COPY . /app

FROM base AS dev-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM base
COPY --from=dev-deps /app/node_modules /app/node_modules

EXPOSE $PORT
EXPOSE 9229

CMD [ "nest", "start", "--watch", "--debug", "0.0.0.0:9229"]
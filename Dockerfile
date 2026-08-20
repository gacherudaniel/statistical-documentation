# Reproducible build of the whole platform: Quarto renders docs-source/ into
# public/docs/, then Vite builds the React app around it and nginx serves the
# result. The documents contain no executable code chunks, so no R or Python
# runtime is needed — only Quarto itself.

# ---- Stage 1: render docs + build the app -----------------------------------
FROM node:20-bookworm-slim AS builder

ARG QUARTO_VERSION=1.8.27
# The image serves from the domain root, unlike the GitHub Pages subpath.
ARG VITE_BASE=/
ENV VITE_BASE=${VITE_BASE}

RUN apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates curl \
    && curl -fsSL -o /tmp/quarto.deb \
        "https://github.com/quarto-dev/quarto-cli/releases/download/v${QUARTO_VERSION}/quarto-${QUARTO_VERSION}-linux-amd64.deb" \
    && apt-get install -y --no-install-recommends /tmp/quarto.deb \
    && rm -f /tmp/quarto.deb \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# The `prebuild` hook renders every Quarto document before Vite runs.
RUN npm run build

# ---- Stage 2: serve ---------------------------------------------------------
FROM nginx:1.27-alpine AS runtime

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

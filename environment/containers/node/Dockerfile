# Base image declaration
FROM node:19-alpine3.15 as base_image

RUN apk add  --no-cache npm


# Development image declaration
FROM base_image as development

COPY ./containers/node/entrypoint.development.sh /entrypoint/entrypoint.sh
RUN chmod +x /entrypoint/entrypoint.sh
WORKDIR /app
ENTRYPOINT ["sh", "/entrypoint/entrypoint.sh"]

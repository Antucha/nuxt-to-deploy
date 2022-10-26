FROM node:16


WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 5000
COPY DockerfileEntryPoint.sh /usr/local/bin/DockerfileEntryPoint.sh
RUN chmod 744 /usr/local/bin/DockerfileEntryPoint.sh
ENTRYPOINT ["DockerfileEntryPoint.sh"]

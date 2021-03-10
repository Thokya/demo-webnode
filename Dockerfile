FROM node
WORKDIR /home/node/app
COPY app /home/node/app
RUN npm install
ENV PORT=4000
EXPOSE 4000
CMD npm run app
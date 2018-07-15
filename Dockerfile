
FROM leica19/node-ubuntu
WORKDIR /root/hoge
RUN npm i express --save
RUN npm i pug --save
RUN npm install mongoose --save
ADD . /root/hoge/

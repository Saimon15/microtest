#use Node v8 as base image
FROM node:7

#add everything in the current directory to the image within 'app' directory
ADD . /app

#Install dependencies
RUN cd /app; \
	npm install --production

#Expose server port
EXPOSE 4200

#Run app
CMD ["node","/app/bin/www"]

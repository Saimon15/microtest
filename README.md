# microtest

To run the app in your local machine, from the project directory run 'npm install'

Once done, make sure mongod process for mongoDB is running in the background. Open the file 'config/db.config' and on line 3 change the name of the host from 'mong' to 'localhost' and save. Then run 'npm start'

The project runs on port 4200, so make sure that port is unoccupied

To dockerise the project, first make sure that the name of the host mentioned above is set to 'mong' instead of 'localhost', and then from the project directory run 'docker-compose build'. Once done first make sure that port 27017 is free, and then run 'docker-compose up' to start the container. You will be able to access the service by going to 'localhost:4200/values'

Once the project is up and running, you can test all 3 endpoints described in the spec sheet

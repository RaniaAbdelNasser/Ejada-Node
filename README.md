# Ejada-Node

## Getting started
To get the Node server running locally:

- Clone this repo
- npm install to install all required dependencies
- Install Mysql  Edition  and run it by executing shell
- npm start to start the local server
Alternately, to quickly try out this repo in the cloud, you can Remix on Glitch

## Code Overview
### Dependencies
- expressjs - The server for handling and routing HTTP requests
- express-jwt - Middleware for validating JWTs for authentication
- jsonwebtoken - For generating JWTs used by authentication
- mysql - For modeling and mapping mysql data to javascript


## Application Structure
- app.js - The entry point to our application. 
This file defines our express server and connects it to mysql using sql.
It also requires the routes and models we'll be using in the application.
- config/ - This folder contains configuration for passport as well as a central location for configuration/environment variables.
- api/(apiName)/routes/ - This folder contains the route definitions for our API.
- api/(apiName)/controller/ - This folder contains the control definitions for our API.
- api/(apiName)/service/ - This folder contains the query definitions for our API.
-client/build folder of frontend for project (react Application Build)
##  Error Handling
In api/(apiName)/controller/, we define a error-handling middleware for handling mysql's ValidationError. 
This middleware will respond with a success:0 
and format the response to have error messages the clients can understand

## Authentication
Requests are authenticated using the Authorization header with a valid JWT. We define two express middlewares in routes/auth.js that can be used to authenticate requests.
The required middleware configures the express-jwt middleware using our application's secret and will return a 401 status code if the request cannot be authenticated. 
The payload of the JWT can then be accessed from req.payload in the endpoint.


The optional middleware configures the express-jwt in the same way as required, but will not return a 401 status code if the request cannot be authenticated.

Creating a Full stack project by using MERN Stack 

you need 2 separate folder for backend and frontend 

in this project for creating backend :
		1. npm init -y ----> this file is for package.json
		2. npm i express --> installs the express server
		
For using global values we use dotenv to integarte the values into our file 
	- npm i dotenv

	const dotenv = require('dotenv');
	dotenv.config();  --- this code will help load the env file into the current file 
	


CORS- Cross origin Resource Sharing
-simply a way where a client web app will be loaded in one domain and can gain access to the resources that are present in other domain 
- mainly it is used while integrating the third-party APIs
	const cors = require('cors');
	app.use(cors());
	
	
	
For Database or Creating the models for the project we are going to use MongoDB
	Mongoose - An ODM(Object Data Modelling) that helps MongoDB and Node.js to interact
			- provides a structured way to interact with the schema and models of the project 
	installing Mongoose--->	npm install mongoose


to connect to the database create a folder inside backend ----> backend>database>connect.js



* In case of port not available do this :
	On CMD:
		netstat -ano | findstr : port number(ex:4000)
		
		then copy the PID 
		taskkill /PID (ex: 24500) /F
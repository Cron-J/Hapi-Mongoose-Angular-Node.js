Hapi-Mongoose-Angular Example
========================

The purpose of this app is to show a new way to work with Hapi.js, Mongodb, Mongoose, Angular.js.


### Install an app

Run the following command in root directory of an app in command prompt.

###### *Install node packages*

server/ node install

###### *Install bower components*

client/src/ bower install

### Run an app

###### *Run Server*

Run the following command in root directory of an app in command prompt.

server/ node server.js

You can see the port number in command prompt after sucessfull run

You can change the settings in server/config/config.js file

### *API Available*

###### *Create User*

	POST: http://localhost:8000/user

	{
	"userId": "www.cronj.com",
	"username": "gaurav_bng@hotmail.com"
	}

###### *Get All Users*

	GET: http://localhost:8000/user

###### *Get User By userId*

	GET:  http://localhost:8000/user/{userId}
      
      Example : http://localhost:8000/user/www.cronj.com

###### *Update User By userId*

	PUT: http://localhost:8000/user/{userId}

     Example : http://localhost:8000/user/www.cronj.com

	{
	"username": "gaurav@cronj.com"
	}

###### *Delete User By userId*

	DELETE: http://localhost:8000/user/{userId}

			Example : http://localhost:8000/user/www.cronj.com


### Other Usefull Link

[Visit Blog For Explanation] (http://cronj.com/blog/hapi-mongoose/)

[Can also look into Hapi File Upload And Download for all type] (https://github.com/Cron-J/Hapi-file-upload-download)

[Express-Mongoose-Angular] (https://github.com/Cron-J/Express-file-upload-download)

[JWT-Hapi-Mongoose-Mongodb-with-email-verification-and-forgot-password] (https://github.com/Cron-J/JWT-Hapi-Mongoose-Mongodb-with-email-verification-and-forgot-password)



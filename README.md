##RESTful demo

node.js for backend/server

html/javascript for frontend/client

MongoDB is used for permanent data storage

127.0.0.1:8080

![image](https://github.com/ningzhao/githubImage/blob/master/RESTful/mongo_roadsign_1.png)

## Challenge Overview

 Implement a web service that can receive road sign observations. A road sign observation is defined by the following attributes:

  **latitude**: double  
  **longitude**: double  
  **type**: enum (e.g. *SPEED_LIMIT_30*, *PASSING_RESTRICTION*)

 Please design and implement a REST web service that is capable of receiving one observation at a time.

 The received observation shall be stored internally on the back-end server. Persistent storage of these observations is not required.

 The web service shall be used to provide vehicles with road signs for a given location. Since your fleet might report the same sign multiple time, it will send you multiple observations of the same sign. When requesting nearby signs, the vehicle shall be able to provide a latitude and longitude position together with a radius in which road signs shall be searched and returned. In this search radius, at most one instance of a **type** shall be returned (e.g. 5 *SPEED_LIMIT_30* signs were reported; only 1 shall be returned). The web-service shall be able to serve all recognized road sign types to a requesting vehicle.

##Notice

installed packages for node.js by command line

$npm install --save-dev nodemon

$npm install express --save

$npm install mongoose --save

![image](https://github.com/ningzhao/githubImage/blob/master/RESTful/server_preinstall_1.png)


Added extension for Chrome

Allow-Control-Allow-Origin: *


##Quick Start

start MongoDB by command line

$./mongod

start server.js

$npm run start

Use browser go to

localhost:8080

##Result

A simple webpage is like this:

![image](https://github.com/ningzhao/githubImage/blob/master/RESTful/webpage_1.png)

Click on *Show all roadsign*, all roadsigns will be shown in the Response:

![image](https://github.com/ningzhao/githubImage/blob/master/RESTful/webpage_2.png)

To add a roadsign, you need to input number for latitude and longitude, and select a type.

![image](https://github.com/ningzhao/githubImage/blob/master/RESTful/webpage_3.png)

*findOneAndUpdate()* method is used here to avoid duplicates, and also enable the update.

![image](https://github.com/ningzhao/githubImage/blob/master/RESTful/webpage_4.png)

To search roadsigns in a radius to a latitude and longitude, only one instance of a type is return in response:

![image](https://github.com/ningzhao/githubImage/blob/master/RESTful/webpage_5.png)

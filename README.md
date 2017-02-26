# alexbainter

This is my personal portfolio/online-resume website built with the MERN stack (Mongo, Express, React, Node). It also uses Redux to manage state and webpack to build.

You should be able to view the live site at [alexbainter.com](http://alexbainter.com).

## Installation
### Prerequisites
You will need to install the following before you can run the site locally:
 - [MongoDB](https://www.mongodb.com/)
 - [Node.js](https://nodejs.org/)

### Steps
1. Ensure you have Mongo running. By default, the site uses a mongo collection named 'alexbainter'. See [the mongo documentation](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/) for more details. On windows, you should be able to just type `mongod --dbpath /data/alexbainter` into a command prompt.
1. Clone the repository or download the source code.
1. Navigate to directory where you cloned/downloaded the repository.
1. Run `npm install` from a command prompt.
1. Run `npm start` from a command prompt. You should see some output from node and webpack.
1. Navigate to http://localhost:3000 to view the site.

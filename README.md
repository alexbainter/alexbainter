# alexbainter

This is my personal portfolio/online-resume website built with the MERN stack
(Mongo, Express, React, Node). It also uses Redux to manage state and webpack to
build.

You should be able to view the live site at
[alexbainter.com](http://alexbainter.com).

## Running

### Prerequisites

You will need to install the following before you can run the site locally:

* [MongoDB](https://www.mongodb.com/)
* [Node.js](https://nodejs.org/)

### Steps

1. Ensure you have Mongo running. By default, the site uses a mongo collection
   named 'alexbainter'. See
   [the mongo documentation](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/)
   for more details.

   On Windows, you should be able to just type `mongod` into a command prompt.
   If you aren't using the default data path, you can use the `--dbpath` option.
   For example, `mongod --dbpath /data/alexbainter`

   On linux, execute `sudo service mongodb start`

1. Clone the repository or download the source code.
1. Navigate to directory where you cloned/downloaded the repository.
1. Run `npm install` from a command prompt.
1. (Optional) Run `npm run seed` from a command prompt to seed the database.
1. Run `npm dev` from a command prompt. You should see some output from node and
   webpack.
1. Navigate to http://localhost:3000 to view the site.

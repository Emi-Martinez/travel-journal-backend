# travel-journal-backend
This is an **API** for [travel-journal](https://github.com/Emi-Martinez/travel-journal-frontend) application

This API is used to:
* Get the locations in the database.
* Create locations.
* Update them.
* Delete locations.

## How to set up the API on your local machine
If you want to clone and run this application, you will need [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/download/) (wich comes with [npm](https://www.npmjs.com/)) and [MySQL](https://dev.mysql.com/downloads/) (a relational database management system) installed in your computer.
From your command line:
```bash
# Clone this repository
$ git clone https://github.com/Emi-Martinez/travel-journal-backend

# Go into the folder
$ cd travel-journal-backend

# Install dependencies
$ npm install

# Set up the database
$ npm run setUpDataBase
# And follow its instructions

# Run the app
$ npm start
```
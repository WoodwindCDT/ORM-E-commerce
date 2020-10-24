# **ORM-E-commerce**

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  
  ## Description 
  
  This project was created for an e-Commerce website's back end JS. The code includes models, api-routes, seeds, db, connection config, and a central server.js file all focused around creating an easy, simple _behind-the-scenes_ network for sales management.
  
  ## Table of contents
  
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [More](#Questions)
  
  
  ## Installation
  
  Click here for an Instructional Video!
  > (Incoming)
  
  ## Usage
  
  > Using this project requires [**Node.js**](https://nodejs.org/en/), a [**Command**](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmd) terminal to initialize the generator, and a Root Password for [**SQL**](https://dev.mysql.com/doc/) to access DB Usage.

Example:
- cd desktop
- cd ORM-E-commerce
- cd Develop
- npm install (to install all dependencies)
- mysql -u root -p
- **Must** type your MySQL Password
- source db/schema.sql
- \q or quit **to exit sql command**
- Navigate to the .env file in the _Develop_ folder >> **Must** type your MySQL Password between the **''** at DB_PW='', in the .env file
- npm run seed (Filling tables/rows ( with db content) from folder _seeds_)
- npm start (to initialize)
- Type in your brower the localHost server address & complete the url with the desired endpoints
    > EX: http://localhost:3001/

  ## Questions?

  Account: **WoodwindCDT**

  Email: woodwind.turbeville@gmail.com

  More: [Checkout my Work](https://github.com/WoodwindCDT)

  Used Dependencies :

    - [dotenv](https://www.npmjs.com/package/dotenv): "^8.2.0",

    - [express](https://www.npmjs.com/package/express): "^4.17.1",

    - [sequelize](https://www.npmjs.com/package/sequelize): "^6.3.5",

    - [mysql2](https://www.npmjs.com/package/mysql2): "^2.2.5"

  ## License
  This Project is licensed via MIT
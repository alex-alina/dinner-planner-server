## Meal Planner - Server

This is a server for a meal planner app, current state is MVP.
* The project was initially started in a private repository on Bitbucket, then added to this Github public repo, which makes the pull requests’ summary unavailable here. A list of my commits can be seen [here](https://github.com/alex-alina/dinner-planner-server/commits?author=alex-alina).

## Demo
[Working MVP Demo](https://loized.com/img/meal/video_meal.gif)
![](video_meal.gif)

## Tech stack
* TypeScript
* Koa
* routing-controllers
* TypeORM
* PostgreSQL 

## MVP's Features:
* Sign in/Log in page
* Meal Planner Page 
* Change recipe button
* Add to (shopping) list button
* Shopping cart button, displays the shopping list
* Print Shopping List / Clear Shopping List buttons 
* Log out button

## Description

The MVP was developed as part of a full-stack web app for a real world project. A team of four developers and one UI/UX designer (all [Codaisseur](https://codaisseur.com/) graduates) worked to develop/design it. 

The goal was to develop the basic features for a meal planner that helps people plan healthier meals more efficiently. It also included:
- creating user accounts
- a recipes' list
- generating a shopping list that included all the necessary ingredients in the right quantity (calculated for the number of household members)

This planner gives its users access to quality recipes, but it does not allow a user to add their own recipes. Only an admin could add recipes to the data base. 

The backend exposes a REST API. 

### Out of scope for this MVP:

* Creating an admin account or endpoints to add recipes were out of scope for this project so the recipes were added to the database by writing and running an SQL script with DBeaver. 

### Endpoints: 

* `POST /users`: sign up as new user
* `POST /logins`: log in and receive a JWT
* `GET /recipes`: list all recipes
* `GET /recipes/:id([0-9]+)`: list one recipe

## Setup

* You need a working Postgres database that is preferably empty and running. To populate the database with dummy data use a SQL script and run it with your Postgres client.
* Install the dependencies using `npm install`
* Start the server using `npm start`
* Start compiling using `nmp run compile`
* You can now access endpoints with HTTPie commands on `localhost:4000`

## Contributions:
* Set up the project and first private remote repo on Bitbucket.
* Created the models and routing controllers for users, login, and recipes.
* Created the database models and their relations for recipes, ingredients, planner, recipeingredients, units and users.
* Deployed server on Heroku.
* Wrote SQL script to add data in the Postgres database managed by Heroku.
* Populated the Postgress database managed by Heroku with the recipes received from the PO, using Dbeaver.

## Authors and acknowledgment
* Alina Rusu (me) - [Junior Full-Stack Web-developer](https://www.linkedin.com/in/alina-rusu/)
* [David Behal](https://github.com/DavidB59) - [Junior Full-Stack Developer](https://www.linkedin.com/in/davidbehal/)
* [Hoan Phung](https://github.com/hoanphungt) - [Full-stack Junior Developer ](https://www.linkedin.com/in/hoanphung/)
* [Loize Dalco](https://loized.com/) - [UX/ UI Designer](https://www.linkedin.com/in/loize-dalco/)
* [Sabina Dhaugoda](https://github.com/sabeenski) - [Junior FullStack Developer](https://www.linkedin.com/in/sabinadhaugoda/)

Working on a real world project in an agile team that included a well prepared Project Owner, a great UI/UX Designer and three hard working and solution oriented developers was a great opportunity and fun experience that came with so much learning and professional growth.

Good planning, SCRUM, open communication and a constant focus on priorities helped us deliver the required MVP in two weeks and for that I'd like to thank my teammates for their grit, determination, humor and positive attitude.


## License
MIT Licence - Copyright &copy; 2018 - Alina Rusu, David Behal, Hoan Phung, Loize Dalco, Sabina Dhaugoda.

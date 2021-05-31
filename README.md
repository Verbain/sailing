# sailling
sailing project for T&amp;C Factory 

sailing est une application web permettant de mettre en opposition deux équipes,
ces deux équipes engagerons une mise de "Sailing Coin" le gagnant repart avec tout!

#Features
_actuellement disponible_
* create new team
* join team
* create new match
* join match
* add money into wallet

#Techno
REACT - Front  
NODE.JS - Back  
Postgresql - Database  
GitHub - Versioning

#Run lastest version locally
if you want join us to developpe Sailling follow these step :
### first step clone the project
```
$git clone https://github.com/Verbain/sailing.git
$git checkout -b main
$git pull origin main
```
### add .env to ur project
you will need to add 2 .env one for the front and one for the back

#####front .env path: /front_sailing
_for get acces to these key, you need to be added into auth0 project_
```
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=
```
##### .env path: ./
_for get acces to auth0,MIXPANEL key, you need to be added into auth0 project_
```
PORT=4000
URL = https://euw1.api.riotgames.com
API_KEY= get ur api key on riot game dashboard
DATABASE_URL=
AUTH0_AUDIENCE=
AUTH0_DOMAIN=
AUTH0_CLIENT_ID=
MIXPANEL_TOKEN=

```
### Initialise ur Database
```
$ cd back_sailing
$ docker-compose up
```
when you created ur docker container, connect your database and get the URL and put it 
on the .env ./
#####load the data from migration
```
$ knex migrate:latest
$ knex seed:run
```
#####reload the data from migration
```
$ knex migrate:rollback
$ knex migrate:latest
$ knex seed:run
```
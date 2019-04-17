# node js 
 >  JavaScript
 > Typescript
 > Expressjs
 > REST

 Basic Skeleton for developing a nodejs API, with user registraion and authentication features.

The REST end-points are exposed through src/route.ts .

* Steps to setup on local

Need to have node and npm installed
> Fork from github
> run npm install
> install PostgreSQL
> Change the connection settings to in App :
    const db =  knex({
    client :'pg',
    connection:{
        host: "127.0.0.1", // Local host
        user: "",
        password: "",
        database: "database_name"
        }
    });
> In Postman:
    >  localhost:5000
    >  /login - POST ("email":"example@abc.com", "password":"something_random")
    >  /signup - POST ("name":"Some_name", "email":"example@abc.com", "password":"something_random")
    
     The signup  POST request adds users to the db , hashes and stores the passwords.
     login request only returns some data , when user is already registered.
    
>  All other exposed endpoints are unused , just returning some random messages. Features to be added in the future. :p


*****Cheers*****

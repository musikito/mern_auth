# Mern User AUTH

## Dependencies

* [bcryptjs](https://www.npmjs.com/package/bcryptjs): used to hash passwords before we store them in our database.
* [body-parser](https://www.npmjs.com/package/body-parser): used to parse incoming request bodies in a middleware
* [concurrently](https://www.npmjs.com/package/concurrently): allows us to run our backend and frontend concurrently and on different ports
* [express](https://www.npmjs.com/package/express): sits on top of Node to make the routing, request handling, and responding easier to write
* [is-empty](https://www.npmjs.com/package/is-empty): global function that will come in handy when we use validator
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): used for authorization
* [mongoose](https://www.npmjs.com/package/mongoose): used to interact with MongoDB
* [passport](https://www.npmjs.com/package/passport): used to authenticate requests, which it does through an extensible set of plugins known as strategies
* [passport-jwt](https://www.npmjs.com/package/passport-jwt): passport strategy for authenticating with a JSON Web Token (JWT); lets you authenticate endpoints using a JWT
[validator](https://www.npmjs.com/package/validator): used to validate inputs (e.g. check for valid email format, confirming passwords match)
* [nodemon](https://nodemon.io/):Nodemon is a utility that will monitor for any changes in your code and automatically restart your server




/*
    First things first , setup your environment , and initialize the entry script ( app.js or index.js) as a start you can create a simple server
    to test your initialization.
*/

// Base Dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const database = require('./models');
// Custom Dependencies
const { notFound, errorHandler, unless } = require('./utils/middlewares');

/*
    If you want to handle multiple environmets like { E2E, Staging, Test, etc} you can add a path property and specify the loctaion of the file 
    you want to load

    require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })
*/ 

// Load the environment variables only on environments different from production, you should rather set the values directly on the production host.
if ( process.env.NODE_ENV !== 'production' ){
    require("dotenv").config();
}

// Initialize Database
// database.initialize();

const app = express();

// Setup Middlewares
app.use(morgan());
app.use(bodyParser.json());
app.use(unless(require('./middlewares/authentication'), '/api/auth/login', '/api/auth/register'));

app.get('/', function(req, res){
    res.send("Access granted");
});

// Import routes
require('./routes/auth')(app);
require('./routes/categories')(app);
require('./routes/products')(app);

app.use(notFound);
app.use(errorHandler);

/*
    When the Node process boots up it will automatically provide you access to all existing env variables by storing them into the `env `
    object as property of the global `process` object

    Some of them don't exist or are undefined, however you can explicitly set them in your node applocation.

    NOTE: One thing to mention here is that those variables will exist only in this process context and will be available only in the child processes
    forked ( spawned ) by this process. Nevertheless you should avoid overriding environment variables.

*/
// console.log(process.env)

const PORT = process.env.PORT || 5050;

app.listen(PORT, () =>{
  console.log(`Server is running on localhost:${PORT}`);
})

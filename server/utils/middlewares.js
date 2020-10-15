
// TODO: Move to middlewares folder
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
};

const errorHandler = (error, req, res, next) => {
    const statusCode = res.status === 200 ? 500: res.statusCode
    res.status(statusCode)
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '' : error.stack
    });
};

// Helper function to exclude urls from middleware
const unless = function(middleware, ...paths){
    return function(req, res, next){
        const matchedPath = paths.some(path => path === req.path);
        return matchedPath ? next() : middleware(req, res, next);
    }
}

/* 
 The module.exports is a special object which is included in every JavaScript file in the Node.js app by default:

    module => is a variable that represents the current module
    exports => is an objet that will be exposed as a module.

    Down below we attach methods to to the exports object. This will expose an object with 2 methods ( notFound and errorHandler)
*/
module.exports = {
    notFound,
    errorHandler,
    unless
}
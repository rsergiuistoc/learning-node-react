# React.js Notes

Here are some important notes about react which I wrote down through my learning

## Create Custom Development Toolchain

Facebook has provided an easy way to setup an development environment through `create-react-app`. Why should we not use this ?

One good reason why you should even consider building an custom toolchain is to have a deep understanding about what is going on under the hood . You will have a better point of view, an to cover the big picture of React.

Like all standard javascript projects we should start with the basic initializaiton with `npm init`

This Javascript toolchain consists of:

- **The Package Manager**

Here you can choose between *yarn* or *npm*. It let's you choose vrom a rich third-party dependencies, and easily install and update them.

- **The Bundler**

*webpack* or *parcel* let's you to write modular code pieces and package them togheter in the form of bundles in optimized time.

- **The Compiler**

*Babel* enables you to write modern Javascript code and make it work on olde browsers.

### Babel

### Webpack



## React

The beauty of react are the components, which let's you to split your UI into, multiple independent, reusable elements, and build each part in isolation.

You can watch a component as a Javascript function that takes a series of inputs ( "props" ), 
and return React elements describing what should apper on the screen.

We define components in two forms:

```
function Timer(props){
    return <h1> You have {props.time} left </h1>;
}
```
These are called function components because they are literally just Javascript functions.

Or by using ES6 classes.

```
class Timer extends React.Component {
    render() {
        return <h1> You have {this.props.time} left</h1>;
    }
}
```

Those two examples from above are equivalent from React's point of view.


Rule of thumb, if a component repeats itself and has many usages all over the app, or it
is complex enough to be a part of its own implementation.

## Styling in React

### Separate File

In my opinion this is the easiest approach to use here, simple enough for anybody to understand. We extract all our css styling in a separate
file with the extention: `.css`, `scss`, etc, and after that we import the file in our `.jsx` file and apply them.

### Styled Components

### CSS in JS

### Inline CSS


## React Forms

### Controlled Forms

### Uncontrolled Forms

### Handle Inputs

### Handle Form Validation

Extremley common for web applications. 

Create form context that holds all the states for all interactions from inputs.

We need: 
- Form data -> for user's input
- Validations -> for field specific validations
- Errors -> for field specific errors


## React Composition Model
Allows you to build your application as a set of reusable components.


## Sending Request to Server with React

### Axios
A Javascript library used to make HTTP requests from node.js or XMLHttpRequests, supports Promise API and is native to JS ES6

Advantages

- Wide range browser support
- Handles XSRF protection over requests 
- Automatic JSON data transformation

Overall Axios provides an easy-to-use way to deal with HTTP requests. It is also possible to reproduce some of its key-features using `fetch()` 
method provided by web browsers. 

### Fetch API
The Fetch API provides `fetch() method` defined on the window object. It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline ( requests and responses ), uses Promises to retrieve the response from request.


## Configure React for Multi Environment stages


### JSON file
You can store the configuration data in a JSON file. And then load the file using the `import` statement. Then you can use the data as any other Javascript object.

```
{
    "SERVER_URL": "https://example.com/api,
}
```

```
import configData from "./config.json";

const serverUrl = configData.SERVER_URL;
```

### .env File

### WebPack
In webpack, there is a configuration option called `externals`, which provides a way of excluding dependencies from the bundles.
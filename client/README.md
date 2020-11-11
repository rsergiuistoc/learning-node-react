## React.js Notes

Here are some important notes about react which I wrote down through my learning

### Create Custom Development Toolchain

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
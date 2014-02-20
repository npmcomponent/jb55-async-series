*This repository is a mirror of the [component](http://component.io) module [jb55/async-series](http://github.com/jb55/async-series). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jb55-async-series`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# async-series

  Execute a list of asyncronous functions one after another

  Super tiny!

## Installation

  Install with [component(1)](http://component.io):

    $ component install jb55/async-series

## API

```javascript
function a(callback) {
  callback(null, 1);
}

function b(callback) {
  setTimeout(function() {
    callback(null, 2);
  }, 5);
}

series([a, b], function (err, results) {
  // results is [1,2]
});
```

## License

  MIT

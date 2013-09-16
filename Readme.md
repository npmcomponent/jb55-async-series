
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

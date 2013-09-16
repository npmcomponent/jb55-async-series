
var series = require('..');

function a(cb) {
  return cb(null, 1);
}

function b(cb) {
  setTimeout(function () {
    return cb(null, 2);
  }, 1);
}

function c(cb) {
  return cb(null, 3);
}

function error(cb) {
  return cb("errord");
}

describe('series', function () {
  it('should return 1,2,3', function (done) {

    series([a, b, c], function (err, results) {
      results[0].should.equal(1);
      results[1].should.equal(2);
      results[2].should.equal(3);
      done();
    });
  });

  it('should break early on error', function (done) {
    series([a, error, b, c], function (err, results) {
      results.length.should.equal(1);
      done();
    });
  });
});

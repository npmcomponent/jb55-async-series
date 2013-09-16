
module.exports = function asyncSeries (tasks, cb) {
  var results = []; 
  var next;
  var i = 0;

  var exit = function(err) {
    return cb(err, results);
  };

  function handler (err, r) {
    next = tasks[++i];
    if (err != null) return cb(err, results);
    results.push(r);
    if (next) return next(handler);
    else return exit()
  }

  var fn = tasks[0];
  if (fn) fn(handler);
  else exit();
};

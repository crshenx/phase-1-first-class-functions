function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  return function cd() {
    console.log(`asdf`);
  };
}

function returnsAnAnonymousFunction() {
  return function () {};
}

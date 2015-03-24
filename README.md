# es6-sleep

ES6 ready sleep function.

To install:

    npm install es6-sleep

To use, let's say while inside some Koa middleware:

    var sleep = require('es6-sleep');

    app.use(function *() {
        // do something
        yield sleep(1000);
        // continue
    });

# es6-sleep

ES6 ready sleep function, provides generator and promise.

To install:

    npm install es6-sleep

## Changes from 1.X

Now that async/await is becoming more popular, I've updated this module to provide both legacy (generator) functionality, along with a promise too. If you're updating to 2.X from 1.X, all you need to change is:

    var sleep = require('es6-sleep');

to

    var sleep = require('es6-sleep').generator;

## Usage

To use the generator, say within a co runner, or within Koa middleware:

    const sleep = require('es6-sleep').generator;

    app.use(function *() {
        // do something
        yield sleep(1000);
        // continue
    });

To use the promise, let's say with async/await:

    const sleep = require('es6-sleep').promise;

    (async function () {
        // do something
        await sleep(1000);
        // continue
    })();

## License

MIT

## Issues

If you have any issues with the 2.X upgrade, please pop it in a GitHub issue or submit a PR and I'll get to it ASAP.

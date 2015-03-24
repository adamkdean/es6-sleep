var sleep = function(ms) {
    return function(done) {
        setTimeout(done, ms);
    }
};

module.exports = exports = sleep;

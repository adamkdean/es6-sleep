module.exports = exports = {
  generator: function (ms) {
    return (done) => { setTimeout(done, ms); }
  },
  promise: function (ms) {
    return new Promise(r => setTimeout(r, ms));
  }
}

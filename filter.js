const Transform = require('stream').Transform;

class Filter extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, encoding, callback) {
    const value = parseInt(chunk.toString(), 10);
    if (value > 100) {
      callback();
      return;
    }
    this.push(chunk);
    callback();
  }
}

module.exports = Filter;

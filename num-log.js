const Writable = require('stream').Writable;

class NumLogger extends Writable {
  constructor(options) {
    super(options);
  }

  _write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
}

module.exports = NumLogger;

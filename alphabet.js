const stream = require('stream');

class Alphabet extends stream.Readable {
  constructor(options) {
    // stream.Readable.call(this, options);
    super(options);
    this._start = 'a';
    this._end = 'z';
    this._curr = this._start.charCodeAt(0);
  }

  _read() {
    const letter = String.fromCharCode(this._curr);
    const buf = new Buffer(letter, 'utf8');
    this.push(buf);
    this._curr++;
    if (letter === this._end) {
      this.push(null);
    }
  }
};

// Alphabet.prototype = Object.create(stream.Readable.prototype);
// Alphabet.prototype.constructor = Alphabet;

// Alphabet.prototype._read = function() {
//   const letter = String.fromCharCode(this._curr);
//   const buf = new Buffer(letter, 'utf8');
//   this.push(buf);
//   this._curr++;
//   if (letter === this._end) {
//     this.push(null);
//   }
// };

module.exports = Alphabet;

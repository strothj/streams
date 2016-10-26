const Readable = require('stream').Readable;

class RandomGen extends Readable {
  constructor(options, count) {
    super(options);
    this._count = count ? count : 100;
    this._curr = 0;
  }

  _read() {
    const randNum = Math.floor(Math.random() * 1000);
    const buf = Buffer.from(randNum.toString());
    this.push(buf, 'utf8');
    this._curr++;
    if (this._curr > this._count) {
      this.push(null);
    }
  }
}

module.exports = RandomGen;
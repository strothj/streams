var Alphabet = require('./alphabet');
var Cache = require('./cache');
var alpha = new Alphabet();
var cache = new Cache('alpha1');
var cache2 = new Cache('alpha2');

const RandomGen = require('./random');
const randomGen = new RandomGen();
const NumLogger = require('./num-log');
const numLogger = new NumLogger();
const Filter = require('./filter');
const filter = new Filter();

alpha.pipe(cache);
(new Alphabet).pipe(cache2);

function logCache() {
  console.log('Cache store:');
  for (var key in Cache.store) {
    console.log(key, ':', Cache.store[key]);
  }
}

// cache.on('finish', logCache);
// cache2.on('finish', logCache);

randomGen.pipe(filter).pipe(numLogger);

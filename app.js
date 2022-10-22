const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory Available:' + totalMemory);
console.log('Free Memory Available:' + freeMemory);

// ES6 / ES2015 : ECMAScript 6
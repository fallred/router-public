let pathToRegExp = require('path-to-regexp');
let pathname = '/user/detail/1/2';
let keys = [];

// let reg = pathToRegExp('/home', [], {end: false});
// console.log(reg);

let reg = pathToRegExp('/user/detail/:id/:name', keys, {end: false});
let [url, ...values] = pathname.match(reg);
console.log(keys.map(item=>item.name));
console.log(values);
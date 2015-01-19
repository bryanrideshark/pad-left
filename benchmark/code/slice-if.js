'use strict';

var repeat = require('repeat-string');

module.exports = function padLeft(val, num, str) {
  var padding = '';

  if (num <= 2 && !str) {
    padding = '00';
  } else if (num <= 3 && !str) {
    padding = '000';
  } else if (num <= 5 && !str) {
    padding = '00000';
  } else if (num <= 25 && !str) {
    padding = '000000000000000000000000000';
  } else if (num <= 50 && !str) {
    padding = '0000000000000000000000000000000000000000000000000000';
  } else if (num <= 100 && !str) {
    padding = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
  } else {
    return repeat(str || '0', num) + val;
  }

  return (padding + val).slice(num - val.length);
};
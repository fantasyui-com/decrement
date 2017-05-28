const find = require('lodash/find');
const shuffle = require('lodash/shuffle');

module.exports = function (options = {}) {
  const data = []; // data is empty at boot.
  const manager = {
    insert: object => data.push(object),
    change: (parameters, value) => {
      const found = find(shuffle(data), parameters);
      if (found) data[data.indexOf(found)].value = data[data.indexOf(found)].value + value;
      if(data[data.indexOf(found)].value < options.min) data[data.indexOf(found)].value = options.min;
      if(data[data.indexOf(found)].value > options.max) data[data.indexOf(found)].value = options.max;
    },
    data: () => {
      return data;
    },
    total: () => {
      return data.map(i => i.value).reduce((a, v) => a + v, 0);
    }
  }
  return manager;
}

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = moment;
function moment(d) {
  var _d = d === undefined ? new Date() : new Date(d);

  var year = '' + _d.getFullYear();
  var simpleYear = year.substr(year.length - 2);
  var month = padZero(_d.getMonth() + 1);
  var day = padZero(_d.getDay());
  var hour = padZero(_d.getHours());
  var minute = padZero(_d.getMinutes());
  var seconds = padZero(_d.getSeconds());

  return {
    format: function format() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM-DD HH:mm:SS';

      return pattern.replace(/YYYY/g, year).replace(/YY/g, simpleYear).replace(/MM/g, month).replace(/DD/g, day).replace(/HH/g, hour).replace(/mm/g, minute).replace(/SS/ig, seconds);
    }
  };
}

function padZero(v) {
  return v < 10 ? '0' + v : v;
}
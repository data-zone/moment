export default function moment(d) {
  const _d = d === undefined ? new Date() : new Date(d);

  const year = '' + _d.getFullYear();
  const simpleYear = year.substr(year.length - 2);
  const month = padZero(_d.getMonth() + 1);
  const day = padZero(_d.getDay());
  const hour = padZero(_d.getHours());
  const minute = padZero(_d.getMinutes());
  const seconds = padZero(_d.getSeconds());

  return {
    format(pattern = 'YYYY-MM-DD HH:mm:SS') {
      return pattern
        .replace(/YYYY/g, year)
        .replace(/YY/g, simpleYear)
        .replace(/MM/g, month)
        .replace(/DD/g, day)
        .replace(/HH/g, hour)
        .replace(/mm/g, minute)
        .replace(/SS/ig, seconds);
    },
  };
}

function padZero(v) {
  return v < 10 ? `0${v}` : v;
}
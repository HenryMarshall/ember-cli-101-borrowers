// We wrap the call to `moment#format` in the function `formatDate` which we
// _can_ consume as a module by doing `import { formatDate } from 'utils/date-
// helpers;'. This can easily be replaced by the moment module when it supports
// `import` directly.
function formatDate(date, format) {
  // We could easily switch to using a different library, but keep out interface
  // the same.
  return window.moment(date).format(format);
}
export {
  formatDate
};
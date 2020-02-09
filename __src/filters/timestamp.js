/*
  A simple ISO timestamp for Nunjucks
*/
module.exports = function (date) {
  //let timestamp = new Date()
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
}

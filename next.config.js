const nextTranslate = require('next-translate')

module.exports = {
  reactStrictMode: true,
  TrailingSlash: true,
  ...nextTranslate(),
}

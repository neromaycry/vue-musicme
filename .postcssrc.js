// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-aspect-ratio-mini": {},
    "postcss-write-svg": {},
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      viewportWidth: 414,
      viewportHeight: 622,
      unitPrecision: 3,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    },
    "postcss-viewport-units": {},
    "cssnano": {
      preset: 'advanced',
      autoprefixer: false,
      "postcss-zindex": false
    },
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}

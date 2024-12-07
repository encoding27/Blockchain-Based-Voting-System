const browserify = require('browserify');
const fs = require('fs');

browserify('./src/js/app.js')
  .transform('browserify-shim')
  .bundle()
  .pipe(fs.createWriteStream('./src/dist/app.bundle.js'));

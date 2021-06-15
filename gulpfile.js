const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');

/**
 * Clean dist folder building
 * 
 * @param {Function} cb 
 */
const cleanFiles = function (cb) {
  gulp.src('dist/*')
    .pipe(clean())
  cb();
}

/**
 * build latest js code to older for browser support
 * 
 * @param {Function} cb 
 */
const build = function (cb) {
  gulp.src('js/*.js')
    .pipe(webpack({
      mode:'development',
      output: {
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest('dist'));
  cb();
}

// export default build
exports.default = gulp.series(cleanFiles, build);

/**
 * watching files for changes
 */
exports.watch = () => {
  gulp.watch('js/*.js', { ignoreInitial: false }, gulp.series(cleanFiles, build))
}
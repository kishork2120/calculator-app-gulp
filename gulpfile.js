const gulp = require('gulp');
const webpack = require('webpack-stream');
const clean = require('gulp-clean');
const htmlmin = require('gulp-html-minifier');
const uglify = require('gulp-uglify');

/**
 * Clean dist folder building
 */
const cleanFiles = function () {
  return gulp.src('dist/*')
    .pipe(clean())
}

/**
 * build latest js code to older for browser support
 */
const build = function () {
  return gulp.src('js/*.js')
    .pipe(webpack({
      mode:'development',
      output: {
        filename: 'bundle.js'
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
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
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
    .on('error',(err)=>{
      console.log(err)
    })
}

/**
 * minify html file
 */
const minifyHtml = ()=>{
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
    .on('error',(err)=>{
      console.log(err)
    })
}

// export default build
exports.default = gulp.series(
  cleanFiles,
  gulp.parallel(minifyHtml,build)
);

/**
 * watching files for changes
 */
exports.watch = () => {
  gulp.watch(['`js/*.js`','*.html'], { ignoreInitial: false }, gulp.series(
    cleanFiles,
    gulp.parallel(minifyHtml,build)
  ))
}
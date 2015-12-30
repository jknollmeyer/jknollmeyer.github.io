var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var paths = {
  js: ['./js/*.js'],
  app_js: ['./app.jsx']
};

gulp.task('js', function(){
  // Browserify/bundle the JS
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch(paths.app_js, ['js']);
})
gulp.task('default', ['watch']);

const gulp = require('gulp');
const md5Cache = require('..');

gulp.task('default', () => {
  return gulp.src('*.js')
    .pipe(md5Cache({cacheName: '.my-cache.json'}));
});

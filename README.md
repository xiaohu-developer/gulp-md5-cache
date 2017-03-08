# gulp-md5-cache
scan files and create the md5 json cache file for future use

---
```js
// Example gulp task
const gulp = require('gulp');
const md5Cache = require('gulp-md5-cache');

gulp.task('default', () => {
  return gulp.src(['*.js'])
    .pipe(md5Cache({cacheName: '.my-cache.json'}));
});
```

```js
// result cache file
{
  "file1.js": "7a7e7eff03b739f59837b717f2cbe1fd",
  "file2.js": "a0c594684ab6240aed02c2ce1e139621"
}
```

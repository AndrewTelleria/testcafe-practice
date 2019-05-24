const gulp     = require('gulp');
const testcafe = require('gulp-testcafe');
gulp.task('run-testcafe-tests', () => {
  return gulp
    .src('test.js')
    .pipe(testcafe({browsers: ['chrome', 'firefox'] }));
});

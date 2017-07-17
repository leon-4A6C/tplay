const gulp = require('gulp');
const sass = require('gulp-sass');
const {spawn} = require("child_process");

const electron = spawn("npm", ["start"]); // start electron
electron.on("close", () => {
  process.exit();
});

gulp.task('sass', function () {
  return gulp.src('app/style/main.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('app/style/'));
});

gulp.task('watch', ["sass"], function () {
  gulp.watch('app/style/**/*.sass', ['sass']);
});

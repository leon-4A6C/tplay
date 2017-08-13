const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const {spawn} = require("child_process");

const electron = spawn("npm", ["start"]); // start electron
electron.on("close", () => {
  process.exit();
});

gulp.task('sass', function () {
  return gulp.src('app/style/main.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/style/'));
});

gulp.task('js', function () {
  return gulp.src('app/js/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js/'));
});

gulp.task("fonts", function() {
  return gulp.src("app/style/fonts/**/*.*")
  .pipe(gulp.dest("dist/style/fonts/"));
});

gulp.task("html", function() {
  return gulp.src("app/**/*.html")
  .pipe(gulp.dest("dist/"));
});

gulp.task('build', ["fonts", "sass", "js", "html"], function() {

});

gulp.task('watch', ["build"], function () {
  gulp.watch('app/style/**/*.sass', ['build']);
  gulp.watch('app/js/**/*.js', ['build']);
  gulp.watch('app/**/*.html', ['build']);
});

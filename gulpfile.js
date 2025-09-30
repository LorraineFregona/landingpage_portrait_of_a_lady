const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function styles() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

function watch() {
    gulp.watch('./src/styles/**/*.scss', styles);
    gulp.watch('./src/js/*.js', scripts);
}

exports.default = gulp.parallel(styles, scripts);
exports.watch = watch;
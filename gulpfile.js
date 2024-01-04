const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function builtStyles() {
    return src('library/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['library/**/*.scss'], builtStyles)
}

exports.default = series(builtStyles, watchTask)
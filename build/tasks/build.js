var gulp = require('gulp');
var babel = require('gulp-babel');
var minify = require('gulp-minify');
var changed = require('gulp-changed');
var runSequence = require('run-sequence');
var paths = require('../paths');

gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        ['build-source', 'build-css'],
        callback
    );
})

gulp.task('build-source', function () {
    return gulp.src(paths.scripts + '*.js')
        .pipe(babel({
            presets:['es2015'],
            plugins:['transform-class-properties']
        }))
        .pipe(minify({
            ext: {
                src: '.js',
                min: '.min.js'
            },
        }))
        .pipe(gulp.dest(paths.output + 'js/'))
})

gulp.task('build-css', function () {
    return gulp.src(paths.css + '*.css')
        .pipe(changed(paths.output, { extension: '.css' }))
        .pipe(gulp.dest(paths.output + 'css/'))
})
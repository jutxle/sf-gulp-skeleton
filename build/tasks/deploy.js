var gulp = require('gulp');
var zip = require('gulp-zip');
var forceDeploy = require('gulp-jsforce-deploy');
var paths = require('../paths');
var config = require('../sf-config');

gulp.task('sf-zip', ['build'], function () {
    return gulp.src([paths.output + '/**'])
        .pipe(zip(config.package + '.resource'))
        .pipe(gulp.dest([paths.staticresources, paths.projectStaticResources]))
});

gulp.task('deploy', ['sf-zip'], function () {
    return gulp.src([paths.package + '**/*'], { base: "." })
        .pipe(zip('pkg.zip'))
        .pipe(forceDeploy({
            username: config.username,
            password: config.password + config.token,
            loginUrl: config.loginUrl,
            pollTimeout: 120 * 1000
        }));
});
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    // browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    sass= require('gulp-sass'),
    minify = require('gulp-minify'),
    cleanCss = require('gulp-clean-css'),
    browserSync = require('browser-sync').create();
//sass
gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(gulp.dest('css'));
});
gulp.task('sass-watch', ['sass'], function (done) {
    browserSync.reload();
    done();
});

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*.js')
    // .pipe(minify())
    // .pipe(uglify())
    .pipe(browserify())
    // .on('error', function(err) {
    //     console.error('Error in compress task', err.toString());
    // })
    .pipe(gulp.dest('dist'));
});
// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['js', 'sass'], function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
    gulp.watch("sass/*.scss", ['sass-watch']);
});

gulp.task('default', ['serve', 'sass-watch', 'js-watch']);
// gulp.task('default', ['serve']);

/*
https://github.com/gulpjs/gulp

https://www.browsersync.io/docs/gulp

https://www.npmjs.com/package/gulp-browserify

https://www.npmjs.com/package/gulp-uglify

https://github.com/terinjokes/gulp-uglify/blob/master/docs/why-use-pump/README.md#why-use-pump
*/
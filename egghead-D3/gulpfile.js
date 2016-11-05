var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create();

// process JS files and return the stream.
gulp.task('js', function () {
    return gulp.src('js/*js')
    .pipe(browserify())
    // .pipe(uglify())
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
gulp.task('serve', ['js'], function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/*.js", ['js-watch']);
});

// gulp.task('default', ['serve'], ['js-watch']);
gulp.task('default', ['serve']);

/*
https://www.browsersync.io/docs/gulp

https://www.npmjs.com/package/gulp-browserify

https://www.npmjs.com/package/gulp-uglify

https://github.com/terinjokes/gulp-uglify/blob/master/docs/why-use-pump/README.md#why-use-pump
*/
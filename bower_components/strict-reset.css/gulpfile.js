var gulp = require('gulp');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
    gulp.src('test/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
    	browsers: ['> 0.5%']
    }))
    .pipe(gulp.dest('test/'));
});

gulp.task('watch', function() {
	gulp.watch('./**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch'])
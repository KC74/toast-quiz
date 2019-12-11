/* Gulp should compile sass and make client side JS compatible - feel free to add your own tasks! */
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'gulp-autoprefixer'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import uglify from 'gulp-uglify'
import eslint from 'gulp-eslint'

var plumberErrorHandler = {
    errorHandler: notify.onError({
        title: 'Gulp',
        message: 'Error: <%= error.message %>',
    }),
}

gulp.task('sass', cb => {
    gulp.src('./src/styles/styles.scss')
        .pipe(plumber(plumberErrorHandler))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename('style.min.css'))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./src/styles/min'))
    cb()
})

gulp.task('watch', cb => {
    // Watch our styles
    gulp.watch(
        [
            './src/styles/*.scss', // Styles
            './src/components/**/*.scss', // Components
            './src/containers/**/*.scss', // Containers
        ],
        gulp.series('sass') // add more tasks if required
    )
    cb()
})

gulp.task('default', gulp.series('watch'))

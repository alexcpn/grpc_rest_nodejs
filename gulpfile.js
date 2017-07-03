var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var tslint = require("gulp-tslint");
var tslintReporter = require('gulp-tslint-jenkins-reporter');
var mocha = require('gulp-mocha');

gulp.task('test', function () {
    //find test code - note use of 'base'
    return gulp.src('./**/**/*.ts', { base: '.' })
        /*transpile*/
        .pipe(ts(tsProject))
        /*flush to disk*/
        .pipe(gulp.dest('temp')) //this needs to be made better
        /*execute tests*/
        .pipe(mocha({
            reporter: 'progress'
        }));
});

gulp.task("lint:ts", function () {
    return tsProject.src()
        .pipe(tslint({
            formatter: "checkstyle"
        }))
        .pipe(tslint())
        .pipe(tslintReporter({
            sort: true,
            filename: 'checkstyle.xml',
            severity: 'error',
            pathBase: '.',
            pathPrefix: ''
        }));
});

gulp.task("default", ["lint:ts","test"], function () {
    return tsProject.src()
        .pipe(ts(tsProject))
  .pipe(gulp.dest('dist'));
        
});
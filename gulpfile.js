'use strict';

const { src, dest, watch, series } = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

exports.less = function() {
    return src('./src/style.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist/'));
}

exports.js = function() {
    return src(['./scripts/script.js', './scripts/slider.js'])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('script.min.js'))
        .pipe(dest('./dist/scripts'));
}

exports.libraryJS = function() {
    return src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/inputmask/dist/jquery.inputmask.min.js',
        'node_modules/jquery-validation/dist/jquery.validate.min.js',
        'node_modules/wow.js/dist/wow.js'
    ])
        .pipe(concat('libpack.min.js'))
        .pipe(dest('./dist/scripts/'));
}

exports.libraryCSS = function() {
    return src([
        'node_modules/animate.css/animate.min.css',
        'node_modules/slick-carousel/slick/slick.css',
        'styles/magnific-popup.css'
    ])
        .pipe(dest('./dist'));
}

exports.slickScript = function() {
    return src([
        'node_modules/slick-carousel/slick/slick.min.js',
        './scripts/jquery.magnific-popup.js'
    ])
        .pipe(dest('dist/scripts/'));
}

exports.default = function() {
    watch('./src/*.less', series('less'));
    watch('./scripts/*.js', series('js'));
}
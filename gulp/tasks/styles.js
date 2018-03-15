var gulp = require("gulp");
var sass = require('gulp-sass');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssvars = require("postcss-simple-vars");
var nested = require("postcss-nested");
var cssImport = require("postcss-import");
var mixins = require("postcss-mixins");
var hexrgba = require("postcss-hexrgba");
var rename = require("gulp-rename");

gulp.task("styles", function(){
	return gulp.src("./app/assets/styles/styles-uncompiled.css")
	.pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
	.on("error", function(errorInfo) {
		console.log(errorInfo.toString());
		this.emit("end");
	})
	.pipe(rename("styles.css"))
	.pipe(gulp.dest("./app/assets/styles"));
});



const gulp = require('gulp');
//html拷贝
gulp .task('copy-html',function(){
	return gulp.src('*.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
})
//图片拷贝 
gulp.task('images',function(){
	return gulp.src('images/**/*')
	.pipe(gulp.dest('dist/images'))
	.pipe(connect.reload())
	;
})
//数据
gulp.task('data',function(){
	return gulp.src('data/*.json')
	.pipe(gulp.dest('dist/data'))
	.pipe(connect.reload())
	;
})

//拷贝php
gulp.task('copy-php',function(){
	return gulp.src('scripts/*.php')
	.pipe(gulp.dest('dist/scripts'))
	.pipe(connect.reload());
})

//js
gulp.task('scripts',function(){
	return gulp.src('js/*.js')
	.pipe(gulp.dest('dist/js'))
	.pipe(connect.reload())
	;
})

//拷贝css.rest
gulp.task('copy-css',function(){
	return gulp.src('css/*.css')
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})


//建立工程
gulp.task('build',['copy-html','images','data','scripts','sass','copy-css','copy-php'],function(){
	console.log('工程建立完成');
})



//cass插件
const sass = require('gulp-sass-china');
// const minifyCSS = require('gulp-minify-css');
// const rename = require('gulp-rename');
gulp.task('sass',function(){
	return gulp.src('stylesheet/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})

//添加监听
gulp.task('watch',function(){
	gulp.watch('*.html',['copy-html']);
	gulp.watch('images/*.jpg',['images']);
	gulp.watch('data/*.json',['data']);
	gulp.watch('js/*.js',['scripts']);
	gulp.watch('css/*.css',['copy-css']);
	gulp.watch('scripts/*.php',['copy-php']);
	gulp.watch('stylesheet/*.scss',['sass']);
})

//启动服务
const connect = require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root:'dist',
		port:8009,
		livereload:true
	})
})

//默认任务
gulp.task('default',['watch','server']);
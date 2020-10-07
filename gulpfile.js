//gulp file that help developer to autodetect changes in the code.
// it only works with node version 8.11.1
// use npm run gulp  command

var gulp=require('gulp');
 var nodemon=require('gulp-nodemon');
gulp.task('default',function () {
 nodemon({
  script:'app.js' ,
  ext:'js',
  env:{
      PORT:8000
      },
     ignore:['./node_modules/**']
 })
 .on('restart',function(){

 console.log(' Restarting ');

 });

});

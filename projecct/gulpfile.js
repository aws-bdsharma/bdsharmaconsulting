var gulp =require('gulp');
var jshint=require('gulp-jshint');
var less=require('gulp-less');
var concat=require('gulp-concat');
var uglify =require('gulp-uglify');
var rename=require('gulp-rename');
var validator = require('gulp-htmlbuild');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our less
gulp.task('less', function() {
    return gulp.src('styles/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('../static/styles/css'));
});

// Compile Our html
gulp.task('html', function() {
  return 
});

gulp.task('html', function() {
  var htmlBase = gulp.src(['base.html'])
      .pipe(validator())
      .pipe(gulp.dest('../firstdjango/templates'));

  var htmlMain = gulp.src(['index.html', 'about.html', 'service.html','project.html','awards.html', 'contact.html', 'location.html', 'team.html', 'sucess-story.html', 'management.html', 'interior.html', 'architecture.html', 'gallery.html', 'ongoing-projects.html', 'completed-projects.html'])
  .pipe(validator())
  .pipe(gulp.dest('../firstdjango/templates/inventory'));

   return [htmlBase, htmlMain];
});

gulp.task('scripts', function() {
    var task1=gulp.src(['styles/scripts/main.js', 'styles/scripts/app.js'])
        .pipe(gulp.dest('dist/styles/scripts'))
        .pipe(rename(['main.js', 'app.js']))
        .pipe(gulp.dest('../static/styles/scripts'));
    
    var task2=gulp.src(['styles/scripts/components/bookingform.js','styles/scripts/components/datepicker.js', 'styles/scripts/components/carousel.js', 'styles/scripts/components/formvalidation.js', 'styles/scripts/components/navigation.js'])
        .pipe(gulp.dest('dist/styles/scripts/components'))
        .pipe(rename(['bookingform.js', 'datepicker.js', 'carousel.js', 'formvalidation.js', 'navigation.js']))
        .pipe(gulp.dest('../static/styles/scripts/components'));

        return [task1, task2];
});



// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('styles/less*.less', ['less']);
});

// Default Task
gulp.task('default', ['lint', 'less', 'html', 'scripts']);
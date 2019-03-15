const gulp = require('gulp');
const sass = require('gulp-sass');
const browsersync = require("browser-sync").create();

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest("./css/"))
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./sass/**/*.scss", css);
  gulp.watch(
    [
      "./css/**/*.css",
      "./index.html"
    ],
    gulp.series(browserSyncReload)
  );
}


// Tasks
gulp.task("css", css);

// build
gulp.task(
  "build",
  gulp.series(gulp.parallel(css))
);

// watch
gulp.task("watch", gulp.parallel(watchFiles, browserSync));
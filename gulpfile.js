//importing a package/library called gulp, and assigning it to a variable called gulp
const gulp = require("gulp");
//pump is a plugin that will handle errors for us...
const pump = require("pump");
const composer = require("gulp-uglify/composer");
const uglifyjs = require("uglify-es");
const uglify = composer(uglifyjs, console);

gulp.task("compress", function(cb) {
  pump([gulp.src("src/js/*.js"), uglify(), gulp.dest("dist/js")], cb);
});

//watch files, run tasks, put inside a task
gulp.watch("files/to/watch", ["tasks", "to", "run"]);

gulp.task("watch-js", function() {
  gulp.watch("src/js/*.js", ["compress"]);
});

//browser sync
const browserSync = require("browser-sync").create();

gulp.task("browserSync", function() {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
});

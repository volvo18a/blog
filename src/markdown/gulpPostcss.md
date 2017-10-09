# glup的安装及postcss的使用（用于flexible.js的移动端css编译）

> glup 使用（有npm的前提下，在git-bash里安装）

1. 全局安装 __gulp__

``` bash
$ npm install --global gulp
```

2. 作为项目的开发依赖安装 __gulp__

``` bash
$ npm install --save-dev gulp
```

3. 在项目根目录下创建一个名为 __gulpfile.js__ 的文件

``` js
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```

4. 运行 __gulp__

``` bash
$ gulp
```

> postcss 使用

1. 安装 __glup-postcss__

``` bash
$ npm install gulp-postcss
```

2. __gulpfile.js__ 的文件中 __glup-postcss__ 的配置

``` js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var px2rem = require('postcss-px2rem');
 
gulp.task('default', function() {
  var processors = [px2rem({remUnit: 75})];   /* 1rem = 75px 来计算 */
  return gulp.src('./css/*.css')    /* 根目录下的css文件夹里所有.css文件进行编译 */
    .pipe(postcss(processors))
    .pipe(gulp.dest('./'));
}); 
```

3. 运行 __gulp__

``` bash
$ gulp
```

原来的 __css__ 文件：

``` css
/*  属性有加了px的注释处理后再不同dpr下处理成不同px，加了no的注释表示不处理  */
.selector {
    width: 150px;
    height: 64px; /*px*/
    font-size: 28px; /*px*/
    border: 1px solid #ddd; /*no*/
}
```

__px2rem__ 处理之后将会变成：

``` css
.selector {
    width: 2rem;
    border: 1px solid #ddd;
}
[data-dpr="1"] .selector {
    height: 32px;
    font-size: 14px;
}
[data-dpr="2"] .selector {
    height: 64px;
    font-size: 28px;
}
[data-dpr="3"] .selector {
    height: 96px;
    font-size: 42px;
}
```

> flexible.js 使用注意点

``` bash
移动端里除了一些标志性的文字（例如：口号），其他字体大小一律使用px不使用rem，视具体情况而定。
```

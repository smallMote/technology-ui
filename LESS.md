## 关于less v3.7 新增Maps集合的使用

less中的map与大多数语言的map语法大同小异，都是以键值对的方式存放数据。

定义集合：
```less
// 这里需要注意的是,less中Maps每一个键值对的分割使用英文分号(;)隔开
@types: {
  primary: rgb(5, 91, 200);
  danger: rgb(255, 11, 151);
}
```
使用：
```less
.box {
  color: @types[primary];
}
```
输出css：
```css
.box {
  color: rgb(5, 91, 200);
}
```
***

配合each函数使用，让你事半功倍：
```less
@types: {
  dark: rgb(0, 11, 43);
  purple: rgb(94, 88, 224);
  danger: rgb(255, 11, 151);
  primary: rgb(5, 91, 200);
  warning: rgb(244, 153, 56);
  success: rgb(91, 203, 42);
}
.t-button {
  each(@types, {
    &.t-button--@{key} {
      color: #fff;
      background-color: @value;
    }
  });
}
```
输出css：
```css
.t-button.t-button--dark {
  color: #fff;
  background-color: rgb(0, 11, 43);
}
.t-button.t-button--purple {
  color: #fff;
  background-color: rgb(94, 88, 224);
}
.t-button.t-button--danger {
  color: #fff;
  background-color: rgb(255, 11, 151);
}
.t-button.t-button--primary {
  color: #fff;
  background-color: rgb(5, 91, 200);
}
.t-button.t-button--warning {
  color: #fff;
  background-color: rgb(244, 153, 56);
}
.t-button.t-button--success {
  color: #fff;
  background-color: rgb(91, 203, 42);;
}
```

less相关文档请查看：[https://less.bootcss.com/](https://less.bootcss.com/)
## demo中说明

### demo1 打开 qq音乐 并且截图


### demo2 打开 京东并且截图



## 小技巧收集

### Puppeteer设置的可视区域大小是 800 * 600 
- 我们可以采用如下来设定尺寸
```
page.setViewport({
    width: 1200;
    height: 800
})
```

### 如何显示测试中的Chromium 浏览器

```
var browser = await puppeteer.launch({
    headless: false
});
```

## 发现问题（待解决）

### 为什么path路径不能是文件夹中嵌套文件夹


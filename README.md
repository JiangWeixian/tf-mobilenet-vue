<div align="center">

<img src="https://raw.githubusercontent.com/JiangWeixian/tf-mobilenet-vue/webpack-stage-young/build/logo.png" style="width: 100"/>

[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-codebabes.svg)](https://forthebadge.com)

<p>tf-mobile-net example vue重制版本</p>
</div>

## Start

```bash
npm install
npm run dev
npm install
# type localhost:8080 in your browser
```

[预览地址](https://jiangweixian.github.io/tf-mobilenet-vue/dist/#/camera)

**注意，打开后进入Chrome调试界面食用最佳!**

## 一览

mobil-net基于imagenet数据集训练得到。可以鉴别的类别可以达到1000类，全部的类别可以在[这里](https://github.com/tensorflow/tfjs-examples/blob/master/mobilenet/imagenet_classes.js)看到。虽然类别很多，不过imagenet数据集里面的类别就没有
常用的类别，连人这一类别也没有，不过动植物会比较多。

该项目利用mobile-net良好的检查速度，调用webrtc，通过截取其中一帧，将其中一帧输入到网络实现检测。只选择可能性最高的一个。

<img src="https://raw.githubusercontent.com/JiangWeixian/tf-mobilenet-vue/dev/docs/build-example.gif" />

### 测试图片

<img src="https://raw.githubusercontent.com/JiangWeixian/tf-mobilenet-vue/dev/docs/shark-example.gif" />

## 相关

[tf-mobile-net](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)

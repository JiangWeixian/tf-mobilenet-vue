

<img src="https://raw.githubusercontent.com/JiangWeixian/tf-mobilenet-vue/webpack-stage-young/build/logo.png" style="width: 50px"/>

[![forthebadge](https://img.shields.io/badge/MAKE%20WITH-TENSORFLOW.JS-orange.svg)](https://js.tensorflow.org/)
[![forthebadge](https://img.shields.io/badge/POWERED%20BY-VUE-green.svg?style=flat-square)](https://github.com/vuejs/vue)


### Start

```bash
npm install
npm run dev
npm install
# type localhost:8080 in your browser
```

[预览地址](https://jiangweixian.github.io/tf-mobilenet-vue/dist/#/camera)。**注意，打开后进入Chrome调试界面食用最佳!**

### Preview

`mobilenet`基于`imagenet`数据集训练得到，鉴别的类别达到`1000`类，全部的类别可以在[这里](https://github.com/tensorflow/tfjs-examples/blob/master/mobilenet/imagenet_classes.js)看到。

虽然类别很多，不过imagenet数据集里面的类别就没有常用的类别。

利用`mobilenet`良好的检查速度，调用`webrtc`，截取其中一帧输入到网络实现检测。s输出可能性最高的一个。

<img width="400" src="https://raw.githubusercontent.com/JiangWeixian/tf-mobilenet-vue/dev/docs/camera-example.gif" /><img width="400" src="https://raw.githubusercontent.com/JiangWeixian/tf-mobilenet-vue/dev/docs/shark-example.gif" />

### Related

[@tf-mobile-net](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)

# 该项目数据都是模拟存储在vuex中的，图片较多，可能加载有点慢。
#部分展示说明如下：
# 首页展示：
![image](https://github.com/enaat/faster-order/blob/master/src/assets/firstPage.png)

#购物车点击时，会变为加减按钮出现(利用flag值判断)，可对其进行相应数量的加减
#且导航栏点击不同分类，会展示相应物品
# 相应的商品详情页面：
![image](https://github.com/enaat/faster-order/blob/master/src/assets/details.png)

#点击下面的小口袋，则可进入购物车页面，点击加入购物车，对应的商品数量会+1

# 购物车内容：
![image](https://github.com/enaat/faster-order/blob/master/src/assets/carts.png)

#对应的总价，可选择相应的折扣优惠（以及未满一定价格时，会有邮费）

# 对应登录用户收货地址的相关编辑(包括修改，删除，添加)-》一个用户可添加多个收货地址：
![image](https://github.com/enaat/faster-order/blob/master/src/assets/addAddress.png)

#state中定义了一个user，用来存储当前登录的用户信息（isLogin(默认为false,未登录) 可根据其判断页面的跳转以及展示对应的地址等）


# first-vue

> a vue project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

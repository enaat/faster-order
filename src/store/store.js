import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    cur: 0, // 记录点击的哪个导航类
    lists: [ // 所有列表项内容
      {
        name: '全部',
        listItems: [
              {id: 1, detailsInfo: '这是蛋糕1的详细信息...', src: require('@/assets/cake1.jpg'), title: '美味的蛋糕1', introduce: '蛋糕的相关介绍', price: 108, number: 1},
              {id: 2, detailsInfo: '这是蛋糕2的详细信息...', src: require('@/assets/cake2.jpg'), title: '美味的蛋糕2', introduce: '蛋糕的相关介绍', price: 166, number: 1},
              {id: 3, detailsInfo: '这是水果1的详细信息...', src: require('@/assets/fruit1.jpg'), title: '新鲜的水果1', introduce: '水果的相关介绍', price: 13, number: 1},
              {id: 4, detailsInfo: '这是水果2的详细信息...', src: require('@/assets/fruit2.jpg'), title: '新鲜的水果2', introduce: '水果的相关介绍', price: 8, number: 1},
              {id: 5, detailsInfo: '这是汉堡1的详细信息...', src: require('@/assets/humberger1.jpg'), title: '香喷喷的汉堡1', introduce: '汉堡的相关介绍', price: 45, number: 1},
              {id: 6, detailsInfo: '这是汉堡1的详细信息...', src: require('@/assets/humberger2.jpg'), title: '香喷喷的汉堡2', introduce: '汉堡的相关介绍', price: 22, number: 1},
              {id: 7, detailsInfo: '这是酸奶1的详细信息...', src: require('@/assets/leben1.jpg'), title: '香甜的酸奶1', introduce: '酸奶的相关介绍', price: 18, number: 1},
              {id: 8, detailsInfo: '这是酸奶1的详细信息...', src: require('@/assets/leben2.jpg'), title: '香甜的酸奶2', introduce: '酸奶的相关介绍', price: 10, number: 1},
              {id: 9, detailsInfo: '这是冒菜1的详细信息...', src: require('@/assets/maocai1.jpg'), title: '麻辣冒菜1', introduce: '冒菜的相关介绍', price: 38, number: 1},
              {id: 10, detailsInfo: '这是冒菜2的详细信息...', src: require('@/assets/maocai2.jpg'), title: '麻辣冒菜2', introduce: '冒菜的相关介绍', price: 16, number: 1},
              {id: 11, detailsInfo: '这是奶茶1的详细信息...', src: require('@/assets/milky-tea1.jpg'), title: '可口的奶茶1', introduce: '奶茶的相关介绍', price: 12, number: 1},
              {id: 12, detailsInfo: '这是奶茶2的详细信息...', src: require('@/assets/milky-tea2.jpg'), title: '可口的奶茶2', introduce: '奶茶的相关介绍', price: 15, number: 1},
              {id: 13, detailsInfo: '这是沙拉1的详细信息...', src: require('@/assets/salad1.jpg'), title: '色泽鲜艳的沙拉1', introduce: '沙拉的相关介绍', price: 36, number: 1},
              {id: 14, detailsInfo: '这是沙拉2的详细信息...', src: require('@/assets/salad2.jpg'), title: '色泽鲜艳的沙拉2', introduce: '沙拉的相关介绍', price: 24, number: 1},
              {id: 15, detailsInfo: '这是寿司1的详细信息...', src: require('@/assets/sushi1.jpg'), title: '软润的寿司1', introduce: '寿司的相关介绍', price: 88, number: 1},
              {id: 16, detailsInfo: '这是寿司2的详细信息...', src: require('@/assets/sushi2.jpg'), title: '软润的寿司2', introduce: '寿司的相关介绍', price: 66, number: 1}
            ]
      },
      {
        name: '蛋糕',
        listItems: [
          {id: 1, detailsInfo: '这是蛋糕1的详细信息...', src: require('@/assets/cake1.jpg'), title: '美味的蛋糕1', introduce: '蛋糕的相关介绍', price: 108, number: 1},
          {id: 2, detailsInfo: '这是蛋糕2的详细信息...', src: require('@/assets/cake2.jpg'), title: '美味的蛋糕2', introduce: '蛋糕的相关介绍', price: 166, number: 1}
          ]
      },
      {
        name: '水果',
        listItems: [
          {id: 3, detailsInfo: '这是水果1的详细信息...', src: require('@/assets/fruit1.jpg'), title: '新鲜的水果1', introduce: '水果的相关介绍', price: 13, number: 1},
          {id: 4, detailsInfo: '这是水果2的详细信息...', src: require('@/assets/fruit2.jpg'), title: '新鲜的水果2', introduce: '水果的相关介绍', price: 8, number: 1}
        ]
      },
      {
        name: '汉堡',
        listItems: [
          {id: 5, detailsInfo: '这是汉堡1的详细信息...', src: require('@/assets/humberger1.jpg'), title: '香喷喷的汉堡1', introduce: '汉堡的相关介绍', price: 45, number: 1},
          {id: 6, detailsInfo: '这是汉堡2的详细信息...', src: require('@/assets/humberger2.jpg'), title: '香喷喷的汉堡2', introduce: '汉堡的相关介绍', price: 22, number: 1}
        ]
      },
      {
        name: '酸奶',
        listItems: [
          {id: 7, detailsInfo: '这是酸奶1的详细信息...', src: require('@/assets/leben1.jpg'), title: '香甜的酸奶1', introduce: '酸奶的相关介绍', price: 18, number: 1},
          {id: 8, detailsInfo: '这是酸奶2的详细信息...', src: require('@/assets/leben2.jpg'), title: '香甜的酸奶2', introduce: '酸奶的相关介绍', price: 10, number: 1}
        ]
      },
      {
        name: '冒菜',
        listItems: [
          {id: 9, detailsInfo: '这是冒菜1的详细信息...', src: require('@/assets/maocai1.jpg'), title: '麻辣冒菜1', introduce: '冒菜的相关介绍', price: 38, number: 1},
          {id: 10, detailsInfo: '这是冒菜2的详细信息...', src: require('@/assets/maocai2.jpg'), title: '麻辣冒菜2', introduce: '冒菜的相关介绍', price: 16, number: 1}
        ]
      },
      {
        name: '奶茶',
        listItems: [
          {id: 11, detailsInfo: '这是奶茶1的详细信息...', src: require('@/assets/milky-tea1.jpg'), title: '可口的奶茶1', introduce: '奶茶的相关介绍', price: 12, number: 1},
          {id: 12, detailsInfo: '这是奶茶2的详细信息...', src: require('@/assets/milky-tea2.jpg'), title: '可口的奶茶2', introduce: '奶茶的相关介绍', price: 15, number: 1}
        ]
      },
      {
        name: '沙拉',
        listItems: [
          {id: 13, detailsInfo: '这是沙拉1的详细信息...', src: require('@/assets/salad1.jpg'), title: '色泽鲜艳的沙拉1', introduce: '沙拉的相关介绍', price: 36, number: 1},
          {id: 14, detailsInfo: '这是沙拉2的详细信息...', src: require('@/assets/salad2.jpg'), title: '色泽鲜艳的沙拉2', introduce: '沙拉的相关介绍', price: 24, number: 1}
        ]
      },
      {
        name: '寿司',
        listItems: [
          {id: 15, detailsInfo: '这是寿司1的详细信息...', src: require('@/assets/sushi1.jpg'), title: '软润的寿司1', introduce: '寿司的相关介绍', price: 88, number: 1},
          {id: 16, detailsInfo: '这是寿司2的详细信息...', src: require('@/assets/sushi2.jpg'), title: '软润的寿司2', introduce: '寿司的相关介绍', price: 66, number: 1}
        ]
      }
      ],
    users: [ // 已注册的用户信息
      {
        id: 1, name: '吴海', username: 18284172260, psd: '123456', address:
          [{city: '四川', detailAddress: '成都双流镇2号', name: '吴海', userPhone: 18284172260}]
      }
    ],
    user: {}, // 存储当前登录的用户信息
    isLogin: false // 用来判断是否已登录过（若登录了，则直接跳转到支付页面）
  },
  getters: {
    // 过滤出已添加入购物车的商品数量之和：
    addCarts: function (state) {
      // 便利出已点击加入购物车的物品数量
      let $arrNum = state.lists[0].listItems.map(val => {
        if (!val.flag){
          return val.number;
        }else{
          return 0;
        }
      });
      // 将其累加起来，并返回
      return $arrNum.reduce((total, item) => {
        return total + item;
      }, 0);
    },

    // 过滤出已加入购物车的'数组'：
    addCartLists: function (state) {
      return state.lists[0].listItems.filter(val => {
          return !val.flag;
      });
    }
  },
  mutations: {
    // 💗 抽出的公共加减方法，可让相同的列表项同时改变-》便于调用：
    commonAdd: function (state, val){
      state.lists.map(item => {
        item.listItems.map(singVal => {
          if(val.id === singVal.id){
            singVal.flag = val.flag;
            singVal.number = val.number;
          }
        });
      });
    },
    // 各种同步获取/改变数据的方法：（因为都是模拟的数据，所以模拟使用actions异步从服务端获取）
    calculate: function (state, obj) {
      switch (obj.who) {
        case 1:
          obj.val.number++;
          this.commit('commonAdd', obj.val);
          break;
        case -1:
          if(obj.val.number <= 1){
            obj.val.flag = true;
            this.commit('commonAdd', obj.val);
          }else{
            obj.val.number--;
            this.commit('commonAdd', obj.val);
          }
          break;
        default:
          console.log('error...');
      }
    },

    // 点击购物车，按钮出现且其他列表对应的商品也保持效果一致：
    changeCartNum: function (state, val) {
      val.flag=false; // 让购物车消失，出现加减按钮
      // 让其他相同id的物品，也出现一样的效果：
      this.commit('commonAdd', val);
    },

  },
  actions: {
    calculate: function ({commit}, obj) {
      commit('calculate', obj);
    },
    changeCartNum: function ({commit}, val) {
      commit('changeCartNum', val);
    }
  }
});

export default store;

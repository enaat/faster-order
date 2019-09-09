import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    allNotes: [{content: 'newNotes'}],
    cur: 0, // 记录点击的是谁
    favorites: [],
    flag: false, // 决定收藏选项是否变红
    editText: {content: 'newNotes', isCollect: false},
    editIndex: 0 // 默认被编辑的列表所在的索引值
  },
  getters: {

  },
  mutations: {
    add(state){
      state.cur = 0;
      state.allNotes.push({content: '请开始记录你的笔记吧', isCollect: false});
    },

    // 💗 定义一个点击删除或取消收藏可完成收藏列表的删除方法：
    delCollect(state) {
      state.favorites.map((item, index) => {
        if(item.content === state.allNotes[state.editIndex].content){
          state.favorites.splice(index, 1);
        }
      });
    },

    love(state) {
      let curNow = state.allNotes[state.editIndex]; // 当前被选中的列表项
      curNow.isCollect = state.flag; // 让自定义状态isCollect与flag同步
      if(state.flag){
        state.favorites.push(curNow);
      }else{
        // 💗 若想点取消收藏，则将相应收藏的内容删除掉 -》这里根据内容匹配的，因为之前未加id
        this.commit('delCollect');
      }
    },
    del(state) {
      state.cur = 2;
      if(confirm('确认删除吗？')){
        this.commit('delCollect');
        state.allNotes.splice(state.editIndex, 1);
        state.flag = false;  // 不要忘记删除成功后，将收藏选项取消红色高亮
      }
    },


    // 2. 编辑笔记列表时；
    edit(state, index){
      state.editIndex = index;
      let $curInfo = state.allNotes[index];
      state.editText = $curInfo; //让右侧文本框显示被选中的笔记内容
      // 决定收藏选项是否变红：
      if($curInfo.isCollect){
        state.flag = true;
      }else{
        state.flag = false;
      }
    },

    // 3. 右侧文本框输入时内容的改变：
    changeInfo(state){
      // 💗 利用数组替换可实现编辑与所选内容同步更改：
      state.allNotes.splice(state.editIndex, 1, state.editText);
    }
  },
  actions: {

  }
});

export default store;

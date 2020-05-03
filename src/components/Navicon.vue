<template>
  <div id="Navicon">
      <div class="navicon" v-for="(item, index) in list" :key="index">
          <div class="icon" :style="{backgroundColor:item.color}">
              <i class="iconfont" :class="item.icon"></i>
          </div>
          <span>{{item.title}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "navicon",
  data(){
      return{
      list:[
          {title:'美食',icon:'icon-fenzu',color:'#f60'},
          {title:'电影',icon:'icon-dianying',color:'#ecbe35'},
          {title:'住宿',icon:'icon-zhusu',color:'rgb(13, 236, 225)'},
          {title:'娱乐',icon:'icon-yule',color:'pink'},
          {title:'外卖',icon:'icon-waimai-',color:'rgb(194, 6, 194)'},
          {title:'打车',icon:'icon-car',color:'rgb(11, 202, 84)'},
          {title:'景点',icon:'icon-jingdian',color:'greenyellow'},
          {title:'旅游',icon:'icon-lvyou',color:'peru'},
      ]
      }
  }
};
</script>

<style scoped>
#Navicon{
    height:8rem;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    color: rgb(13, 236, 225);
}
.navicon{
    width: 25vw;
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.navicon .icon{
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
i{
    color: #fff;
    font-size: 1.7rem;
}
span{
    font-size: .6rem;
    color: #999;
    margin-top: .2rem;
}
</style>
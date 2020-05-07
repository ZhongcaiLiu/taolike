<template>
  <div id="Carousel">
    <img :src="img" v-for="(img, index) in imgs" :key="index" v-show="index==n" />
    <div class="icon">
      <span
        v-for="(img, index) in imgs"
        :key="index"
        :style="index==n?{backgroundColor:'#000'}:{backgroundColor:'rgba(0,0,0,0.2)'}"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "carousel",
  data() {
    return {
      n: 0,
      imgs: [
        require("../assets/imgs/bo1.jpg"),
        require("../assets/imgs/bo2.jpg"),
        require("../assets/imgs/bo3.jpg"),
        require("../assets/imgs/bo4.jpg"),
        require("../assets/imgs/bo5.jpg")
      ]
    };
  },
  methods: {
    autoplay() {
      let timer = setInterval(() => {
        this.n++;
        if (this.n == this.imgs.length) {
          this.n = 0;
        }
      }, 2000);
    }
  },
  mounted() {
    this.autoplay();
  },
  destroyed() {
    clearInterval(this.timer);//清除定时器，提高性能
  }
};
</script>

<style scoped>
#Carousel {
  padding-top: .5rem;
  position: relative;
  background-color: #fff;
  height: 6rem;
}
img {
  height: 6rem;
}
.icon {
  width: 4rem;
  height: 0.8rem;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
span {
  display: flex;
  width: 0.35rem;
  height: 0.35rem;
  border-radius: 50%;
}
</style>
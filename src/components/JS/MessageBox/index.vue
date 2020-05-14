<template>
  <div id="MessageBox">
   <p>{{content}}</p>
  </div>
</template>

<script>
export default {
    name:'MessageBox'

}
</script>

<style scoped>
#MessageBox{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 8px;
    font-size: 16px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .8rem;
    text-align: center;
    z-index: 9999;
}
</style>
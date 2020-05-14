<template>
  <div id="Confirm">
    <div class="confirm">
      <h2>{{title}}</h2>
      <div>
        <div @touchstart='handelcancel'>{{cancel}}</div>
        <div @touchstart='handelok'>{{ok}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Confirm'
}
</script>

<style scoped>
#Confirm{
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
}
.confirm {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 74%;
  background-color: #fff;
  font-size: 14px;
  border-radius: 10px;
  text-align: center;
}
.confirm h2{
    padding: 1rem 2rem;
    font-size: 14px;
}
.confirm >div{
    display: flex;
    border-top: 1px solid #ddd;
}
.confirm >div div{
    flex: 1;
    padding:.5rem .8rem;
}
</style>
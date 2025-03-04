<template>
  <div class="box">
    <img class="image" :src="require(`../../../assets/Photos/${props.imgSrc}`)" alt="img">
    <h3>{{ props.title }}</h3>
    <p>{{ props.description }}</p>
    <div class="greenLine"></div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  title: string,
  imgSrc: string,
  description: string
}>()
</script>

<style scoped>
.box>img{
width: 50px;
height: 47px;
}
.box {
  box-sizing: border-box;
  margin: 46px;
  background-color:var(--lightDark) ;
  padding: 68px 25px;
  width: 360px;
  height: 336px;
  position: relative;
    h3 {
      line-height: 32px;
      font-size: 26px;
      font-weight: bold;
      color: var(--white);
      margin: 18px 0;
    }
    p {
      font-size: 16px;
      line-height: auto;
      color: var(--gray);
    }
    .greenLine{
      background-color: var(--primary);
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 6px;
      left:0;
    }
}


</style>

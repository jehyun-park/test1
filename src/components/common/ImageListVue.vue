<template>
  <div>
    <a href="#" v-for="i in imagelist" :key="i" class="imagelist">{{ i }}</a
    ><br /><br /><br /><br /><br /><br /><br />
    <a href="#" v-for="i in imagelist1" :key="i" class="imagelist">{{ i }}</a
    ><br /><br /><br /><br /><br /><br /><br />
    <a href="#" v-for="i in imagelist2" :key="i" class="imagelist">{{ i }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagelist: [1, 2, 3],
      imagelist1: [4, 5, 6],
      imagelist2: [7, 8, 9],
    };
  },
};
</script>
<style scoped>
.imagelist {
  padding: 45px 75px;
  position: relative;
  border: 1px solid black;
  bottom: 110px;
  left: 100px;
  font-size: 50px;
}
</style>

<template> 
  <div id="app">
    <h2>웹툰</h2>
    <div>
      <input type="checkbox" id="프롬스타" value="프롬스타" v-model="checkedWebtoons">
      <label for="프롬스타">프롬스타</label>
      <input type="checkbox" id="햄스터와그녀" value="햄스터와 그녀" v-model="checkedWebtoons">
      <label for="햄스터와그녀">햄스터와 그녀</label>
      <input type="checkbox" id="위대한로맨스" value="위대한 로맨스" v-model="checkedWebtoons">
      <label for="위대한로맨스">위대한 로맨스</label>
      <input type="checkbox" id="아귀" value="아귀" v-model="checkedWebtoons">
      <label for="아귀">아귀</label>
      <br>
      <span>찜한 웹툰: {{ checkedWebtoons }}</span>
    </div>
  </div>
</template>

<script>  

export default {
  name: "app",
  data() {
    return {
      title: "",
      checkedWebtoons: [],
    };
  }
};
</script>

<style>   

</style>
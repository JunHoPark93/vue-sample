<template> 
  <div id="app">
    <h2>성별</h2>
    <input type="radio" id="male" value="male" v-model="gender">
    <label for="male">남</label>
    <br>
    <input type="radio" id="female" value="female" v-model="gender">
    <label for="female">여</label>
    <br>
    <span>당신의 성별을 알려주세요: {{ gender }}</span>
  </div>
</template>

<script>  

export default {
  name: "app",
  data() {
    return {
      title: "",
      gender: [],
    };
  }
};
</script>

<style>   

</style>
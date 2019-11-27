<template>
  <div id="app">
    {{ message }}
    <h2>뒤집힌</h2>
    {{ reversedMessage }}
  </div>  
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      message: 'Hello Vue !!'
    }
  },
  // computed는 대상이 변하지 않으면 계산하지 않고 캐싱을 이용한다.
  // method: {} 는 캐싱 이득을 취할 수 없다.
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    }
  }
}
</script>
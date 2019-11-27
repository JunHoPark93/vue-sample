<template>
  <div>
    <h2>Webtoon</h2>
    <ul class="wrap">
        <li class="item" v-for="(item, idx) in items" v-bind:key="{idx}">
            <a v-bind:href="item.link" target="_blank">
                <img v-bind:src="item.img">
                <span class="tit">제목 : {{item.name}}</span>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
    export default {
        props: {
            items: {type: Array, default: () => []}
        }
    }
</script>

<style scoped>
h2 {
  text-align: center;
}

a {
  list-style: none;
  text-decoration: none;
}

li {
  list-style: none;
}

.wrap {
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
}

.item {
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 25px;
}

.tit {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  padding: 20px 15px;
}

img {
  width: 100%;
  background: #ebebeb;
  border-radius: 4px;
}
</style>

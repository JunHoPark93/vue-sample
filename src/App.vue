<template> 
  <div>
    <Header/>
    <div class="wrap">
      <Menu/>
      <Content/>
    </div>
  </div>
</template>

<script>  
import Content from "./components/Content";
import Menu from "./components/Menu";
import Header from "./components/Header";

export default {
  name: "app",
  components: {
    Content,
    Menu,
    Header
  }
};
</script>

<style>   
  h1 {
    color: #03a9f4;
  }

  .wrap {
    display: flex
  }
</style>
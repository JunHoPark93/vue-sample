<template> 
  <div>
    <Header/>
    <div class="wrap">
      <Menu/>
      <Content/>
    </div>
    <Box color="blue"/>
    <Box color="purple"/>
    <Box color="green"/>
    <Box color="blue"/>
    <Box color="purple"/>
    <Box />
  </div>
</template>

<script>  
import Content from "./components/Content";
import Menu from "./components/Menu";
import Header from "./components/Header";
import Box from "./components/Box";

export default {
  name: "app",
  components: {
    Content,
    Menu,
    Header,
    Box
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
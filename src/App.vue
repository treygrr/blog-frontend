<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vh;
}
body {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5 {
  color: #2f3030;
  font-family: 'Fredoka One', Courier, monospace;
  font-weight: 100;
}

pre {
  background-color: rgb(204, 204, 204);
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  font-size: 10px;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;
}
</style>

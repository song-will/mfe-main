<template>
  <div id="app">
    <div class="left">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/vue-mfe">vue-mfe</router-link></li>
          <li><router-link to="/react-mfe">react-mfe</router-link></li>
    </div>
    <div id="sub-content" class="right">
      <router-view></router-view>
    </div>
  </div>
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
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  height: 500px;
  width: 500px;
  border: 1px #ccc solid;
  display: flex;
  list-style: none;
}
.left {
  flex: 1 1 200px;
  border-right: 1px solid #ccc;
  padding-left: 20px;
}
.right {
  flex: 1 1 300px;
}
</style>

<template>
  <div>
    <div class="sidebar"></div>
    <div class="main">
      <ChatDemo />
    </div>
  </div>
</template>

<script>
import ChatDemo from "./components/ChatDemo.vue";

export default {
  name: "App",
  components: {
    ChatDemo,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex: 1 1 0%;
}
</style>

<template>
  <!-- <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- 作者 -->
  <a class="author" href="https://ye9060.com/ye" target="_blank">@小叶</a>
  <Hello />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hello from '@/views/Hello.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Hello,
  },
});
</script>

<style lang="less">
// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

/* -作者- */
.author {
  position: fixed;
  bottom: 20px;
  right: 28px;
  font-size: 18px;
  color: #2c3e50;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

li {
  list-style: none;
}

html,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
}
</style>

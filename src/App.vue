<template>
  <!-- <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

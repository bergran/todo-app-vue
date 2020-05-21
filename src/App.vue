<template>
  <div id="app">
    <header-custom></header-custom>
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import Header from "./components/global/header.vue";
import todoList from "./views/todo-list.vue";

export default {
  components: {
    headerCustom: Header,
    todoList: todoList
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
}
#app {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>

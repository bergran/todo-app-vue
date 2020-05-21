<template>
  <ol class="task-list-container">
    <task-item
      class="task-item-list"
      v-for="(task, index) of tasks"
      v-bind:key="index"
      :task="task"
    ></task-item>
  </ol>
</template>

<script>
import taskItemVue from "./task-item.vue";
import { mapState } from 'vuex';

export default {
  components: {
    taskItem: taskItemVue
  },
  computed: mapState({
    tasks: function (state) {
        return state.tasks.tasks;
    }
  })
};
</script>

<style>
.task-list-container {
  overflow: hidden;
  overflow-y: auto;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style-type: none;
}
.task-item-list {
  margin-bottom: 5px;
}
</style>

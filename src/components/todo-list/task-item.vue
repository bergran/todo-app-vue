<template>
  <li class="task-item">
    <div>
      {{task.id}} {{task.text}}
    </div>
    <div class="icons">
      <input type="checkbox" :value="task.done" @change.prevent="markDoneUndone">
      <button @click="deleteTask">Delete me</button>
    </div>
  </li>
</template>

<script>
import Task from '../../classes/task';
import { mapActions } from 'vuex';

export default {
  props: {
    task: Task
  },
  methods: {
    markDoneUndone () {
        this.updateTaskAction(Object.assign(this.task, {done: !this.task.done}));
    },
    deleteTask () {
        this.deleteTaskAction(this.task);
    },
    ...mapActions({
      updateTaskAction: 'tasks/updateTask',
      deleteTaskAction: 'tasks/deleteTask',
    })
  }
};
</script>

<style>
.task-item {
  font-size: 20px;
  display: flex;
  justify-content: space-between;
}
</style>

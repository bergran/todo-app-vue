<template>
  <li class="task-item">
    {{task.id}} {{task.text}}
  </li>
</template>

<script>
import Task from '../../classes/task';

export default {
  props: {
    task: Task
  }
};
</script>

<style>
.task-item {
  font-size: 20px;
}
</style>

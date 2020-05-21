<template>
  <div class="todo-list-out-container">
    <div class="todo-list-in-container">
      <h1 class="title">Add task</h1>
      <hr />
      <div class="input-add-new-task-container">
        <input
          class="input-add-new-task"
          v-model="newTaskValue"
          @keyup.enter="addNewTask($event)"
          type="text"
          placeholder="Add new task"
        />
      </div>
      <div class="todo-list-wrap-container">
        <div class="todo-list-wrap-body">
          <task-list class="todo-task-list-container"></task-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import taskListVue from "../components/todo-list/task-list.vue";
import { mapActions } from "vuex";
import Task from "../classes/task";

export default {
  components: {
    taskList: taskListVue
  },
  data: function () {
    return {
      newTaskValue: ''
    }
  },
  methods: {
    addNewTask: function(event) {
      const tasks = this.$store.state.tasks.tasks;

      if (tasks.length > 0) {
        const lastId = tasks[tasks.length - 1].id;
        this.dispatchAddNewAction(new Task(lastId + 1, event.target.value, false));
      } else {
        this.dispatchAddNewAction(new Task(1, event.target.value, false));
      }

      this.newTaskValue = '';
    },
    ...mapActions({
      'dispatchAddNewAction': "tasks/addTask"
    })
  }
};
</script>

<style lang="scss">
.input-add-new-task-container {
  margin-bottom: 10px;
}

.todo-list-out-container {
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: stretch;

  .title {
    margin: 0;
  }
}

.todo-list-in-container {
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.todo-list-wrap-container {
  display: flex;
  flex: 1;
  min-height: 0px;
}

.todo-list-wrap-body {
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
}

@media screen and (min-width: 640px) {
  .todo-list-out-container {
    justify-content: center;
    align-items: center;
  }

  .todo-list-in-container {
    background: rgba(0, 0, 0, 0.2);
    width: 500px;
    height: 600px;
  }

  .input-add-new-task {
    width: 100%;
    padding: 5px;
    box-sizing: border-box;
    font-size: 17px;
  }
}
</style>

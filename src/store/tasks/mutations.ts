import Task from '@/classes/task';

export default {
    addTask: function (state: any, task: Task) {
        state.tasks = state.tasks.concat(task)
    },
    deleteTask: function (state: any, task: Task) {
        state.tasks = state.tasks.filter((stateTask: Task) => task.id !== stateTask.id)
    },
    updateTask: function (state: any, task: Task) {
        // TODO - Update task
        state.tasks = state.tasks.map((stateTask: Task) => task.id === stateTask.id ? task : stateTask);
        
    }
}
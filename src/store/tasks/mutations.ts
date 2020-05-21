import Task from '@/classes/task';

export default {
    addTask: function (state: any, task: Task) {
        return state.tasks = state.tasks.concat(task)
    },
    deleteTask: function (state: any, task: Task) {
        return state.tasks.filter((stateTask: Task) => task.id !== stateTask.id)
    },
    updateTask: function (state: any, task: Task) {
        // TODO - Update task
        return state.tasks.filter((stateTask: Task) => task.id !== stateTask.id)
    }
}
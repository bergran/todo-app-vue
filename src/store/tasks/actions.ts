import Task from '@/classes/task'
import StoreDefinition from '../interfaces'

export default {
    addTask: function ({commit}: StoreDefinition, task: Task) {
        commit('addTask', task)
    },
    deleteTask: function ({commit}: StoreDefinition, task: Task) {
        commit('deleteTask', task)
    },
    updateTask: function ({commit}: StoreDefinition, task: Task) {
        commit('updateTask', task)
    }
}
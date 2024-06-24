import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    TOGGLE_TODO(state, todo) {
      todo.done = !todo.done;
    },
    REMOVE_TODO(state, index) {
      state.todos.splice(index, 1);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    toggleTodo({ commit }, todo) {
      commit('TOGGLE_TODO', todo);
    },
    removeTodo({ commit }, index) {
      commit('REMOVE_TODO', index);
    }
  },
  getters: {
    todos: state => state.todos
  }
});

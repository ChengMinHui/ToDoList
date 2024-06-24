<template>
    <div class="todo-list">
      <h1>ToDo List</h1>
      <input v-model="newTodo" @keyup.enter="addTodoItem" placeholder="Add a new task" />
      <ul>
        <li v-for="(todo, index) in todos" :key="index"> 
          <span :class="{ done: todo.done }" @click="toggleDone(todo)">{{ todo.text }}</span>
          <button @click="removeTodoItem(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newTodo: ''
      };
    },
    computed: {
      ...mapGetters(['todos'])
    },
    methods: {
      ...mapActions(['addTodo', 'toggleTodo', 'removeTodo']),
      addTodoItem() {
        if (this.newTodo.trim() !== '') {
          this.addTodo({
            text: this.newTodo,
            done: false
          });
          this.newTodo = '';
        }
      },
      toggleDone(todo) {
        this.toggleTodo(todo);
      },
      removeTodoItem(index) {
        this.removeTodo(index);
      }
    }
  };
  </script>
  
  <style>
  .todo-list {
    max-width: 400px;
    margin: 0 auto;
  }
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }
  .done {
    text-decoration: line-through;
  }
  button {
    background: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  
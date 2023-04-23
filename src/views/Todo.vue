<template>
  <div>
    <h2>Todo Application</h2>
    <router-link to="/">HOME</router-link>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">all</option>
      <option value="done">done</option>
      <option value="not done">not done</option>
    </select>
    <hr />
    <Loader v-if="loading" />
    <TodoList
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
      v-else-if="filteredTodos.length"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import Loader from "@/components/Loader";
import AddTodo from "@/components/AddTodo";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "bread", completed: false },
        { id: 2, title: "butter", completed: false },
        { id: 3, title: "milk", completed: false },
      ],
      loading: true,
      filter: "all",
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      });
  },
  computed: {
    filteredTodos(value) {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "done") {
        return this.todos.filter((t) => t.completed);
      }
      if (this.filter === "not done") {
        return this.todos.filter((t) => !t.completed);
      }
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

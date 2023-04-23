<template>
  <div>
    <TodoItem
      v-for="(todo, i) of todos"
      v-bind:todo="todo"
      v-bind:index="i"
      v-bind:key="i"
      v-on:remove-todo="removeTodo"
    />
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem";
export default {
  props: ["todos"],
  components: {
    TodoItem,
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
    },
  },
};
</script>

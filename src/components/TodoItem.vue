<template>
  <li>
    <span v-bind:class="{ done: todo.completed }"
      ><input type="checkbox" v-on:change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }} </strong>
      {{ todo.title }}
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button>
  </li>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
};
</script>
<style>
.rm {
  background: red;
  border-radius: 50%;
}
.done {
  text-decoration: line-through;
}
</style>

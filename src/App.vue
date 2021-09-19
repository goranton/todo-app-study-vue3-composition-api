<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <TodoListItem />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import HelloWorld from './components/HelloWorld.vue'
import TodoListItem from "./components/TodoListItem.vue";
import {useTodoService} from "./helpers/useTodoService.ts";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    TodoListItem,
  },
  setup() {
    const {items} = useTodoService();

    return {
      items,
    };
  },
});
</script>


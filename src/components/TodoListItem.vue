<template>
  <div>
    <h4>#{{ item.id }}</h4>
    <h1>{{ item.title }}</h1>
    <p>{{ item.description }}</p>
    <input type="checkbox" :checked="item.isResolved" />
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {TodoItemType} from "../types/TodoItemType";

export default defineComponent({
  name: "TodoListItem",
  props: {
    item: {
      type: Object as TodoItemType,
      required: true,
    },
  },
})
</script>

<style scoped>

</style>
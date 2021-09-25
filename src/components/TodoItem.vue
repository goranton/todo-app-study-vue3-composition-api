<template>
  <div class="todo-list-item">
    <button @click="onDeleteButtonClick">Delete</button>
    <h2>{{ item.label }}</h2>
    <p>{{ item.description }}</p>
    <button @click="onEditButtonClick">Edit</button>
    <input
        type="checkbox"
        :checked="item.isResolved"
        @input="onToggleStatusClick"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import {TodoItemInterface} from "../../typings/interface/TodoItemInterface";

export default defineComponent({
  name: "TodoItem",
  props: {
    item: {
      type: Object as PropType<TodoItemInterface>,
      required: true,
    },
  },
  setup(props, {emit}) {
    return {
      onToggleStatusClick: () => emit('toggleStatus:item', props.item.id),
      onDeleteButtonClick: () => emit('delete:item', props.item.id),
      onEditButtonClick: () => emit('edit:item', props.item.id),
    };
  },
})
</script>

<style scoped>

</style>
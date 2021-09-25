<template>
  <form class="todo-item-form" @submit.prevent="sendForm">
    <div class="todo-item-form__field">
      <label for="label">Заголовок</label>
      <input type="text" id="label" v-model="todoItemDataRaw.label" />
    </div>

    <div class="todo-item-form__field">
      <label for="description">Описание</label>
      <input type="text" id="description" v-model="todoItemDataRaw.description" />
    </div>

    <div class="todo-item-form__field">
      <slot>
        <button type="submit">{{ buttonText }}</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import {TodoItemInterface} from "../../typings/interface/TodoItemInterface";
import {TodoItemModel} from "@/models/TodoItemModel";

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<TodoItemInterface>,
      default: () => new TodoItemModel(),
    },
    buttonText: {
      type: String,
      default: 'Добавить',
    },
    isResetOnSend: {
      type: Boolean,
      default: false,
    },
  },
  name: "TodoItemForm",
  setup(props, {emit}) {
    const todoItemDataRaw = ref<TodoItemInterface>({
      ...props.modelValue,
    });

    return {
      todoItemDataRaw,
      sendForm: () => {
        emit('update:modelValue', todoItemDataRaw.value);

        if (props.isResetOnSend) {
          todoItemDataRaw.value = {
            ...props.modelValue,
          };
        }
      },
    }
  },
});
</script>

<style scoped>

</style>
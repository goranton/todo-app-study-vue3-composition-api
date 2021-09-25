<template>
  <h1>TODO list composition api</h1>
  <TodoItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @edit:item="startEdit"
      @delete:item="deleteItemById"
      @toggleStatus:item="toggleItemStatusById"
  />
  <TodoItemForm
      v-if="!isEditMode"
      @update:modelValue="addItem"
      is-reset-on-send
  />
  <TodoItemForm
      v-else
      :model-value="editItem"
      @update:modelValue="saveEdit"
      is-reset-on-send
  >
    <button type="submit">Сохранить</button>
    <button @click="stopEdit">Отмена</button>
  </TodoItemForm>
</template>

<script lang="ts">
import {defineComponent, ref, computed} from 'vue';
import {TodoItemInterface} from "../typings/interface/TodoItemInterface";
import TodoItem from "@/components/TodoItem.vue";
import TodoItemForm from "@/components/TodoItemForm.vue";

export default defineComponent({
  name: 'App',
  components: {
    TodoItem,
    TodoItemForm,
  },
  setup() {
    const editItemId = ref<number>(-1);
    const items = ref<TodoItemInterface[]>([]);

    const editItem = computed<TodoItemInterface|undefined>(() => items.value.find((item) => {
      return item.id === editItemId.value;
    }));

    /**
     * Добавить задачу в список
     * @param {TodoItemInterface} item
     */
    const addItem = (item: TodoItemInterface) => items.value.push(item);

    /**
     * Сохранить айди редатируемой задачи
     * @param {number} id
     */
    const startEdit = (id: number) => editItemId.value = id;

    /**
     * Отменить редактирование
     */
    const stopEdit = () => editItemId.value = -1;

    /**
     * Обновить редактируемую задачку
     * @param {TodoItemInterface} updatedItem
     */
    const saveEdit = (updatedItem: TodoItemInterface) => {
      items.value = items.value.map((item) => {
        return updatedItem.id === item.id
            ? updatedItem
            : item;
      });
      stopEdit();
    };

    /**
     * Удалить задачу по айди
     * @param {number} id
     */
    const deleteItemById = (id: number) => {
      items.value = items.value.filter((item) => item.id !== id);
    };

    /**
     * Переключение между состояними задачи
     * @param {number} id
     */
    const toggleItemStatusById = (id: number) => {
      items.value = items.value.map((item) => {
        if (item.id !== id) {
          return item;
        }

        item.isResolved = !item.isResolved;

        return item;
      });
    };

    return {
      items,
      editItem,
      isEditMode: computed<boolean>(() => editItemId.value > -1),
      addItem,
      deleteItemById,
      toggleItemStatusById,
      startEdit,
      saveEdit,
      stopEdit,
    };
  },
});
</script>
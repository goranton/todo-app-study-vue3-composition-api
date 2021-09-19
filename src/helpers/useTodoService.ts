import {onMounted, ref} from "vue";
import {todoServiceInstance} from "../services/TodoService";
import {TodoItemType} from "../types/TodoItemType";

export const useTodoService = () => {
    const items = ref<TodoItemType[]>([]);

    const getItems = () => {
        items.value = todoServiceInstance.getItems();
    };

    const pushToList = (item: TodoItemType) => {
        todoServiceInstance.addItem(item);
        getItems();
    };

    const removeFromList = (id: string | number) => {
        todoServiceInstance.removeItemById(id);
        getItems();
    };

    onMounted(getItems);

    return {
        items,
        pushToList,
        removeFromList,
    };
};

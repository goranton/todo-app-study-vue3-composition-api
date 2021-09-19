import {TodoItemType} from "../types/TodoItemType";

type TodoServiceProps = {
    items: TodoItemType[],
};

type TodoServiceItemIdType = string | number;

export class TodoService {
    #items: TodoItemType[];

    constructor({items = []}: TodoServiceProps) {
        this.#items = items;
    }

    getItems(): TodoItemType[] {
        return this.#items;
    }

    addItem(item: TodoItemType) {
        this.#items.push(item);
    }

    toggleItemStatusById(itemId: TodoServiceItemIdType) {
        this.#items = this.#items.map((item) => {
            if (item.id === itemId) {
                item.isResolved = true;
            }

            return item;
        });
    }

    removeItemById(itemId: TodoServiceItemIdType) {
        this.#items = this.#items.filter((item) => item.id === itemId);
    }
}

export const todoServiceInstance = new TodoService({items: []});
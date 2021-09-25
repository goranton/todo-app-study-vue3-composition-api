import {TodoItemInterface} from "../../typings/interface/TodoItemInterface";

export class TodoItemModel implements TodoItemInterface {
    id: number;
    description: string;
    isResolved: boolean;
    label: string;

    constructor({
        id,
        label,
        description,
        isResolved,
    }: TodoItemInterface = {
        id: 0,
        label: '',
        description: '',
        isResolved: false,
    }) {
        this.id = new Date().getTime();
        this.description = description;
        this.isResolved = isResolved;
        this.label = label;
    }
}

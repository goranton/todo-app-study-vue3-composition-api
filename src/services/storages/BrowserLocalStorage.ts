import {StorageInterface} from "../interfaces/StorageInterface";

export class BrowserLocalStorage implements StorageInterface {
    getItem(key: string): string {
        return String(localStorage.getItem(key));
    }

    hasItem(key: string): boolean {
        return Boolean(this.getItem(key));
    }

    removeItem(key: string): void {
        if (!this.hasItem(key)) {
            return;
        }

        localStorage.removeItem(key);
    }

    setItem(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}
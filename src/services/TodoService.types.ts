import {StorageInterface} from "./interfaces/StorageInterface";

export type TodoServiceConstants = {
    storageKey: string,
};

export type TodoServiceDependencies = {
    storageService: StorageInterface,
};
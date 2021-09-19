export interface StorageInterface<KeyType = string, ValueType = string> {
    getItem(key: KeyType, defaultValue: ValueType): ValueType;
    setItem(key: KeyType, value: ValueType): void;
    removeItem(key: KeyType): void;
    hasItem(key: KeyType): boolean;
}
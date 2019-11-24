import { useState, useCallback } from "react";

export default function useArray<T>(initialState: T[] = []) {
    const [value, setValue] = useState(initialState);

    const add = useCallback((newValue: T) => setValue(v => [...v, newValue]), [setValue]);

    const remove = useCallback((index: number) =>
        setValue(val => [...val.splice(index, 1)]),
        [setValue]);

    const filter = useCallback((filter: () => boolean) =>
        setValue(val => [...val.filter(filter)]),
        [setValue]);

    const reset = useCallback(() =>
        setValue(() => [...initialState]),
        [setValue]);

    const hookValue = {
        value,
        setValue,
        add,
        remove,
        filter,
        reset
    }
    return hookValue;
}
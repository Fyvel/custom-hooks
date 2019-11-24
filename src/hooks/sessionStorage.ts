import { useState, useEffect } from "react";

export default function useSessionStorage(key: string, defaultValue: string | number) {
    const [state, setState] = useState(() => {
        let value;
        try {
            value = JSON.parse(window.sessionStorage.getItem(key) || String(defaultValue));
        } catch (e) {
            value = defaultValue;
        }
        return value;
    });

    useEffect(() => window.sessionStorage.setItem(key, state), [state]);

    return [state, setState];
}
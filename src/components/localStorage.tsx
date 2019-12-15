import React from "react";
import Button from '@material-ui/core/Button';
import useLocalStorage from "../hooks/localStorage";
import useSessionStorage from "../hooks/sessionStorage";

export default function LocalStorage() {
    const [localKey, setLocalKey] = useLocalStorage('CUSTOM_HOOKS_COUNTER', 0);
    const [sessionKey, setSessionKey] = useSessionStorage('CUSTOM_HOOKS_COUNTER', 0);

    return (
        <>
            <div>
                <p>Click to update value stored in localStorage</p>
                <Button variant="contained" color="primary" onClick={() => setLocalKey(localKey + 1)}>Increment counter</Button>
                <p>Counter value: {localKey}</p>
                <Button variant="contained" color="primary" onClick={() => setLocalKey(0)}>Reset counter</Button>
            </div>
            <div>
                <p>Click to update value stored in sessionStorage</p>
                <Button variant="contained" color="secondary" onClick={() => setSessionKey(sessionKey + 1)}>Increment counter</Button>
                <p>Counter value: {sessionKey}</p>
                <Button variant="contained" color="secondary" onClick={() => setSessionKey(0)}>Reset counter</Button>
            </div>
        </>)
}
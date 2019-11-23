import React from "react";
import { Fragment } from "react";
import useLocalStorage from "../hooks/localStorage";
import Button from '@material-ui/core/Button';

export default function LocalStorage() {
    const [localKey, setLocalKey] = useLocalStorage('CUSTOM_HOOKS_COUNTER', Infinity);
    return (
        <Fragment>
            <p>Click to update value stored in localStorage</p>
            <Button variant="contained" color="secondary" onClick={() => setLocalKey(localKey + 1)}>Increment counter</Button>
            <p>Counter value: {localKey}</p>
            <Button variant="contained" color="secondary" onClick={() => setLocalKey(0)}>Reset counter</Button>
        </Fragment>)
}
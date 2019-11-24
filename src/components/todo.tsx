import React from "react";
import { Fragment } from "react";
import useArray from "../hooks/array";
import { Button, TextField } from "@material-ui/core";

export default function Todo() {
    const todos = useArray();

    return (
        <Fragment>
            <h3>Todos</h3>
            <TextField id="outlined-basic"
                label="Outlined"
                variant="outlined"
                color="primary" />

            <Button
                color="secondary"
                onClick={() => ({ id: 1 })}>Add item</Button>
        </Fragment >);
}
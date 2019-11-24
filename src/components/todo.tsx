import React, { useState, ChangeEvent } from "react";
import { Fragment } from "react";
import useArray from "../hooks/array";
import { Button, TextField } from "@material-ui/core";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

export default function Todo() {
    const initial = '';
    const [item, setItem] = useState<string>(initial);

    const todos = useArray<string>([]);
    const handleChange = (event: ChangeEvent<{ value: unknown }>) =>
        setItem(event.target.value as string);

    const handleAddClick = () => {
        todos.add(item);
        setItem(initial);
    }

    const handleEnterPress = (e: any) => {
        if (e.keyCode == 13) {
            handleAddClick();
        }
    }

    const handleRemoveClick = (index: number) => {
        console.log(index)
        todos.remove(index);
    }

    return (
        <Fragment>
            <h3>Todos</h3>
            <div className="App-Todo-header">
                <TextField id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    color="primary"
                    value={item}
                    onChange={handleChange}
                    onKeyDown={handleEnterPress} />
                <Button
                    color="primary"
                    onClick={handleAddClick}>
                    Add item
                </Button>
            </div>
            <ul className="App-Todo-list">
                {todos.value.map((x, i) =>
                    <li key={i}>
                        {x}
                        <Button
                            color="secondary"
                            onClick={() => handleRemoveClick(i)}>
                            <DeleteForeverRoundedIcon />
                        </Button>
                    </li>)}
            </ul>
            <Button
                onClick={() => todos.reset()}>
                Clear list
            </Button>
        </Fragment >);
}
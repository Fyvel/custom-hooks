import React, { useState, ChangeEvent } from "react";
import useArray from "../hooks/array";
import { List, NewItem } from "../components/List";

export default function Todo() {
    const initial = ''
    const [item, setItem] = useState<string>(initial)

    const todos = useArray<string>([]);
    const handleChange = (event: ChangeEvent<{ value: unknown }>) =>
        setItem(event.target.value as string);

    const handleAddClick = () => {
        if (!item) { return }
        todos.add(item)
        setItem(initial)
    }

    const handleEnterPress = (e: any) => {
        if (+e.keyCode === 13) {
            handleAddClick()
        }
    }

    const handleRemoveClick = (index: number) => {
        todos.remove(index)
    }

    return (
        <>
            <h3>Todos</h3>
            <NewItem
                value={item}
                handleClick={handleAddClick}
                handleKeyDown={handleEnterPress}
                handleChange={handleChange} />
            <List
                items={todos.value}
                handleRemoveItem={handleRemoveClick}
                handleResetList={todos.reset} />
        </>)
}
import React from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from './list.module.scss';


type NewItemProps = {
    value: string
    handleChange: (args: any) => void
    handleKeyDown: (args: any) => void
    handleClick: (args: any) => void
}
export function NewItem({ value, handleChange, handleKeyDown, handleClick }: NewItemProps) {

    return (
        <div className={styles.item}>
            <TextField id="outlined-basic"
                label="Item"
                variant="outlined"
                color="primary"
                value={value}
                onChange={handleChange}
                onKeyDown={handleKeyDown} />
            <Button
                color="primary"
                onClick={handleClick}>
                <AddCircleOutlineIcon />
            </Button>
        </div>
    )
}

type ListProps = {
    items: string[]
    handleRemoveItem: (args: any) => void
    handleResetList: () => void
}
export function List({ items, handleRemoveItem, handleResetList }: ListProps) {
    return (
        <div className={styles.list}>
            {items.map((item, i) => (
                <Item
                    id={i}
                    text={item}
                    key={i}
                    handleRemoveItem={handleRemoveItem} />
            ))}
            {items.length > 0 &&
                <Button
                    onClick={handleResetList}>
                    Clear List
                </Button>
            }
        </div>
    )
}

type ItemProps = {
    id: number,
    text: string
    handleRemoveItem: (id: number) => void
}
export function Item({ id, text, handleRemoveItem }: ItemProps) {
    return (
        <>
            <div className={styles.item}>
                {text}
                <Button
                    color="secondary"
                    onClick={() => handleRemoveItem(id)}>
                    <DeleteForeverRoundedIcon />
                </Button>
            </div>
        </>
    )
}
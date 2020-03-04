import React from "react";
import Button from "@material-ui/core/Button";
import styles from './counter.module.scss'

type Props = {
    callback: (arg: any) => void,
    text: string,
    value: number,
    color: 'primary' | 'secondary'
}
export default function Counter(props: Props) {
    return (
        <>
            <div className={styles.box}>
                <Button
                    variant="contained"
                    color={props.color}
                    onClick={props.callback}>
                    {props.text}
                </Button>
                <p>Current value: {props.value}</p>
            </div>
        </>
    )
}
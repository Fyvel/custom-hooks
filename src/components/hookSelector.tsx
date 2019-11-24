import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import {
    FormControl,
    InputLabel,
    Select,
    makeStyles,
    createStyles,
    Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default function HookSelector({ list, initial, changeHandler }: { list: { id: number, name: string }[], initial: number, changeHandler: (value: any) => void }) {
    const classes = useStyles();
    const [state, setState] = useState(initial);

    const inputLabel = useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = useState(0);

    const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
        setState(event.target.value as number);
        changeHandler(event.target.value);
    };

    useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-hook-native-simple">
                Hook selector
        </InputLabel>
            <Select
                native
                value={state}
                onChange={handleChange}
                labelWidth={labelWidth}
                inputProps={{
                    name: 'hook',
                    id: 'outlined-hook-native-simple',
                }}
            >
                {list.map(item => {
                    return (
                        <option
                            key={item.id}
                            value={item.id}>
                            {item.name}
                        </option>);
                })}
            </Select>
        </FormControl>
    );
}
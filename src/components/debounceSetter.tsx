import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import { makeStyles, Theme, createStyles, FormControl, InputLabel, Select, MenuItem, TextField } from "@material-ui/core";
import useDebounce from "src/hooks/debounce";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 250,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
)


export default function DebounceSetter() {
    const classes = useStyles();
    const inputLabel = useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = useState(0);
    useEffect(() => { setLabelWidth(inputLabel.current!.offsetWidth); }, []);

    const [delay, setDelay] = useState(250);
    const [value, setValue] = useState<string>('');
    const [debouncing, setDebouncing] = useState<string>('');
    const debounced = useDebounce(value, delay);

    const list: { id: number, name: string }[] = [
        { id: 0, name: 'None' },
        { id: 250, name: '250 ms' },
        { id: 500, name: '500 ms' },
        { id: 1000, name: '1 sec' },
    ];

    const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
        setDebouncing('Typing ...')
        setValue(event.target.value as string)
    }

    const handleDelayChange = (event: ChangeEvent<{ value: unknown }>) => {
        setDelay(event.target.value as number)
    };

    useEffect(() => {
        setDebouncing('')
    }, [debounced])

    return (
        <>
            <h3>Debounce (works for any state value)</h3>
            <div className="App-Debounce">

                <div className="box">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel ref={inputLabel} htmlFor="outlined-hook-native-simple">
                            Delay
                    </InputLabel>
                        <Select
                            native
                            value={delay}
                            onChange={handleDelayChange}
                            labelWidth={labelWidth}
                            inputProps={{
                                name: 'delay',
                                id: 'outlined-hook-native-simple',
                            }}
                        >
                            {list.map(item => {
                                return (
                                    <option
                                        key={item.id}
                                        value={item.id}>
                                        {item.name}
                                    </option>)
                            })}
                        </Select>
                    </FormControl>`
                    <TextField id="outlined-basic"
                        label="Input"
                        variant="outlined"
                        color="primary"
                        value={value}
                        onChange={handleChange} />
                    <p className='debouncing'>{debouncing || <>&nbsp;</>}</p>
                    <p>Output : {debounced}</p>
                </div>
            </div>
        </>
    )
}
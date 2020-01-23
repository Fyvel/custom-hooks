import React from "react";
import AddAlarmRounded from '@material-ui/icons/AddAlarmRounded';
import useArray from "src/hooks/array";

export default function FancyCanvas() {
    const initial = Array(10).fill(<AddAlarmRounded />);
    const itemList = useArray(initial);

    return (
        <>
            <h3>Fancy canvas</h3>
            <div className="App-Canvas">
                {itemList.value.map((x, i) =>
                    <div className="App-Canvas-Item" key={i}>
                        <i>{x}</i>
                    </div>)}
            </div>
        </>)
}
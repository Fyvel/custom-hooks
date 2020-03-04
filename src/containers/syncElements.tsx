import React, { useState } from "react"
import EventEmitter from "../event/event"
import Counter from "src/components/Counter"
import '../App.scss'

export default function SyncElements() {

    const [value, setValue] = useState(0)

    EventEmitter.subscribe('increment', () => setValue(value + 1))
    EventEmitter.subscribe('decrement', () => setValue(value - 1))

    const handleIncrement = () => EventEmitter.dispatch('increment')
    const handleDecrement = () => EventEmitter.dispatch('decrement')

    return (
        <>
            <div className="App-SyncElement">
                <Counter color='primary'
                    callback={handleIncrement}
                    value={value}
                    text='Increment' />
                <Counter color='secondary'
                    callback={handleDecrement}
                    value={value}
                    text='Decrement' />
            </div>
        </>
    )
}
import React, { useState, useEffect } from "react"
import EventEmitter from "../event/event"
import Counter from "src/components/Counter"
import '../App.scss'

export default function SyncElements() {

    const [value, setValue] = useState(0)

    const handleIncrement = () => EventEmitter.dispatch('increment')
    const handleDecrement = () => EventEmitter.dispatch('decrement')

    useEffect(() => {
        EventEmitter.subscribe('increment', () => setValue(value + 1))
        EventEmitter.subscribe('decrement', () => setValue(value - 1))

        return () => {
            EventEmitter.unsubscribe('increment')
            EventEmitter.unsubscribe('decrement')
        }
    }, [value])

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
                <Counter color='primary'
                    callback={handleIncrement}
                    value={value}
                    text='Increment' />
            </div>
        </>
    )
}
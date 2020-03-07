type Callback<T> = (arg?: T) => void
const CustomEventEmitter = {
    events: {} as { [key: string]: Callback<any>[] },
    dispatch: function <T>(eventName: string, data?: T) {
        if (!this.events[eventName]) return
        this.events[eventName].forEach((callback: Callback<T>) => callback(data))
    },
    subscribe: function <T>(eventName: string, callback: Callback<T>) {
        if (!this.events[eventName]) this.events[eventName] = []
        this.events[eventName].push(callback)
    },
    unsubscribe: function (eventName: string) {
        this.events[eventName] = []
    }
}
export default CustomEventEmitter
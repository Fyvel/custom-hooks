export type AnyFunction = (...args: any[]) => any;

export type StringMap<T> = { [key: string]: T };

export type Action<T extends string = string, P = void> = P extends void
    ? Readonly<{ type: T }>
    : Readonly<{ type: T; payload: P }>;

export type ActionsOfType<ActionUnion, ActionType extends string> = ActionUnion extends Action<ActionType> ? ActionUnion : never;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

export function createAction<T extends string>(type: T): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P): Action<T, P>;

export function createAction<T extends string, P>(type: T, payload?: P): Action {
    const action = payload === undefined
        ? { type }
        : { type, payload };
    return action;
}

export type ActionNames<T> = { [key in keyof T]: string }

export type Handlers<State, ActionNames> = {
    [key in keyof ActionNames]: (state: State, action: Action) => State
}

// export function createReducer<State, Handlers, Actions extends Action>(initial: State, handlers: Handlers): (state: State, action: Actions) => State {
//     return (state: State = initial, action: Actions) => handlers[action.type]
//         ? handlers[action.type](state, action.type)
//         : state
// }
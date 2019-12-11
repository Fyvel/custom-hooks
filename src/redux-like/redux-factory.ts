export type AnyFunction = (...args: any[]) => any;

export type StringMap<T> = { [key: string]: T };

export type Action<T extends string = string, P = void> = P extends void
    ? Readonly<{ type: T }>
    : Readonly<{ type: T; payload: P }>;

export type ActionsOfType<ActionUnion, ActionType extends string> = ActionUnion extends Action<ActionType> ? ActionUnion : never;

export type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

export function createAction<T extends string>(type: T): Action<T>;

export function createAction<T extends string, P>(
    type: T,
    payload: P,
): Action<T, P>;

export function createAction<T extends string, P>(type: T, payload?: P) {
    const action = payload === undefined
        ? { type }
        : { type, payload };

    return action;
}

export function createReducer<T = any>(initial: T, handlers: StringMap<any>) {
    return (state = initial, action: Action) => {
        const handler = handlers[action.type]
        return handler ? handler(state, action) : state
    }
}
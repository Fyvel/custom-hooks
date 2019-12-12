
type AnyFunction = (...args: any[]) => any;

type StringMap<T> = { [key: string]: T };

type Action<T extends string = string, P = void> = P extends void
    ? Readonly<{ type: T }>
    : Readonly<{ type: T; payload: P }>;

type ActionsOfType<ActionUnion, ActionType extends string> = ActionUnion extends Action<ActionType> ? ActionUnion : never;

type ActionsUnion<A extends StringMap<AnyFunction>> = ReturnType<A[keyof A]>;

function createAction<T extends string>(type: T): Action<T>;

function createAction<T extends string, P>(type: T, payload: P, ): Action<T, P>;

function createAction<T extends string, P>(type: T, payload?: P): Action {
    const action = payload === undefined
        ? { type }
        : { type, payload };
    return action;
}

type Handlers<Enum, State, Action> = {
    [key in keyof Enum]: (state: State, action: Action) => State
}

export function createReducer<State, A extends Action, Enum>(initial: State, handlers: Handlers<Enum, State, A>): (state: State, action: A) => State {
    return (state: State = initial, action: A) => handlers[action.type]
        ? handlers[action.type](state, action.type)
        : state
}

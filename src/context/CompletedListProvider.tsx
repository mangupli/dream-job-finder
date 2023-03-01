import { useReducer, useMemo, createContext, ReactElement } from "react"

export type CompletedActivityType = {
    name: string, 
    weight: number,
    qty: number,
/*     order: number */
}

type CompletedListStateType = {
    completed: CompletedActivityType[]
}

const initCompletedListState = { completed: [] }

const REDUCER_ACTION_TYPE = {
    INC: "INC",
    DEC: "DEC",
    ADD: "ADD",
    REMOVE: "REMOVE",
/*    SUBMIT: "SUBMIT" */
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
    type: string,
    payload?: CompletedActivityType
}

const reducer = (state: CompletedListStateType, action: ReducerAction): CompletedListStateType => {

    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD: {
            if(!action.payload) {
                throw new Error ('No action.payload in ADD action')
            }

            const { name, weight } = action.payload

            const activityExists: CompletedActivityType | undefined = state.completed.find(activity => activity.name === name)

            let filteredList: CompletedActivityType[];
            let qty = 1;

            if (activityExists) {
                filteredList = state.completed.filter(activity => activity.name !== name)
                qty = activityExists.qty + 1
            }
            else {
                filteredList = state.completed
            }

            return {...state, completed: [...filteredList, { name, weight, qty }]}          
        }
        case REDUCER_ACTION_TYPE.REMOVE: {
            if(!action.payload) {
                throw new Error ('No action.payload in REMOVE action')
            }

            const { name } = action.payload;
            const filteredList: CompletedActivityType[] = state.completed.filter(activity => activity.name !== name);

            return {...state, completed: filteredList}           
        }
        case REDUCER_ACTION_TYPE.DEC: {
            if(!action.payload) {
                throw new Error ('No action.payload in INC action')
            }

            const { name, weight } = action.payload

            const activityExists: CompletedActivityType | undefined = state.completed.find(activity => activity.name === name)

            if (!activityExists) {
                throw new Error("Trying to decrement the quantity of a activity that doesn't exist in Completed List")
            }

            let qty =  activityExists.qty - 1;

            /* so the quantity always stays the positive number, if qty <= 0 — do nothing*/
            if (qty <= 0) {
                return state
            }
            
            let filteredList: CompletedActivityType[] = state.completed.filter(activity => activity.name !== name);

            return {...state, completed: [...filteredList, { name, weight, qty }]}        

        }
        case REDUCER_ACTION_TYPE.INC: {
            if(!action.payload) {
                throw new Error ('No action.payload in INC action');
            }

            const { name, weight } = action.payload

            const activityExists: CompletedActivityType | undefined = state.completed.find(activity => activity.name === name)

            if (!activityExists) {
                throw new Error("Trying to increment the quantity of a activity that doesn't exist in Completed List")
            }
            
            const qty = activityExists.qty + 1
            const filteredList: CompletedActivityType[] = state.completed.filter(activity => activity.name !== name)

            return {...state, completed: [...filteredList, { name, weight, qty }]}
            
        }
        default: {
            throw new Error('Unidentified action type')
        }
    }
}

const useCompletedListContext = (initCompletedListState: CompletedListStateType) => {
    
    const [ state, dispatch ] = useReducer(reducer, initCompletedListState)

    const completed = state.completed.sort((a, b) => {
        return b.weight - a.weight
    })

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE
    }, []);

    const totalActivities: number = state.completed.reduce(( prevValue, activity ) => {
        return prevValue + activity.qty
    }, 0)

    const totalWeight: number = state.completed.reduce(( prevValue, activity ) => {
        return prevValue + activity.weight
    }, 0)

    
    return { completed, dispatch, totalActivities, totalWeight, REDUCER_ACTIONS }

}

export type UseCompletedListContextType = ReturnType<typeof useCompletedListContext>

const initCompletedListContextState: UseCompletedListContextType = {
    completed: [],
    dispatch: () => {},
    totalWeight: 0,
    totalActivities: 0,
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE
}

export const CompletedListContext = createContext<UseCompletedListContextType>(initCompletedListContextState)

type ChildrenType = {
    children: ReactElement
}

export const CompletedListProvider = ({ children }: ChildrenType) => {

    return (
        <CompletedListContext.Provider value={useCompletedListContext(initCompletedListContextState)}>
            {children}
        </CompletedListContext.Provider>
    )
}

export default CompletedListContext

export interface CalculatedMaxLoanState {
    CalculatedMaxLoan: number
}

const initialState = {
    CalculatedMaxLoan: 0
}

type Action = {type: "CALCULATE_MAX_LOAN", payload: number}

export const calculatedMaxLoanReducer = (state: CalculatedMaxLoanState = initialState, action: Action) => {
    switch(action.type){
        case "CALCULATE_MAX_LOAN": 
            //To-Do
            return {...state, CalculatedMaxLoan: action.payload}
        default:
            return {state, CalculatedMaxLoan: 0}
    }
}
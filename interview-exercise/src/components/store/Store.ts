import {createStore, combineReducers} from 'redux'
import {calculatedMaxLoanReducer} from './CalculatedMaxLoanReducer'
/* import {calculatedBudgetReducer} from './CalculatedBudgetReducer' */


//Still working on getting multiple reducers to work
/* export const store = createStore(combineReducers({calculatedMaxLoanReducer, calculatedBudgetReducer})) */

export const store = createStore(calculatedMaxLoanReducer)
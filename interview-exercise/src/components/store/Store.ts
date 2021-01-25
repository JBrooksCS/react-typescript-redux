import {createStore, combineReducers} from 'redux'
import {calculatorReducer} from './CalculatorReducer'
import { State } from "./CalculatorReducer";

/* import {calculatedBudgetReducer} from './CalculatedBudgetReducer' */


//Still working on getting multiple reducers to work
/* export const store = createStore(combineReducers({calculatedMaxLoanReducer, calculatedBudgetReducer})) */

export const store = createStore(calculatorReducer)
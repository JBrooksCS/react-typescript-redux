import {createStore} from 'redux'
import {calculatedMaxLoanReducer} from './CalculatedMaxLoanReducer'

export const store = createStore(calculatedMaxLoanReducer)
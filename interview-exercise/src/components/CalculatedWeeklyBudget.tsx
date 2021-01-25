import { Component } from 'react';
import {connect} from 'react-redux';
import { CalculatedBudgetState } from "./store/CalculatedMaxLoanReducer";
import {store} from "./store/Store"


//Example of a class component 
class CalculatedWeeklyBudget extends Component {
    

    render(){
    console.log(store.getState());
    let currentState = store.getState();

    return (
        <div>
            <h4>WEEKLY BUDGET</h4>
            <div>$ {currentState.CalculatedBudget}</div>
        </div>
    );}
}
function mapStateToProps(state: CalculatedBudgetState){
    return{
        CalculatedBudget: state.CalculatedBudget
    };
  }

export default connect(mapStateToProps)(CalculatedWeeklyBudget);
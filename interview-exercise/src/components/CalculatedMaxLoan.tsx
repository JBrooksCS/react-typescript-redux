import React from 'react';
import { connect } from 'react-redux'
import { CalculatedMaxLoanState } from "./store/CalculatedMaxLoanReducer";


function CalculatedMaxLoan(props:any) {
    return (
        <div>
            <h4>MAXIMUM LOAN AMOUNT</h4>
            <div>$ {props.loanAmount}</div>
        </div>
    );
}

//state from redux store are mapped to props
const mapStateToProps = (state: CalculatedMaxLoanState) => {
    return {
        loanAmount: state.CalculatedMaxLoan
    }
}
export default connect(mapStateToProps) (CalculatedMaxLoan)
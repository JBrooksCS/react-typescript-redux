export interface CalculatedMaxLoanState {
  CalculatedMaxLoan: number;
}
export interface CalculatedBudgetState {
    CalculatedBudget: number;
  }

export interface State {
  CalculatedMaxLoan: number;
  CalculatedBudget: number;
}


const initialState: State = {
  CalculatedMaxLoan: 0,
  CalculatedBudget: 0,
};

/* type Action = {
  type: "CALCULATE_MAX_LOAN";
  payload: {
    loanAmount: number;
  };
}; */

export const calculatorReducer = (
    state: any = initialState,
  //state: CalculatedMaxLoanState = initialState,
  action: any
) => {
  switch (action.type) {
    case "CALCULATE_MAX_LOAN":
      var maxLoan:number = action.payload.loanAmount * 1.5;
      return { ...state, CalculatedMaxLoan: maxLoan };
    case "CALCULATE_BUDGET":
      var weeklyBudget:number = state.CalculatedMaxLoan / action.payload.numWeeks;
      return { ...state, CalculatedBudget: weeklyBudget.toFixed(2) };
    default:
      return { state, CalculatedMaxLoan: 0 };
  }
};

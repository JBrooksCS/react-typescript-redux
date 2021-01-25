export interface CalculatedMaxLoanState {
  CalculatedMaxLoan: number;
}
export interface CalculatedBudgetState {
    CalculatedBudget: number;
  }

const initialState = {
  CalculatedMaxLoan: 0,
  CalculatedBudget: 0,
};

/* type Action = {
  type: "CALCULATE_MAX_LOAN";
  payload: {
    loanAmount: number;
  };
}; */

export const calculatedMaxLoanReducer = (
    state: any = initialState,
  //state: CalculatedMaxLoanState = initialState,
  action: any
) => {
  switch (action.type) {
    case "CALCULATE_MAX_LOAN":
      var maxLoan = action.payload.loanAmount * 1.5;
      return { ...state, CalculatedMaxLoan: maxLoan };
    case "CALCULATE_BUDGET":
      var weeklyBudget = state.CalculatedMaxLoan / action.payload.numWeeks;
      return { ...state, CalculatedBudget: weeklyBudget };
    default:
      return { state, CalculatedMaxLoan: 0 };
  }
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CollateralInput } from "./components/CollateralInput";
import CalculatedMaxLoan from "./components/CalculatedMaxLoan";
import { CalculatedMaxLoanState } from "./components/store/CalculatedMaxLoanReducer";
import LoanTermInput from "./components/LoanTermInput";
import CalculatedWeeklyBudget from "./components/CalculatedWeeklyBudget";
import { Console } from "console";
import {store} from "./components/store/Store"

function App() {

 /*  const collateralInput = useSelector<
    CalculatedMaxLoanState,
    CalculatedMaxLoanState["CalculatedMaxLoan"]
  >((state) => state.CalculatedMaxLoan);
 */
 /*  const dispatch = useDispatch();
  const updateMaxLoan = (collateral: number) => {
    dispatch({ type: "CALCULATE_MAX_LOAN", payload: collateral });
  }; */
 

  

  return (
    <div className="App">
      <div style={{ padding: "1em" }}>[BUILT]</div>
      <div
        style={{
          display: "flex",
          padding: "2em",
          border: "10px solid rgb(225, 59, 37)",
        }}
      >
        <div style={{ display: "flex", padding: "2em" }}>
          <CollateralInput  />
        </div>
        <div style={{ display: "flex", padding: "2em" }}>
          <CalculatedMaxLoan />
        </div>
        <div style={{ display: "flex", padding: "2em" }}>
          <LoanTermInput />
        </div>
        <div style={{ display: "flex", padding: "2em" }}>
          <CalculatedWeeklyBudget  />
        </div>
      </div>
    </div>
  );
}

export default App;

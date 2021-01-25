import React, { ChangeEvent } from 'react';
import {store} from "./store/Store"


export default function LoanTermInput() {

  //Setting default initialization for input
  const [numWeeks, setNumWeeks] = React.useState(0);

  //Update Input Field while typing
  const updateInputField = (event: ChangeEvent<HTMLInputElement>) => {
    const currentInputValue: number = parseInt(event.target.value);
    setNumWeeks(currentInputValue);
  }
    //Button's onClick
    const onButtonClick = () => {
        setNumWeeks(numWeeks);
        store.dispatch({
            type: "CALCULATE_BUDGET",
            payload: {
                numWeeks: numWeeks
            }
        })
    }

  
  return (
    <div>
      <h4>LOAN TERM (weeks)</h4>
      <input value={numWeeks} onChange={updateInputField} type="number"/>
      <button onClick={onButtonClick}>Enter</button>
    </div>
  );
}

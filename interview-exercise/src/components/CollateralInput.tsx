import React, { ChangeEvent } from 'react';
import {store} from "./store/Store"



export const CollateralInput: React.FC = () => {
    
    //Setting default initialization for input
    const [collateral, setCollateral] = React.useState(0);

    //Update Input Field while typing
    const updateInputField = (event:ChangeEvent<HTMLInputElement>) => {
        const currentInputValue: number = parseInt(event.target.value);
        setCollateral(currentInputValue);
    } 

    //Button's onClick
    const onButtonClick = () => {
        setCollateral(collateral);
        store.dispatch({
            type: "CALCULATE_MAX_LOAN",
            payload: {
                loanAmount: collateral
            }
        })
    }

    return (
        <div>
            <h4>COLLATERAL</h4>$
            <input value={collateral} onChange={updateInputField} type="number"/>
            
            <button onClick={onButtonClick}>Enter</button>
        </div>
    );
}
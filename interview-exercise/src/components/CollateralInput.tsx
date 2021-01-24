import React, { ChangeEvent } from 'react';
import {store} from "./store/Store"


interface CollateralInputProps {
    updateCollateral(collateral: number): void;
}

export const CollateralInput: React.FC<CollateralInputProps> = ({updateCollateral}) => {
    
    //Setting default initialization for input
    const [collateral, setCollateral] = React.useState(0);

    //Update Input Field
    const updateInputField = (event:ChangeEvent<HTMLInputElement>) => {
        const currentInputValue: number = parseInt(event.target.value);
        setCollateral(currentInputValue);
    }

    //Button's onClick
    const onButtonClick = () => {
        updateCollateral(collateral);
        setCollateral(collateral);
        store.dispatch({
            type: "CALCULATE_MAX_LOAN",
            payload: collateral
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
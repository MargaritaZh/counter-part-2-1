import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {SelectValue} from "./SelectValue";

function App() {
    const initialValue = '1'; // Initial start value
    const initialMaxValue = '6'; // Initial max value

    const storedStartValue = localStorage.getItem('startValue') || initialValue;
    const storedMaxValue = localStorage.getItem('maxValue') || initialMaxValue;

    const [startValue, setStartValue] = useState<number>(parseInt(storedStartValue, 10));
    const [maxValue, setMaxValue] = useState<number>(parseInt(storedMaxValue, 10));
    //режим редактирования
    const [isValueSet, setIsValueSet] = useState(true);

    const [initialStartValue, setInitialStartValue] = useState<number>(parseInt(storedStartValue, 10));

    const [displayedValue, setDisplayedValue] = useState<number>(parseInt(storedStartValue, 10));


    useEffect(() => {
        localStorage.setItem('startValue', startValue.toString());
        localStorage.setItem('maxValue', maxValue.toString());
    }, [startValue, maxValue]);


    const handleIncrement = () => {
        if (startValue < maxValue) {
            const newNumber = startValue + 1;
            setStartValue(newNumber);
        }
    };


    const handleReset = () => {
        setStartValue(initialStartValue);
        setDisplayedValue(initialStartValue); // Обновляем displayedValue при сбросе
    };

    const handleSetValue = () => {
        setInitialStartValue(startValue);
        setIsValueSet(true);

    };

    const handleInputChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(e.target.value, 10);
        if (!isNaN(newValue)) {
            setIsValueSet(false)
            setStartValue(newValue);
            setDisplayedValue(newValue); // Update displayedValue when input changes
        }
    };

    const handleInputChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setIsValueSet(false)
        setMaxValue(Number(e.currentTarget.value))
    }


    console.log(startValue, isValueSet)

    const isIncorrectValue = (startValue < 0 || startValue > maxValue || displayedValue === maxValue)

    const disabledSetBtn = startValue < 0 || startValue >= maxValue

    const disabledResetBth = startValue === initialStartValue

    const disabledIncBtn = startValue === maxValue

    const inputSettingsClassNameMinValue = `input-settings ${startValue < 0 || startValue > maxValue ? "input-error" : ""}`

    const inputSettingsClassNameMaxValue = `input-settings ${maxValue < 0 ? "input-error" : ""}`

    const numberStatusClassName = startValue < 0 || startValue >= maxValue ? "color-red-number" : "";

    const displayedValueText = isIncorrectValue ? 'Incorrect value' : isValueSet ? startValue : 'Введите данные';


    return (
        <div className="App">
            {/*<Settings/>*/}
            <div className="Wrapper-Settings">
                <div className="Wrapper-value">
                    <div className="Wrapper-text">
                        <p>max value:</p>
                        {/*<input*/}
                        {/*    className={`input-settings ${maxValue < 0 ? "input-error" : ""}`}*/}
                        {/*    value={maxValue}*/}
                        {/*    onChange={handleInputChangeMaxValue}*/}
                        {/*    type="number"*/}
                        {/*/!*            */}
                        <SelectValue value={maxValue} onChange={handleInputChangeMaxValue} type={"number"}
                                     inputSettingsClassName={inputSettingsClassNameMaxValue}/>
                    </div>
                    <div className="Wrapper-text">
                        <p>min value:</p>
                        {/**/}
                        {/*/!*           */}
                        {/*<input*/}
                        {/*    value={displayedValue} // Use displayedValue in the input*/}
                        {/*    onChange={handleInputChange}*/}
                        {/*    className={`input-settings ${startValue < 0 || startValue > maxValue ? "input-error" : ""}`}*/}
                        {/*    type="number"*/}
                        {/*/!*           */}
                        {/**/}
                        <SelectValue value={displayedValue}
                                     onChange={handleInputChangeMinValue}
                                     type={"number"} inputSettingsClassName={inputSettingsClassNameMinValue}
                        />
                    </div>
                </div>
                <div className="wrapper-bth-setting">
                    <Button title={"set"} callback={handleSetValue}
                            disabled={disabledSetBtn}/>
                </div>
            </div>
    {/*<Counter/>*/}

    <div className="Wrapper-counter-1">
        <div className="Wrapper-number">
            <p className={numberStatusClassName}>
                {displayedValueText}
            </p>
        </div>
        <div className="Wrapper-bth">
            <Button title={"inc"} callback={handleIncrement} disabled={disabledIncBtn}/>
            <Button title={"res"} callback={handleReset} disabled={disabledResetBth}/>
        </div>
    </div>
</div>
)
    ;
}

export default App;
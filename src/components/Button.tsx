import React from 'react';

interface ButtonProps {
    initialNumber?: number;
    onNumberChange?: (someNumber: number) => void;
}

const Counter: React.FC<ButtonProps> = ({ initialNumber, onNumberChange }) => {
    const [counterNumber, setCounterNumber] = React.useState(initialNumber || 0);

    const incrementNumber = () => {
        const number = counterNumber + 10;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    const decrementNumber = () => {
        const number = counterNumber - 10;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    const multiplyNumber = () => {
        const number = counterNumber * 10;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    const divideNumber = () => {
        const number = counterNumber / 2;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    return (
        <div>
            <button onClick={incrementNumber}>+</button>
            <button onClick={decrementNumber}>-</button>
            <button onClick={multiplyNumber}>*</button>
            <button onClick={divideNumber}>/</button>
            {counterNumber}
        </div>
    );
}
export default Counter;

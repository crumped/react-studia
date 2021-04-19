import React from 'react';

interface CounterProps{
    initialNumber?: number;
    onNumberChange?: (someNumber: number) => void;
}

const Counter:React.FC<CounterProps> = ({ initialNumber, onNumberChange }) => {
    const [counterNumber, setCounterNumber] = React.useState(initialNumber || 0);

    const incrementNumber = () => {
        const number = counterNumber + 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    const decrementNumber = () => {
        const number = counterNumber - 1;
        setCounterNumber(number);
        onNumberChange && onNumberChange(number);
    }

    return (
        <div>
            <button onClick={incrementNumber}>+</button>
            <button onClick={decrementNumber}>-</button>
            {counterNumber}
        </div>
    );
}
export default Counter;

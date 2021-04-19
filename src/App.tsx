import React from 'react';
import './App.css';

import CustomHeader, {addNumber} from './components/CustomHeader'
import Counter from "./components/Counter";
import Button from "./components/Button";

const App = () => {
    const addedNumber = addNumber(1,2);
    const [changeNumber, setChangedNumber] = React.useState(0);

    const handleNumberChange = (newNumber: number) =>{
        setChangedNumber(newNumber);
    }

  return (
    <div className="App">
        <CustomHeader>
            <Button onNumberChange={handleNumberChange} initialNumber={50} />
            <Counter onNumberChange={handleNumberChange} initialNumber={10} />
            {
                (changeNumber > 15 && (<div>liczba przekroczona</div>)) || (changeNumber > 10 && (<div>liczba jest wieksza od 10</div>))
            }
            {
                changeNumber < -10 && (<div>Liczba jest mniejsza od -10</div>)
            }
        </CustomHeader>
    </div>
  );
}

export default App;

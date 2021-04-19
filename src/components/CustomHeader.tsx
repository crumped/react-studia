import React from 'react';
import logo from '../logo.svg';

// const CustomHeader = () => {
//     return (
//         <header className="App-header">
//             <img src={logo} className="App-logo" alt="logo" />
//             <p>
//                 Edit <code>src/App.tsx</code> and save to reload.
//             </p>
//             <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//                 >
//                 Learn React
//             </a>
//         </header>
//     );
// };


const CustomHeader: React.FC = ({children}) => {
    return (
        <div>
            <p>Custom Header</p>
            {children}
        </div>
    );
};

export const addNumber = (a: number, b: number) => {
  return a+b;
};

export default CustomHeader;

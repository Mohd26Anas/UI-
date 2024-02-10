import { useEffect, useState } from 'react';
import './App.css';
import Switcher from './switcher';
import Calculator from './calulator';

function App() {
  const [state, setState] = useState({
    bill: 0,
    people: 0,
    tip: 0,
    tipPerPerson: 0,
    totalPerPerson: 0,
  });

  const calculateAmount = () => {
    const { bill, tip, people } = state;

    const totalAmount = bill + (bill * (tip / 100));

    const tipPerPerson = totalAmount / people;
    const totalPerPerson = totalAmount / people;

    setState((prev) => ({ ...prev, tipPerPerson, totalPerPerson }));
  };

  useEffect(() => {
    if(state?.bill && state?.tip && state?.people)
    calculateAmount();
  }, [state.bill, state.tip, state.people]);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
 

    <div className="flex flex-col justify-center items-center w-full h-full  bg-blue-100">
        <div className=' flex h-auto flex-col overflow-y-auto gap-21.25  p-10 '>

			<div className="flex w-full h-25  justify-center items-center">
				<span className="flex font-IBMPlexMonoRegular font-semibold text-green-50 text-ft3">
					SPLT
					<br /> TTER
				</span>
			</div>
			<div className="flex w-full justify-center items-center">
				<Calculator />
			</div>
        </div>
		</div>
  );
}

export default App;

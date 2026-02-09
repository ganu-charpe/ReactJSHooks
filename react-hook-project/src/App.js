import React, { createContext, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState } from 'react'
import MainComponent from './MainComponent';
import LoginContextProvider from './context/LoginContextProvider';
import PrintTable from './PrintTable';
import useFetch from './customhooks/useFetch';

export const LoginContext = createContext();

const initaialState = { count: 0};

const ACTION = {
  INCREASE : 'increase',
  DESCREASE: 'decrease'
}

const reducer = (state, action) => {
  console.log('action-', action);

  switch (action.type) {
    case ACTION.INCREASE:
      return {count : state.count + 1 };

    case ACTION.DESCREASE:
      return {count : state.count - 1 };
  
    default:
      return state;
  }
}

const App = () => {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [details, setDetails] = useState({
    count: 0,
    name: 'Ganesh'
  });

  const data = useFetch('https://jsonplaceholder.typicode.com/users');

  function handleObject() {
    setDetails((prev) => ({
      ...prev,
      count: prev.count + 1 ,
    }));
  };

  /**seEffect without dependencies */
  // useEffect(() => {
  //   document.title = `${count} times`;
  // });

   /**useEffect with empty array  */
  // useEffect(() => {
  //   document.title = `${count} times`;
  // }, []);

  /**useEffect with variables  */
  useEffect(() => {
    console.log('Run Effects....');
    refCount.current = refCount.current + 1;
    
    document.title = `${count} times`;

    return (() => {
      console.log('clean up', count);
    })
  }, [count]);

  const refCount = useRef(0);
  const inputRef = useRef();

  function onButtonClick() {
    inputRef.current.style.width = '300px';
    inputRef.current.focus();
  }

  const [state, dispatch] = useReducer(reducer, initaialState);

  function onIncreaseClick() {
      dispatch({type: ACTION.INCREASE});
  }

  function onDecreaseClick() {
    dispatch({type: ACTION.DESCREASE});
  }

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
      console.log('use effect');
  }, [toggle]);

  useLayoutEffect(() => {
    console.log('use layout effect');
  }, [toggle]);


  const [num, setNum] = useState(0);
  const [dark, setDark] = useState(false);

  const calculation = useMemo(() => {
    return expensiveFunction(num);
  }, [num])

  // const calculation = expensiveFunction(num);
  const cssStyle = {
    backgroundColor: dark? 'black' : 'white',
    color: dark? 'white': 'black'
  }

  // const calculateTable = () => {
  //   return [num * 1, num * 2, num * 3, num * 4, num * 5];
  // }

  const calculateTable = useCallback(() => {
    return [num * 1, num * 2, num * 3, num * 4, num * 5];
  }, [num])

  return (
    <>
    <div>
      <input type='text' onChange={(e) => setName(e.target.value)}></input>
      <h1>
        {name} has clicked {count} times!!
        </h1>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      <h1>
        {details.name} has clicked {details.count} times!!
        </h1>
      <button onClick={ handleObject }> useState with Object</button>
    </div>

     {/* useContext <LoginContext.Provider> */}
    <LoginContext.Provider value={'Ganesh'}>
        <div>
          <MainComponent></MainComponent>
        </div>
    </LoginContext.Provider>

    <hr></hr>

    <LoginContextProvider>
          <MainComponent></MainComponent>
    </LoginContextProvider>

    <div>
      <h1>{refCount.current}</h1>
      <input type='text' ref={inputRef}></input>
      <button onClick={onButtonClick}>Button</button>
    </div>

    <hr></hr>


    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
    </div>

    <hr></hr>

    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      { toggle && <h3>Ganesh Charpe</h3>}
    </div>

    <hr></hr>

    <div style={cssStyle}>
      <input type='number' value={num} onChange={(e) => setNum(e.target.valueAsNumber)}></input>
      <h2> Calculations: {calculation}</h2>
      <PrintTable calculateTable={calculateTable}></PrintTable>
      <button onClick={() => setDark(!dark)}>Toggle</button>
    </div>

    <hr></hr>
    {
      data.map((res) => {
        return (
          <h4 key={res.id}>
            {res.id} -- {res.name}
          </h4>
        )
      })
    }
    
    </>
  )
}

function expensiveFunction(val) {
  console.log('Loop Started');

  for(let i=0; i < 10000000; i++) {}
  return val;
}

export default App

# ReactJSHooks

Hooks are the functions to use some react features in functional components.

In other words, Hooks are functions that make Functional components work like Class components.

# Life cycles Hooks of ReactJS
1. useState - useState() return name and set method 
    useState Hooks is a function to add State in Functional Component.

    State is nothing but just values or variables of your component.

2. useEffect - useEffect(callback, dependencies)
    useEffect is used to perform side effects in our component.

    Side effects are action which are performed with the 'Outside World'.
    # Some Common Side Effects - 
    - Fetching data form API
    - Updating the DOM document & window
    - Timer function (setTimeout, setInterval)

    # Variations of useEffect
    - useEffect without dependencies
    - useEffect with empty array 
    - useEffect with variables

    # Clean up function 
     - we have write return insdie useEffect callback function


3. useContext - useContext(argument)
    useContext is used to manage global data in react application
    like Global state, Services, Themes and User Settings

    When to use -
    when we have Main app file and nested files need data then will use useContext
    exm - app-> main Comp -> Feed -> Following -> Single Post (need data here)

    # How to create context?
     - Creating the Context
     - Providing the Context
     - Consuming the Context
  
    Example ---
   import React, { createContext, useContext, useState } from "react";

    const ThemeContext = createContext();

    function App() {
      const [theme, setTheme] = useState("light");
    
      return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Toolbar />
        </ThemeContext.Provider>
      );
    }

    function Toolbar() {
      return <ThemeDropdown />;
    }

    function ThemeDropdown() {
      const { theme, setTheme } = useContext(ThemeContext);
    
      return (
        <div
          style={{
            background: theme === "light" ? "#fff" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h2>Current Theme: {theme}</h2>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            style={{ padding: "8px", fontSize: "16px" }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
          );
        }
        export default App;
  
5. useRef - useRef(initialvalue)
    useRef allows us to access DOM elements.
    For creating mutable variables which will not re-render the component.


6. useReducer - useReducer(reducer, initialState)
    useReducer is used to manage state in our react application.
    In other words, useReducer works like a state management tool.

    State management is used to manage all states of application in a simple way.
    Always use the useReducer hook when you have a lot of states and methods to handle.

7. useLayoutEffect - useLayoutEffect(callback, dependencies)
    Exactly same as useEffect but useLayoutEffect runs before the DOM is printed on the browser.
    Example - to Set Height, width and anything related to Layout.
    It runs synchronously 

8. useMemo - useMemo(callback, dependencies)
    useMemo hook is used to apply Memoization in React.
    Memoization is a technique for improving the performance of code.
    It is useful to avoid expensive calculations on every render when the returned value is not change.

9. useCallback - useCallback(callback, dependencies)
    useCallback is used to return Memoize function.
    It's also useful for preventing functions from being re-created or re-rendering.

    # useCallback - return memoize function and you can pass value as parameter 
    # useMemo - return Memoize value and we can not pass parameter

10. Custom Hooks - 
    custom hooks are basically a reuseable function.
    In simple terms, Custom hooks are your own hooks that you create for your own use.
    And you can use them multiple times in your project.

11. useImperativeHandle
12. useDebugValue
13. useId
14. useTransition
15. useDeferredValue
16. useSyncExternalStore
17. useInsertionEffect

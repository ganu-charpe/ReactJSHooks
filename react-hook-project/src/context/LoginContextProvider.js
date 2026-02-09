import React, { createContext, useState } from 'react'

export const LoginContext = createContext();

function LoginContextProvider({child}) {
    const [name] = useState('Ganesh');

  return (
    <LoginContext.Provider value={name}>
        {child}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider
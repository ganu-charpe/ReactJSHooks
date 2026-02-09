import React, { useContext } from 'react' 
import { LoginContext } from './context/LoginContextProvider';

function SinglePost() {
    const login  = useContext(LoginContext);
    console.log(login);
  return (
    <div>
        SinglePost 
        <h1>{login}</h1>
    </div>
  )
}

export default SinglePost
import React, { useState } from 'react'

const Test = () => {
    const [state, setState] = useState(false);

  return (
    <div>
        {state ? <div> 
            <h1>Signup</h1> <br />
            Name<input type="text" /> <br />
            Password<input type="password" /> <br />
            <input type="button" value='Signup'/>
        </div>: 
        
        <div>
            <h1>Login</h1> <br />
            Name<input type="text" /> <br />
            Password<input type="password" /> <br />
            <input type="button" value='Login'/>
        </div>}

    </div>
  )
}

export default Test

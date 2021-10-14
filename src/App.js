import React, { useState } from 'react'
import { createBrowserHistory } from 'history';

import ReactWebSession, { updateSession } from 'react-web-session';

const history = createBrowserHistory();
function App() {
  const [data, setData] = useState([]);
  
  const HandleCallBack = (data) => {
    setData(data);
    console.log(data)
  }
  return (
    <div>
      <h2>Hello my friend, check console for your session</h2>
      <ReactWebSession
      callback={HandleCallBack}
      data={{ newUser: true, purchases: [] }}
      history={history}
      timezone="America/Sao_Paulo"
      />
      
    </div>
  )
}

export default App

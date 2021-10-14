import React, { useState } from 'react'
import './App.css'
import { createBrowserHistory } from 'history';
import ReactWebSession from 'react-web-session';
const history = createBrowserHistory();
function App() {
  const [createdDatas, setCreatedData] = useState([]);
  const [expiresDatas, setExpiresData] = useState([]);
  const HandleCallBack = (data) => {
    setCreatedData(data.origin);
    setExpiresData(data.current);
  }
  return (
    <div>
      <h2 className="head-name">React Web Session</h2>
      <p>Session created at: {createdDatas.createdAt}</p>
      <p>Session expires at: {expiresDatas.expiresAt}</p>
      <ReactWebSession
      callback={HandleCallBack}
      data={{ newUser: true, purchases: [] }}
      history={history}
      />
      
    </div>
  )
}

export default App

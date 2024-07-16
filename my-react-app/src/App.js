// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

//const BACKENDURL = process.env.REACT_APP_API_HOST;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://web-flask-app-backend-w3s53knvmq-uk.a.run.app/api/data')
    //axios.get('${BACKENDURL}/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{data ? data : 'Loading...'}</p>
      </header>
    </div>
  );
}

export default App;

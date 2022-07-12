import React, { useState } from 'react';

function App() {

  const [ data, setData ] = useState( {} );

  fetch('/api')
  .then( res => res.json())
  .then( data => setData(data), () => {
    console.log('data read : ', data);
  });

  return (
    <div className="App">
      { data.firstname } { data.lastname }
    </div>
  );
}

export default App;

import React from 'react';
import UseStateObjectExample from './components/UseStateObjectExample';
import UseStateArrayExample from './components/UseStateArrayExample';

function App() {
  return (
    <>
      <div>
        <h1>UseStateExample</h1>
      </div>
      <div>
        <UseStateObjectExample />
      </div>
      <div>
        <UseStateArrayExample />
      </div>
    </>
  );
}

export default App;

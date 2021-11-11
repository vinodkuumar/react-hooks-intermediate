import React from 'react';
import UseStateObjectExample from './components/UseStateObjectExample';
import UseStateArrayExample from './components/UseStateArrayExample';
import ClassCounter from './components/EffectHooks/ClassCounter';
import HookCounterOne from './components/EffectHooks/HookCounterOne';

function App() {
  return (
    <>
      <div>
        <h1>UseStateExample</h1>
        <UseStateObjectExample />
        <UseStateArrayExample />
      </div>
      <div>
        <h1>UseEffect Example</h1>
        {/* <ClassCounter /> */}
        <HookCounterOne />
      </div>
    </>
  );
}

export default App;

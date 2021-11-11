import React from 'react';
import UseStateObjectExample from './components/UseStateObjectExample';
import UseStateArrayExample from './components/UseStateArrayExample';
import ClassCounter from './components/EffectHooks/ClassCounter';
import HookCounterOne from './components/EffectHooks/HookCounterOne';
import ClassMouse from './components/EffectHooks/ClassMouse';
import HookMouse from './components/EffectHooks/HookMouse';
import MouseContainer from './components/EffectHooks/MouseContainer';

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
        {/* Effect runs only once after render */}
        {/* <ClassMouse /> */}
        {/* <HookMouse /> */}
        {/* componentWillUnmount using useEffect*/}
        <MouseContainer />
      </div>
    </>
  );
}

export default App;

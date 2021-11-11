import React,{useState, useEffect} from 'react';

const HookCounterOne = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('');
    //conditional render
    useEffect(() => {
        console.log('useEffect- update when count changes');
        document.title = `you clicked ${count} times`
    },[count])
    return(
        <div>
            <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount(prevcount => prevcount + 1)}>You clicked {count} times</button>
        </div>
    )
}

export default HookCounterOne;
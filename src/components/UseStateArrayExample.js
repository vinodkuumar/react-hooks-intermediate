import React,{useState} from 'react';

const UseStateArrayExample = () => {
    const [items,setItems] = useState([]);
    const addNumber = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.floor(Math.random() * 10) + 1
            }
        ])
    }
    return(
        <>
        <div>
            <button onClick={addNumber}>Add Number</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
        </>

    )
}

export default UseStateArrayExample;
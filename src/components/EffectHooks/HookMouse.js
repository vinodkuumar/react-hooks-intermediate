import React, {useState, useEffect} from 'react';


const HookMouse = () => {
    const [x,setX] = useState();
    const [y,setY] = useState();
   const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);
        console.log('mouse event') //runs only when logMousePosition called
    }
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('component unmounting code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    return(
        <div>
            Hooks:- X :- {x} Y:- {y}
        </div>
    )
}

export default HookMouse;
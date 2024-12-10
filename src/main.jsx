import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import CardGrid from './CardGrid.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header/>
        <CardGrid/>
    </StrictMode>,
)


/*
import { useState, useEffect } from 'react'

function getJsonData() {
    return fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(console.log);
}

// example of sending data from child to parent 
export function Child({sendToParent}) {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
        sendToParent(count);
    }
    return <button onClick={handleClick}>Click Me! {count}</button>
}

 
export function Parent() {
    const [count, setCount] = useState(0);
    return (<>
        <div>Parent received: {count} </div>
        <Child2 sendToParent={setCount}/>
    </>)
}

// see how it doesnt quite work? its because of javascript event loop and how in react things are asynchronous
// this will work though
export function Child2({sendToParent}) {
    const [count, setCount] = useState(0);
    useEffect(() => sendToParent(count), [count])
    return <button onClick={() => setCount((prev) => prev + 1)}>Click Me! {count}</button>
}

// also, notice how weird things
// onClick={doSomething()}  (calls function during render) BAD
// onClick={() => doSomething()} is correct and passes function to be called on click
// onClick={doSomething} is correct and does the same thing (but function must be declared)

*/

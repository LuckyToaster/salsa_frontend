import { useState, useEffect } from 'react'
import Header from './Header.jsx'
// Hi its senen, here i'd like to show you how I like to organize code in react:

// i like to declare the component like this (putting 'export default' directly like this
// (this isn't important but its cleaner imo, just know that there can only be one 'export default' declaration per .jsx file)
export default function App() {
    return (<>
        <Header/>
        <p style={styles.p}>Hello Salsa!</p>
        <Parent/>
    </>)
}

// then, I like to add the css of each component inside the .jsx like this: 
// (I believe this is way cleaner than making extra .css files or putting the css directly in the html which makes it ugly)
// also, the global css is inside index.html, for simplicity
const styles = {
    p: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 'large'
    },
}

// OK, cool, here are 2 things I think migh be valuable: 
// (passing data from parent to child component and from child to parent)

// sending data from parent to child, EZ
export function Baby(props) {
    return <>
        <h1>{props.title}</h1>         
        <p>{props.message}</p>
    </>
}

export function Papi() {
    return <Baby title="This be a title" message="this be a msg"/>
}


// sendind data from child to parent, a bit more complicated
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
        <Child sendToParent={setCount}/>
    </>)
}

// see how it doesnt quite work? its because of javascript event loop and how in react things are asynchronous
// this will work though
export function Child2({sendToParent}) {
    const [count, setCount] = useState(0);
    useEffect(() => sendToParent(count), [count])
    return <button onClick={() => setCount(count + 1)}>Click Me! {count}</button>
}

// also, notice how weird things
// onClick={doSomething()}  (calls function during render) BAD
// onClick={() => doSomething()} is correct and passes function to be called on click
// onClick={doSomething} is correct and does the same thing (but function must be declared)

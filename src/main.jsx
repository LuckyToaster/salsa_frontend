import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

import Header from './Header.jsx'
import Grid from './Grid.jsx'
import Card from './Card.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Header/>
        <Grid>
            {Array(20).fill().map((_, index) => <Card key={index}/> )}
        </Grid>
    </StrictMode>,
)


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

import { useState, useEffect } from 'react'
import { getCards } from './Util.jsx'
import Card from './Card.jsx'


export default function CardGrid({filter={}}) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        getCards(filter).then(setCards)
    }, [])  

    return (<div style={styles.grid}>
        {cards.map((card, idx) => <Card key={idx} json={card}/> )}
    </div>)
}


const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px',
    }
}

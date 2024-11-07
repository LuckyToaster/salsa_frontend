
export default function Card() {
    return (
        <div className='glass-background' style={styles.card}>
            <p>Hello Salsa!</p> {/* construct the card here */}
        </div>
    )
}

const styles = {
    card: {
        border: '1px solid white',
        borderRadius: '7px',
    }
}


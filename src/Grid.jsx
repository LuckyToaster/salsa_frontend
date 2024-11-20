export default function Grid({ children }) {
    return <div style={styles.grid}>{children}</div>
}


// dont use px for padding / sizes
// use: vh vw, or em
const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '0',
    }
}

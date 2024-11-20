export default function Grid({ children }) {
    return <div style={styles.grid}>{children}</div>
}


const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        padding: '20px',
    }
}

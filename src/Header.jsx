
import Filter from './Filter.jsx'
import LogIn from './LogIn.jsx'
import Logo from './Logo.jsx'

export default function Header() {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <Filter/>
                <Logo/>
                <LogIn/>
            </nav>
        </header>
    )
}


const styles = {
    header: {
        padding: '10px 0',
        textAlign: 'center',
        fontSize: 'larger',
        // Glass effect
        background: 'rgba(255, 255, 255, 0.1)',  /* subtle white background */
        backdropFilter: 'blur(8px)',  /* key for glass effect */
        WebkitBackdropFilter: 'blur(8px)',  /* for Safari */
        border: '1px solid rgba(255, 255, 255, 0.2)',  /* subtle border */
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',  /* subtle shadow */
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 15px 0 15px',
    }
}

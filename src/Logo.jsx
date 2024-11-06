import logo from './assets/logo.jpeg'

export default function Logo() {
    return (
        <div style={styles.div}>
            <img style={styles.logo} src={logo}/>
            <span style={styles.title}>SALSa</span>
        </div>
    )
}


const styles = {
    div: {
        display: 'flex', 
        alignItems: 'center' 
    },
    logo: {
        height: '55px',
        width: 'auto',
        marginLeft: '10px'
    },
    title: {
        fontSize: 'x-large',
        color: 'white', 
        padding: '0 30px 0 10px'
    },
}

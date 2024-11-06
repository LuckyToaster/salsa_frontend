import Logo from './Logo.jsx'
import ModalButton from './ModalButton.jsx'

export default function Header() {
    return (
        <header className='glass-background' style={styles.header}>
            <nav style={styles.nav}>
                <ModalButton title='Login or Signin' className='headerButton'>
                    <p>This is the Filter Menu!</p>
                </ModalButton>
                <Logo/>
                <ModalButton title='Login or Signin' className='headerButton'>
                    <p>This is the signin / login menu!</p>
                </ModalButton>
            </nav>
        </header>
    )
}


const styles = {
    header: {
        padding: '10px 0',
        textAlign: 'center',
        fontSize: 'larger',
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 15px 0 15px',
    }
}

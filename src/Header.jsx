import ModalButton from './ModalButton.jsx'
import { SignInForm, LogInForm } from './Form.jsx'
import logo from './assets/logosals.png'

export default function Header() {
    return (
        <header className='black-background' style={styles.header}>
            <nav style={styles.nav}>
                <ModalButton title='Filter' className='headerButton'>
                    <p>This is the Filter Menu!</p>
                </ModalButton>
                <img style={styles.logo} src={logo}/>
                <div>
                    <ModalButton title='Login' className='headerButton'>
                        <LogInForm sendToParent={(json) => console.log(json.username)}/> 
                    </ModalButton>
                    <ModalButton title='Signin' style={{marginLeft: '10px'}} className='headerButton'>
                        <SignInForm sendToParent={(json) => console.log(json.username)}/>
                    </ModalButton>
                </div>
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
    },
    logo: {
        height: '41px',
        width: 'auto',
    }
}

import ModalButton from './ModalButton.jsx'
import { SignInForm, LogInForm, FilterForm} from './Form.jsx'
import logo from './assets/logosals.png'
import { useState, useEffect } from 'react'

export default function Header() {
    const [userId, setUserId] = useState()
    const [contactId, setContactId] = useState()
    const [filter, setFilter] = useState()

    
    return (
        <header className='glass-background' style={styles.header}>
            <nav style={styles.nav}>
                <ModalButton title='Filter' className='headerButton' style={{marginRight: '85px'}}>
                    <FilterForm sendToParent={(json) => console.log(json)}/>
                </ModalButton>
                <img style={styles.logo} src={logo}/>
                <div>
                    <ModalButton title='Login' className='headerButton'>
                        <LogInForm sendToParent={(json) => console.log(json)}/> 
                    </ModalButton>
                    <ModalButton title='Signin' style={{marginLeft: '10px'}} className='headerButton'>
                        <SignInForm sendToParent={(json) => console.log(json)}/>
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

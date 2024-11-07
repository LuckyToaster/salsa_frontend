import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function ModalButton({title, className, style, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className={className} style={style} onClick={() => setIsOpen(true)}>{title}</button> 
            {isOpen && createPortal(
                <>
                    <div style={styles.overlay}/>
                    <div className='glass-background' style={styles.modal}>
                        <div style={styles.div}>
                            <button className={className} onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                        {children}
                    </div>
                </>,
                document.body
            )}
        </>
    )
}


const styles = {    
    overlay: {
        position: 'fixed',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9998,
    },
    modal: {
        position: 'fixed',
        top: '50vh',
        left: '50vw',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        zIndex: '9999',
        borderRadius: '7px',
        transition: 'opacity 0.3s ease-in-out',
    },
    div: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '20px'
    }
}

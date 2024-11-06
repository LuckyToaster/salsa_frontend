import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function ModalButton({title, className, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className={className} onClick={() => setIsOpen(true)}>{title}</button> 
            {isOpen && createPortal(
                <div className='glass-background' style={styles.modal}>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                    {children}
                </div>,
                document.body
            )}
        </>
    )
}

const styles = {
    modal: {
        position: 'fixed',
        top: '50vh',
        left: '50vw',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        zIndex: '9999',
        minWidth: '50%',
        minHeight: '50%',
    }
}

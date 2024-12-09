import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function ModalButton({title, className, style, children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button className={className} style={style} onClick={() => setIsOpen(true)}>{title}</button> 
            {isOpen && createPortal(
                <>
                    <div style={styles.overlay} />
                    <div className='black-background' style={styles.modal}>
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
        background: 'rgba(0, 0, 0, 0.7)',  // Dark background for the overlay
        filter: 'blur(8px)',  // Apply the blur effect to the overlay
        transition: 'filter 0.3s ease',  // Smooth transition for the blur effect
    },
    modal: {
        position: 'fixed',
        top: '50vh',
        left: '50vw',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        zIndex: '9999',
        borderRadius: '7px',
        background: 'rgb(0, 0, 0)',  // Keep the modal background clear
        boxShadow: '0 5px 30px rgba(0, 0, 0, 0.7)',  // Default shadow for the modal itself
    },
    div: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '20px'
    }
}

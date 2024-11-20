import React, { useState } from 'react';
import { createPortal } from 'react-dom';

/*
export function Card() {
    return (

        <div className='glass-background' style={styles.card}>
            <p>Hello Salsa!</p> 
        </div>

    )
}
*/






/*

const styles = {
  // ... [previous styles remain the same] ...
  cardContainer: {
    width: '256px',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer'
  },
  cardContainerHover: {
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    marginLeft: '10px',
    marginRight: '10px',
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  profileImage: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  profileImageLarge: {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainerLarge: {
    width: '96px',
    height: '96px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '8px'
  },
  titleLarge: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '8px'
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginTop: '8px'
  },
  tag: {
    padding: '4px 8px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '9999px',
    fontSize: '0.875rem'
  },
  tagLarge: {
    padding: '4px 12px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '9999px',
    fontSize: '1rem'
  },
  modalContent: {
    maxWidth: '42rem',
    width: '100%',
    margin: '0 auto'
  },
  description: {
    color: '#4b5563',
    lineHeight: '1.625',
    marginTop: '24px'
  },
  closeButton: {
    padding: '8px 16px',
    backgroundColor: '#e5e7eb',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  },
  closeButtonHover: {
    backgroundColor: '#d1d5db'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    overflow: 'auto',
    zIndex: 1001
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '16px'
  }
};

// Simple user SVG component
const UserIcon = ({ size = 32, color = "#9ca3af" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color} 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);



export default function Card({ 
  image = null,  // Changed default to null to test SVG fallback
  title = "Profile Title",
  tags = ["tag1", "tag2"],
  description = "Detailed description goes here"
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Show UserIcon if image is null or fails to load
  const shouldShowIcon = !image || imageError;

  const card = (
    <div 
      style={{
        ...styles.cardContainer,
        ...(isHovered ? styles.cardContainerHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.flexContainer}>
        {!shouldShowIcon ? (
          <img
            src={image}
            alt={title}
            style={styles.profileImage}
            onError={() => setImageError(true)}
          />
        ) : (
          <div style={styles.iconContainer}>
            <UserIcon size={32} />
          </div>
        )}
        <div style={styles.contentContainer}>
          <h3 style={styles.title}>{title}</h3>
          <div style={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <span
                key={index}
                style={styles.tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button 
        style={{ border: 'none', padding: 0, background: 'none', width: '100%' }}
        onClick={() => setIsOpen(true)}
      >
        {card}
      </button>

      {isOpen && createPortal(
        <>
          <div style={styles.overlay} />
          <div style={styles.modal}>
            <div style={styles.modalHeader}>
              <button 
                style={styles.closeButton}
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.closeButtonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = styles.closeButton.backgroundColor}
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
            </div>
            <div style={styles.modalContent}>
              <div style={styles.flexContainer}>
                {!shouldShowIcon ? (
                  <img
                    src={image}
                    alt={title}
                    style={styles.profileImageLarge}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div style={styles.iconContainerLarge}>
                    <UserIcon size={48} />
                  </div>
                )}
                <div>
                  <h2 style={styles.titleLarge}>{title}</h2>
                  <div style={styles.tagsContainer}>
                    {tags.map((tag, index) => (
                      <span
                        key={index}
                        style={styles.tagLarge}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={styles.description}>
                {description}
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
};
*/

const styles = {
  cardContainer: {
    width: '256px',
    padding: '16px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    cursor: 'pointer',
    margin: '12px',  // Add consistent spacing
    transition: 'transform 0.2s ease'
  },
  cardContainerHover: {
    transform: 'scale(1.02)'
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  icon: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: '#e5e7eb',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: '600',
    marginBottom: '8px'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  tag: {
    padding: '4px 8px',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    borderRadius: '9999px',
    fontSize: '0.875rem'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000
  },
  modal: {
    backgroundColor: 'white' ,
    padding: '24px',
    borderRadius: '8px',
    width: '90%',
    maxWidth: '500px',
    maxHeight: '90vh',
    overflow: 'auto'
  },
  closeButton: {
    marginLeft: 'auto',
    display: 'block',
    padding: '8px 16px',
    backgroundColor: '#e5e7eb',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '16px'
  }
};

const UserIcon = () => (
  <svg 
    width="32" 
    height="32" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#9ca3af" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default function Card({ title = "Title", tags = ["tag1", "tag2"], description = "Description" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <div 
      style={{
        ...styles.cardContainer,
        ...(isHovered ? styles.cardContainerHover : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.flexContainer}>
        <div style={styles.icon}>
          <UserIcon />
        </div>
        <div style={styles.content}>
          <h3 style={styles.title}>{title}</h3>
          <div style={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} style={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button 
        style={{ border: 'none', padding: 0, background: 'none' }}
        onClick={() => setIsOpen(true)}
      >
        {cardContent}
      </button>

      {isOpen && createPortal(
        <div style={styles.modalOverlay} onClick={() => setIsOpen(false)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button 
              style={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <h2 style={{ ...styles.title, fontSize: '1.5rem' }}>{title}</h2>
            <div style={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} style={styles.tag}>{tag}</span>
              ))}
            </div>
            <p style={{ marginTop: '16px', lineHeight: '1.5' }}>{description}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

import { getImgURL } from './Util.jsx'
import emptyPfp from './assets/Default_pfp.svg'
import './main.css'

export default function Card({json}) {
    return (<div className='glass-background' style={styles.card}>
        <div>
            <img style={styles.img} src={json.pictures[0] ? getImgURL(json.pictures[0]) : emptyPfp} />           
            <h3>{json.title}</h3>
        </div>
        <p style={styles.description}>{json.description}</p>
        <div style={styles.contactInfo}>
            <h4 style={{margin: '0'}}>{json.contactId.phoneNum}</h4>
            <h4 style={{margin: '0'}}>{json.contactId.email}</h4>
        </div>
    </div>)
}

const styles = {
    card: {
        borderRadius: '0.5rem',
        margin: '0.5rem',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        justifyContent: 'space-between'
    },
    img: {
        height: '7rem',
        marginTop: '1rem',
        borderRadius: '50%'
    },
    description: {
        margin: '0 1rem 0 1rem'
    },
    contactInfo: {
        margin: '1rem 0 1rem 0'
    }
}

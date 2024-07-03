import styles from './Partners.module.css'
import People from '../People/People.jsx'

function Partners() {
    return(
        <>
        <div className={styles.H2}>
            <h2>Our top partners</h2>
        </div>
        <div className={styles.people_container}>
            <People></People>
            <People></People>
            <People></People>
            <People></People>
        </div>
        </>
    );    
}

export default Partners
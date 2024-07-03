import styles from './Partners.module.css'
import People from '../People/People.jsx'

function Partners() {
    return(
        <>
        <div className={styles.BODY}>
            <div className={styles.H2}>
                <h2>Our top partners</h2>
            </div>
            <div className={styles.people_container}>
                <People name="Paulius Puskunigis" earnings={6000} description="Defrauded the national bank of Paraguy." status="KIA"></People>
                <People></People>
                <People></People>
                <People></People>
            </div>
        </div>
        </>
    );    
}

export default Partners
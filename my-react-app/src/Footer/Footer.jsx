import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.Footer}>
            <p>&copy; {new Date().getFullYear()} Paulius duchas</p>
        </footer>
    );
}

export default Footer
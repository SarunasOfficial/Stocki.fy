import styles from './People.module.css'

function People(){

    return(
        <div className={styles.Card}>
            <img src="https://via.placeholder.com/150"></img>
            <h2 className={styles.Card_Title}>Paulius Puskunigis</h2>
            <p className={styles.Card_Text}>Defrauded the national bank of paraguy</p>
        </div>
    );
}

export default People
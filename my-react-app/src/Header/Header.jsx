import background_img from '../assets/background2.jpg'
import styles from './Header.module.css'

function Header(){

    return(
        <header className={styles.Header} style={{backgroundImage: `url(${background_img})`}}>
            <div className ={styles.MENU}>
                <ul>
                    <li className={styles.Home} >Stocki.fy</li>
                    <li className={styles.Nav}>Portfolio</li>
                    <li className={styles.Nav}>Store</li>
                    <li className={styles.Nav}>About</li>
                </ul>
            </div>
            <div className={styles.Info}>
                <div className={styles.Content}>
                    <h2>Investing & Shit</h2>
                    <h1>Making money and getting bitches for the plot</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                </div>
                <div className={styles.Soc_Links}>
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header
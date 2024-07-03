import styles from './People.module.css'
import PropTypes from 'prop-types'

function People(props){

    return(
        <div className={styles.Card}>
            <img src="https://via.placeholder.com/150"></img>
            <h2 className={styles.Card_Title}>{props.name}</h2>
            <p className={styles.Card_Text}>Earnings: {props.earnings},00$</p>
            <p className={styles.Card_Text}>{props.description}</p>
            <p className={styles.Card_Text}>Status: {props.status}</p>
        </div>
    );
}

People.propTypes = {
    name: PropTypes.string,
    earnings: PropTypes.number,
    description: PropTypes.string,
    status: PropTypes.string,
}

People.defaultProps = {
    name: "John Doe",
    earnings: 0,
    description: "Executed 10 bolivian children.",
    status: "Active",
}
export default People
import reactLogo from '../assets/react.svg'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <img src={reactLogo}/>
            <h1 className={styles.h1To}>to</h1>
            <h1 className={styles.h1Do}>do</h1>
        </header>
    )
}

export default Header;
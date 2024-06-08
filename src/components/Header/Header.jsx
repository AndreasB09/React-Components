import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.btnContainer}>
                <Link to="/">
                    <button>Home</button>
                </Link>
                <Link to="/slider">
                    <button>Slider</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
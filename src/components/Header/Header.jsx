import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import tree from '../../assets/images/tree-icon.svg';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={tree} alt="Tree Logo" className={styles.treeLogo} />
            </div>
            <div className={styles.btnContainer}>
                <Link to="/">
                    <button className={styles.navBtn}>Home</button>
                </Link>
                <Link to="/slider">
                    <button className={styles.navBtn}>Slider</button>
                </Link>
                <Link to="/animations">
                    <button className={styles.navBtn}>Animations</button>
                </Link>
                <Link to="/test">
                    <button className={styles.navBtn}>Test</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;
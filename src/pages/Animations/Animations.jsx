import Layout from "../../components/Layout/Layout.jsx";
import styles from './Animations.module.css';
import FlickerText from "../../components/FlickerText/FlickerText.jsx";

function Animations() {
    return (
        <Layout>
            <div className={styles.flickerContainer}>
                <div className={styles.flickerText}>
                    <FlickerText text="Flicker Text" />
                </div>
                
            </div>
        </Layout>
    );
}

export default Animations;
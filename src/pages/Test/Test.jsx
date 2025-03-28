import Layout from "../../components/Layout/Layout.jsx";
import styles from './Test.module.css';
import ImageBorder from "../../components/ImageBorder/ImageBorder.jsx";
import DigitalTree from "../../assets/images/digital_tree.png";

function Test() {
    return (
        <Layout>
            <div className={styles.imageContainer}>
                <ImageBorder
                    src={DigitalTree}
                    alt="A digital tree"
                    gradientColors={["#104920", "#a0f8c7", "#104920", "#a0f8c7"]}
                />
            </div>
        </Layout>
    );
}

export default Test;
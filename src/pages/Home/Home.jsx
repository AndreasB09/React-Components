import Layout from "../../components/Layout/Layout.jsx";
import forestImage from "../../assets/images/home/forest.png";
import styles from "./Home.module.css";

function Home() {
    return (
        <Layout>
            <div className={styles.imageContainer}>
                <h1>Welcome</h1>
                <p>This is an attempt to collect some components I&apos;ve been making in React.</p>
                <img src={forestImage} alt="Lush green forest" className={styles.forestImage} />
            </div>
        </Layout>
    );
}

export default Home;
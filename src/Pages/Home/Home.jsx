import Cards from "../../Components/Cards/Cards";
import Header from "../../Components/Header/Header";
import styles from './style.module.scss'

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Cards />
      </main>
    </>
  );
};

export default Home;

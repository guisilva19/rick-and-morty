import Cards from "../../Components/Cards/Cards";
import Header from "../../Components/Header/Header";
import styles from "./style.module.scss";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

const Home = () => {
  const { nextPage, previousPage, pageCount } = useContext(Context);


  const stylePrevious = {
    cursor: pageCount === 1 && 'not-allowed',
    opacity: pageCount === 1 && 0.3

  }

  const styleNext = {
    cursor: pageCount === 42 && 'not-allowed',
    opacity: pageCount === 42 && 0.3
  }
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <button
            onClick={() => previousPage()}
            style={stylePrevious}
          >
            <GrFormPrevious />
          </button>

          <button
            onClick={() => nextPage()}
            style={styleNext}
          >
            <GrFormNext />
          </button>
        </div>
        <Cards />
      </main>
    </>
  );
};

export default Home;

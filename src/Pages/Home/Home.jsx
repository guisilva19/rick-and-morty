import Cards from "../../Components/Cards/Cards";
import Header from "../../Components/Header/Header";
import styles from "./style.module.scss";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import ModalPerson from "../../Components/ModalPerson/ModalPerson";
import NaveRickAndMorty from "../../Components/Nave/Nave";

const Home = () => {
  const { pageCount, setPageCount, isModalPerson } = useContext(Context);

  const stylePrevious = {
    cursor: pageCount === 1 && "not-allowed",
    opacity: pageCount === 1 && 0.3,
  };

  const styleNext = {
    cursor: pageCount === 42 && "not-allowed",
    opacity: pageCount === 42 && 0.3,
  };

  const nextOnePage = () => {
    if (pageCount < 42) {
      setPageCount(pageCount + 1);
    }
  };

  const previousOnePage = () => {
    if (pageCount > 1) {
      setPageCount(pageCount - 1);
    }
  };

  const nextPage = () => {
    if (pageCount < 41) {
      setPageCount(pageCount + 2);
    } else if (pageCount === 41) {
      setPageCount(pageCount + 1);
    }
  };

  const previousPage = () => {
    if (pageCount > 2) {
      setPageCount(pageCount - 2);
    } else if (pageCount === 2) {
      setPageCount(pageCount - 1);
    }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <button
            onClick={() => previousOnePage()}
            style={stylePrevious}
            className={styles.buttonPage}
          >
            <GrFormPrevious className={styles.icon} />
          </button>

          {pageCount - 2 !== -1 && (
            <button style={stylePrevious} onClick={() => previousPage()}>
              {pageCount - 2}
            </button>
          )}

          <button style={stylePrevious} onClick={() => previousOnePage()}>
            {pageCount - 1}
          </button>

          <button className={styles.buttonSelect}>{pageCount}</button>

          <button style={styleNext} onClick={() => nextOnePage()}>
            {pageCount + 1}
          </button>

          {pageCount + 2 !== 44 && (
            <button style={styleNext} onClick={() => nextPage()}>
              {pageCount + 2}
            </button>
          )}

          <button
            onClick={() => nextOnePage()}
            className={styles.buttonPage}
            style={styleNext}
          >
            <GrFormNext className={styles.icon} />
          </button>
        </div>

        <Cards />
      </main>

      {isModalPerson && <ModalPerson />}

      <NaveRickAndMorty/>
    </>
  );
};

export default Home;

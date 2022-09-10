import Cards from "../../Components/Cards/Cards";
import Header from "../../Components/Header/Header";
import styles from "./style.module.scss";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { useContext } from "react";
import { Context } from "../../Context/AuthContext";

const Home = () => {
  const { nextPage, previousPage, pageCount, setPageCount } =
    useContext(Context);

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
            <GrFormPrevious />
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
            <GrFormNext />
          </button>
        </div>

        <Cards />
      </main>
    </>
  );
};

export default Home;

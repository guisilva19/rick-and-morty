import styles from "./style.module.scss";
import slime from "../../Assets/slime.png";

const Header = () => {

  return (
    <header className={styles.header}>
      <h1>Rick and Morty</h1>
      <img src={slime} alt="slime" />
    </header>
  );
};

export default Header;

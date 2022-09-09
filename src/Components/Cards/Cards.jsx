import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import styles from "./style.module.scss";

const Cards = () => {
  const { persons } = useContext(Context);

  return (
    <ul className={styles.lista}>
      {persons.map((person) => (
        <li key={person.id} className={styles.card}>
          <img src={person.image} alt={person.name} />
          <div>
            <h2>{person.name}</h2>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default Cards;

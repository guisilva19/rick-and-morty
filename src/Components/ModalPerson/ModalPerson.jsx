import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import styles from "./style.module.scss";
import { RiCloseCircleLine } from "react-icons/ri";

const ModalPerson = () => {
  const { person, origin, setIsModalPerson } = useContext(Context);

  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <button onClick={() => setIsModalPerson(false)}>
          <RiCloseCircleLine />
        </button>
        <h2>{person.name} Rick</h2>
        <div>
          <p className={styles.specie}>Espécie: {person.species}</p>
          <p className={styles.status}>Status: {person.status}</p>
          <p className={styles.gender}>Genêro: {person.gender}</p>
          <p className={styles.origin}>Origem: {origin}</p>
        </div>
      </div>
    </section>
  );
};
export default ModalPerson;

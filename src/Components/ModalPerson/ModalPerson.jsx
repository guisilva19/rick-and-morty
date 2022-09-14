import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import styles from "./style.module.scss";
import { RiCloseCircleLine } from "react-icons/ri";

const ModalPerson = () => {
  const { person, origin } = useContext(Context);

  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <button>
          <RiCloseCircleLine />
        </button>
        <h2>{person.name} Rick</h2>
        <div>
          <p>Espécie: Human{person.species}</p>
          <p>Status: Alive{person.status}</p>
          <p>Genêro: Male{person.gender}</p>
          <p>Origem: Earth{origin}</p>
        </div>
        {console.log(person)}
      </div>
    </section>
  );
};
export default ModalPerson;

import { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import styles from "./style.module.scss";
const Cards = () => {
  const { persons, setIsModalPerson } = useContext(Context);

  return (
    <>
      <ul className={styles.lista}>
        {persons.map((person) => (
          <li
            key={person.id}
            className={styles.card}
            style={{
              border: `2px solid ${
                person.gender === "Male"
                  ? "rgba(102, 204, 255, 0.7)"
                  : "rgba(238, 140, 215, 0.54)"
              }`,
            }}
          >
            <img src={person.image} alt={person.name} />
            <div
              className={styles.div}
              style={{
                background:
                  person.gender === "Male"
                    ? "rgba(102, 204, 255, 0.7)"
                    : "rgba(238, 140, 215, 0.54)",
              }}
            >
              <h2>{person.name}</h2>

              <div>
                <p className="gender">Gênero: {person.gender}</p>
                <span
                  onClick={() => setIsModalPerson(true)}
                  className={styles["saiba-mais"]}
                >
                  Saiba mais
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cards;

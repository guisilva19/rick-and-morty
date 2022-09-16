import { createContext, useEffect, useState } from "react";
import Api from "../Services/Api";

export const Context = createContext({});

const AuthContext = ({ children }) => {
  const [persons, setPersons] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isModalPerson, setIsModalPerson] = useState(false);
  const [person, setIsPerson] = useState({});
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    Api.get("/character/?page=" + pageCount).then((res) =>
      setPersons(res.data.results)
    );
  }, [pageCount]);

  const handlePerson = async (id) => {
    const {
      data: { name, gender, status, origin, species },
    } = await Api.get(`/character/${id}`);
    setIsPerson({ name, gender, status, species });
    setOrigin(origin.name)
  };

  return (
    <Context.Provider
      value={{
        persons,
        pageCount,
        setPageCount,
        setIsModalPerson,
        isModalPerson,
        handlePerson,
        person,
        origin,
        setIsPerson
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default AuthContext;

import { createContext, useEffect, useState } from "react";
import Api from "../Services/Api";

export const Context = createContext({});

const AuthContext = ({ children }) => {
  const [persons, setPersons] = useState([]);


  useEffect(() => {
    Api.get("/character")
    .then((res) => setPersons(res.data.results))
    .catch((error) => console.log('Deu b.o'))
    
  }, []);

  return <Context.Provider value={{persons}}>{children}</Context.Provider>;
};
export default AuthContext;

import { createContext, useEffect, useState } from "react";
import Api from "../Services/Api";

export const Context = createContext({});

const AuthContext = ({ children }) => {
  const [persons, setPersons] = useState([]);
  const [pageCount, setPageCount] = useState(1);

  useEffect(() => {
    Api.get("/character/?page=" + pageCount).then((res) =>
      setPersons(res.data.results)
    );
  }, [pageCount]);

  const nextPage = () => {
    if (pageCount < 41) {
      setPageCount(pageCount + 2);
    }else if(pageCount === 41) {
      setPageCount(pageCount + 1);
    }
  };

  const previousPage = () => {
    if (pageCount > 2) {
      setPageCount(pageCount - 2);
    }else if(pageCount === 2) {
      setPageCount(pageCount - 1);
    }
  };


  return (
    <Context.Provider value={{ persons, nextPage, previousPage, pageCount, setPageCount}}>
      {children}
    </Context.Provider>
  );
};
export default AuthContext;

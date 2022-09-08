import { createContext, useEffect, useState } from "react";
import Api from "../Services/Api";

export const Context = createContext({});

const AuthContext = ({ children }) => {


  const listRequest = async () => {
    const {
      data: { results },
    } = await Api.get("/character");
    console.log(results);
  };

  useEffect(() => {
    listRequest();
  }, []);

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
export default AuthContext;

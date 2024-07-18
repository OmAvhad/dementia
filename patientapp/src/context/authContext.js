import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
//TODO: add the required states depending on the usecase 
  const [auth, setAuth] = useState({
    userName: null,
    teamName: null,
    token: "",
  });

  axios.defaults.headers.common["Authorization"] = auth?.token;
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parsedata = JSON.parse(data);
    //   TODO: Change here as well
      setAuth({
        ...auth,
        userName: parsedata.user_name,
        teamName: parsedata.team_name,
        token: parsedata.jwt_token,
      });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth,AuthProvider};
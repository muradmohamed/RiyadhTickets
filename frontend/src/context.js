import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios';

export const ContextStore = React.createContext({});
const MySwal = withReactContent(Swal)

export default function Context({children}) {
  const [token, setToken] = useState(undefined);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    if(token === undefined) {
      setUser(undefined);
      
      return;
    };

    localStorage.auth = token;
    axios.defaults.headers.common['Authorization'] = token;
    //alert(token);
    axios.get("/user").then((res) => {
      setUser(res.data);
    })

  }, [token]);
  
  useEffect(() => {
    //alert(localStorage.auth);
    if(localStorage.auth) setToken(localStorage.auth);
  
  }, [])

    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', MySwal.stopTimer)
          toast.addEventListener('mouseleave', MySwal.resumeTimer)
        }
      });



    return <ContextStore.Provider value={{Toast, token, setToken, user, setUser}}>
    {children}
    </ContextStore.Provider>

}
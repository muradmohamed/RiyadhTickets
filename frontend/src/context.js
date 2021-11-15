import React from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export const ContextStore = React.createContext({});
const MySwal = withReactContent(Swal)

export default function Context({children}) {
    const Toast = MySwal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', MySwal.stopTimer)
          toast.addEventListener('mouseleave', MySwal.resumeTimer)
        }
      })

    return <ContextStore.Provider value={{Toast}}>
    {children}
    </ContextStore.Provider>

}
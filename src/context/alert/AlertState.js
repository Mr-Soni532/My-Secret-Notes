import AlertContext from "./AlertContext";
import React, { useState } from "react";

const AlertState = ({ children }) => {

    const [alert, setAlert] = useState(null)

    const showAlert = (msg, type) => {
        setAlert({
            message: msg,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000);
    }

    return (
        <AlertContext.Provider value={{alert, showAlert}}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState;
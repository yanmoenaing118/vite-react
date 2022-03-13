import { useContext } from "react";
import { Context } from "../store";


export default function useAuth() {
    const store = useContext(Context);
    const {
        state: { user },
        dispatch,
    } = store;

    function handleLogin(body) {
        /**
         * post to Login endpoints => POST /login
         */

        dispatch({ type: "LOGIN", payload: body });
        if (typeof window != undefined) {
            localStorage.setItem("user", JSON.stringify(body));
        }
    }
    function handleLogout() {
        if (typeof window != undefined) {
            localStorage.removeItem("user");
        }
        dispatch({ type: "LOGOUT" });
    }

    return {
        user,
        handleLogin,
        handleLogout
    }
}
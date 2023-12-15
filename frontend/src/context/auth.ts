
import { createContext } from "react";

export type IAuthContext = {
    /**
     * True if user is logged in as librarian. False otherwise
     */
    isLibrarian:boolean,
    userId : string|null
}

export const AuthContext = createContext<IAuthContext>({
    isLibrarian:false,
    userId:null
})

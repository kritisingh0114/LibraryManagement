import { useContext } from "react";

import { AuthContext } from "../context/auth";
import { useParams } from "react-router-dom";

export function ProfilePage(){
    const authState = useContext(AuthContext)
    const {userId} = useParams()
    
    return ( 

        (authState.isLibrarian && userId)?(<><p>profile page for {userId}</p></>)
        :(<h2>User not found!</h2>)
    )
}
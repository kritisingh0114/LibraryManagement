import { useContext } from "react";
import { Container } from "../components/container/Container";
import { ContentType } from "../types/ContentType";
import { AuthContext } from "../context/auth";

export function UserListPage(){
    const authState = useContext(AuthContext)

    return ( 
        authState.isLibrarian?(<>
            <h1 className="page-title">Manage Users</h1>
            <Container contentType={ContentType.USER}/>
            </>)
        :
        (<h2 className="page-title">You are not authorized to view this page</h2>)
    )
}
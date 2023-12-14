import { useContext } from "react";
import { Container } from "../components/container/Container";
import { ContentType } from "../types/ContentType";
import { AuthContext } from "../context/auth";

export function BookListPage(){
    const authState = useContext(AuthContext)
    return ( <>
        <h1 className="page-title">List of Books</h1>
     <Container contentType={ContentType.BOOK}/>
    </>)
}
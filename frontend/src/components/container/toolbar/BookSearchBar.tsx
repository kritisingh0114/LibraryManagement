import { useId } from "react"
import type { Book } from "../../../types/Book"
import type { ContainerState } from "../../../types/ContainerState"
import  SearchFilter from "../../../types/filter/SearchFilter"

type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
}

export function BookSearchBar({state,setState}:Props){
    //generate unique id
    const id = useId()

    function onSearch(){
        let val=(document.getElementById("book-input-"+id) as HTMLInputElement)?.value
        if(!val) return

        setState({
            ...state,
            filter:new SearchFilter<Book>(val,(item)=>item.name)
        })
    }
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search.." name="search" id={"book-input-"+id}/>
            <button onClick={onSearch}><img src="search.svg"></img></button>
        </div>
    )
}
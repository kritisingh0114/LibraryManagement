import { useId } from "react"
import type { Book } from "../../../types/Book"
import type { ContainerState } from "../../../types/ContainerState"
import  SearchFilter from "../../../types/filter/SearchFilter"

type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
    id:string
}

export function SearchBar({state,setState,id}:Props){
    //generate unique id
    
    function onSearch(){
        let val=(document.getElementById("search-input-"+id) as HTMLInputElement)?.value
        if(!val) return

        if(!state.filter){
            alert("Select a filter type first!")
            return
        }
        setState({
            ...state,
            filter:state.filter?.setFilterVal(val),
            filterVal:val
        })
    }
    console.log(state.filterVal)
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search.." name="search" id={"search-input-"+id}/>
            <button onClick={onSearch}><img src="search.svg"></img></button>
        </div>
    )
}
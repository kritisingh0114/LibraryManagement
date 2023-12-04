
import { ContainerState } from "../../../types/ContainerState"
import "./../../../styles/toolbar.css"
import { SearchBar } from "./SearchBar"
import { BookFilterDropdown } from "./BookFilterDropdown"
import { UserFilterDropdown } from "./UserFilterDropdown"
import { useId } from "react"
import { ContentType } from "../../../types/ContentType"

type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
    contentType:string
}

export function Toolbar(props:Props){
    const id = useId()

    function clearFilter(){
        delete props.state.filterType
        delete props.state.filter
        delete props.state.filterVal

        props.setState({
            ...props.state
        })
        const input=document.getElementById("search-input-"+id)  as HTMLInputElement
        if(input)
            input.value=""

    }

    return (
    <div className="toolbar">
        {/* {props.contentType===ContentType.BOOK && <BookFilterDropdown state={props.state} setState={props.setState}/>} */}
        {/* {props.contentType===ContentType.USER && <UserFilterDropdown state={props.state} setState={props.setState}/>} */}
        <SearchBar state={props.state} setState={props.setState} id={id}/>
        <button className="clear-filter" onClick={clearFilter}>Clear</button>
    </div>
    )
}
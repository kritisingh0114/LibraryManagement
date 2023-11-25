import { type } from "os"
import { ContainerState } from "../../../types/ContainerState"
import { Item } from "../../../types/Item"
import SearchFilter from "../../../filter/SearchFilter"
import { Dropdown } from "../../input/dropdown"
import { TextInput } from "../../input/text"
import "./../../../styles/toolbar.css"
import { SearchBar } from "./SearchBar"
import { BookFilterDropdown } from "./BookFilterDropdown"
import { UserFilterDropdown } from "./UserFilterDropdown"
import { useId } from "react"

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

        {/* <TextInput title="text" label="title"></TextInput> */}
        <button className="clear-filter" onClick={clearFilter}>Clear</button>
        <SearchBar state={props.state} setState={props.setState} id={id}/>
        {props.contentType==="book" && <BookFilterDropdown state={props.state} setState={props.setState}/>}
        {props.contentType==="user" && <UserFilterDropdown state={props.state} setState={props.setState}/>}
    </div>
    )
}
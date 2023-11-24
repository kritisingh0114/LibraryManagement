import { type } from "os"
import { ContainerState } from "../../../types/ContainerState"
import { Item } from "../../../types/Item"
import SearchFilter from "../../../types/filter/SearchFilter"
import { Dropdown } from "../../input/dropdown"
import { TextInput } from "../../input/text"
import "./../../../styles/toolbar.css"
import { BookSearchBar } from "./BookSearchBar"

type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
    contentType:string
}

export function Toolbar(props:Props){

    

    return (
    <div className="toolbar">
        <Dropdown title={"dropdown"} items={["1","2","3","4"]} defaultItem={0}/>
        {/* <TextInput title="text" label="title"></TextInput> */}
        {props.contentType==="book" && <BookSearchBar state={props.state} setState={props.setState}/>}
    </div>
    )
}
import { ContainerState } from "../../../types/ContainerState"
import { Dropdown } from "../../input/dropdown"
import { TextInput } from "../../input/text"
import "./../../../styles/toolbar.css"

type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
}

export function Toolbar(props:Props){
    return (
    <div className="toolbar">
        <Dropdown title={"dropdown"} items={["1","2","3","4"]} defaultItem={0}/>
        {/* <TextInput title="text" label="title"></TextInput> */}
        <div className="searchbar">
            <input type="text" placeholder="Search.." name="search"/>
            <button type="submit"><img src="search.svg"></img></button>
        </div>
    </div>
    )
}
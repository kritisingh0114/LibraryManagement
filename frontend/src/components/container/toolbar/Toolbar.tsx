import { ContainerState } from "../../../types/ContainerState"
import "./../../../styles/toolbar.css"

type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
}

export function Toolbar(props:Props){
    return (<>
    <div className="toolbar">
        toolbar
    </div>
    </>)
}
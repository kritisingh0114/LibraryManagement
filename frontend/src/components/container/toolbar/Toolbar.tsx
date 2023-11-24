import { ContainerSetting } from "../../../types/ContainerSetting"

type Props={
    setting:ContainerSetting
    setSetting:(setting:ContainerSetting)=>void
}

export function Toolbar(props:Props){
    return (<>
    <div>
        toolbar
    </div>
    </>)
}
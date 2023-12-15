import { Item } from "../../../types/Item"
import { GridItem } from "./GridItem"

type Props={
    items:Item[]
}
export function Grid(props:Props){
    return (
    <div>
        {props.items.map(item=>(<GridItem item={item} key={item.id}/>))}
    </div>)
}
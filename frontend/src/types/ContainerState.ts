import type { Item } from "./Item"
import type Filter from "./filter/Filter"

export interface ContainerState{
    filter:Filter<Item>|null
    viewType:string
}
export interface PageState{
    pageSize:number
    page:number
}
import type { Item } from "./Item"
import type Filter from "./filter/Filter"
import { FilterTypes } from "./filter/FilterTypes"

export interface ContainerState{
    filter?:Filter<Item>
    viewType:string
    filterType?:FilterTypes
    filterVal?:string
}
export interface PageState{
    pageSize:number
    page:number
}
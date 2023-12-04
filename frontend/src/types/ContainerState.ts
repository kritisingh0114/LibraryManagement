import type { Item } from "./Item"
import type Filter from "../filter/Filter"
import { FilterType } from "../filter/FilterType"

export interface ContainerState{
    filter?:Filter<Item>
    viewType:string
    filterType?:FilterType
    filterVal?:string
}
export interface PageState{
    pageSize:number
    page:number
}
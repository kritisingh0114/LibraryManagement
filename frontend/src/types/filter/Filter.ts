import type { Item } from "../Item";

export default interface Filter<T extends Item>{
    check(item:T):boolean

}
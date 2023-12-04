import { Item } from "../types/Item";
import Filter from "./Filter";

export default class ValueFilter<T extends Item> implements Filter<T>{

    private propSelector:(item:T)=>string|undefined
    private value:string|null
    constructor(propSelector:(item:T)=>string|undefined){
        this.propSelector=propSelector
        this.value=null
    }
    check(item:T): boolean {
        if(!this.value) return true
        let val = this.propSelector(item)
        return val===this.value
    }
    setFilterVal(value:string){
        this.value=value
        return this
    }
}

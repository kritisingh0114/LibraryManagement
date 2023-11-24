import { Item } from "../Item";
import Filter from "./Filter";

export default class SearchFilter<T extends Item> implements Filter<T>{

    private propSelector:(item:T)=>string|undefined
    private searchStr:string
    constructor(searchStr:string,propSelector:(item:T)=>string|undefined){
        this.propSelector=propSelector
        this.searchStr=searchStr
    }
    check(item:T): boolean {
        let str = this.propSelector(item)
        if(!str) return false
        const regex = new RegExp(`${this.searchStr}`,"gi");

		let matches=str.match(regex)?.length
		return matches!==undefined && matches>0
    }

}
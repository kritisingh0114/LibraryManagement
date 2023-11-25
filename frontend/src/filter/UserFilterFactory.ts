
import SearchFilter from "./SearchFilter"
import { FilterTypes as FT } from "./FilterTypes"
import { User } from "../types/User"
export namespace UserFilterTactory{
    export function create(val:string)
    {
        let filter
        switch(val){
            case FT.NAME_SEARCH:
                filter=new SearchFilter<User>(user=>user.name)
                break
            case FT.EMAIL_SEARCH:
                filter=new SearchFilter<User>(user=>user.email)
                break
        }
        return filter
    }
}
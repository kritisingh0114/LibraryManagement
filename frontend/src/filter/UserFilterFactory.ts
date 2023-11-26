
import SearchFilter from "./SearchFilter"
import { FilterType as FT } from "./FilterType"
import { User } from "../types/User"
export namespace UserFilterTactory{
    export function create(val:FT)
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
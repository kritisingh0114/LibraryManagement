
import { ContainerState } from "../../../types/ContainerState";
import { User } from "../../../types/User";
import { FilterTypes as FT, FilterTypes } from "../../../types/filter/FilterTypes";
import SearchFilter from "../../../types/filter/SearchFilter";
import ValueFilter from "../../../types/filter/ValueFilter";
import { Dropdown } from "../../input/dropdown";
type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
}

export function UserFilterDropdown({state,setState}:Props){

    function setFilter(val:string){
        let filter
        switch(val){
            case FT.NAME_SEARCH:
                filter=new SearchFilter<User>(user=>user.name)
                break
            case FT.EMAIL_SEARCH:
                filter=new SearchFilter<User>(user=>user.email)
                break
        }
        if(state.filterVal && filter!=null){
            filter.setFilterVal(state.filterVal)
        }
        setState({...state,filter:filter,filterType:val as FilterTypes})
    }
    return(
        <Dropdown title={"Filter By"} items={[
            FT.NAME_SEARCH,
            FT.EMAIL_SEARCH
        ]} onSelect={setFilter}
        defaultVal={state.filterType}
        />
    )
}

import { ContainerState } from "../../../types/ContainerState";
import { FilterTypes as FT, FilterTypes } from "../../../filter/FilterTypes";
import { UserFilterTactory } from "../../../filter/UserFilterFactory";
import { Dropdown } from "../../input/dropdown";
type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
}

export function UserFilterDropdown({state,setState}:Props){

    function setFilter(val:string){
        const filter=UserFilterTactory.create(val as FilterTypes)
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
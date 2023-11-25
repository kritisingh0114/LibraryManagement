
import { ContainerState } from "../../../types/ContainerState";
import { BookFilterTactory } from "../../../filter/BookFilterFactory";
import { FilterTypes as FT, FilterTypes } from "../../../filter/FilterTypes";
import { Dropdown } from "../../input/dropdown";
type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
}

export function BookFilterDropdown({state,setState}:Props){

    function setFilter(val:string){
        let filter=BookFilterTactory.create(val as FilterTypes)

        if(state.filter!=null && filter!=null){
            filter.setFilterVal(state.filter.getFilterVal() as never)
        }
        setState({...state,filter:filter,filterType:val as FilterTypes})
    }
    return(
        <Dropdown title={"Filter By"} items={[
            FT.NAME_SEARCH,
            FT.AUTHOR_SEARCH,
            FT.CATEGORY_SEARCH,
            FT.ISBN_SEARCH,
            FT.AMOUNT,
            FT.AVAILABILITY
        ]} onSelect={setFilter}
        defaultVal={state.filterType}
        />
    )
}
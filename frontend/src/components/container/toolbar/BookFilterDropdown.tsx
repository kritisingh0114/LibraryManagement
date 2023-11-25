import { Book } from "../../../types/Book";
import { ContainerState } from "../../../types/ContainerState";
import { FilterTypes as FT, FilterTypes } from "../../../types/filter/FilterTypes";
import SearchFilter from "../../../types/filter/SearchFilter";
import ValueFilter from "../../../types/filter/ValueFilter";
import { Dropdown } from "../../input/dropdown";
type Props={
    state:ContainerState
    setState:(state:ContainerState)=>void
}

export function BookFilterDropdown({state,setState}:Props){

    function setFilter(val:string){
        let filter

        switch(val){
            case FT.NAME_SEARCH:
                filter=new SearchFilter<Book>(book=>book.name)
                break
            case FT.AUTHOR_SEARCH:
                filter=new SearchFilter<Book>(book=>book.author)
                break
            case FT.CATEGORY_SEARCH:
                filter=new SearchFilter<Book>(book=>book.category)
                break
            case FT.ISBN_SEARCH:
                filter=new SearchFilter<Book>(book=>book.ISBN)
                break
            case FT.AMOUNT:
                filter=new ValueFilter<Book>(book=>book.availableAmount.toString())
                break
            case FT.AVAILABILITY:
                filter=new ValueFilter<Book>(book=>book.isAvailable.toString())
                break
        }
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
import { Book } from "../types/Book"
import SearchFilter from "./SearchFilter"
import ValueFilter from "./ValueFilter"
import { FilterTypes as FT } from "./FilterTypes"
export namespace BookFilterTactory{
    export function create(val:string)
    {
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
        return filter
    }
}
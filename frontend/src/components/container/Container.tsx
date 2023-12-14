import { useEffect, useState } from "react"
import { Item } from "../../types/Item"
import { PageNav } from "./PageNav"
import { Toolbar } from "./toolbar/Toolbar"
import { ContainerContent } from "./ContainerContent"
import { ContainerState as ContainerState, PageState } from "../../types/ContainerState"
import "./../../styles/container.css"
import { ContentType } from "../../types/ContentType"
import { DataConverter } from "../../types/converter"

type Props = {
	items?: Item[]
	contentType: string
}

/**
 * slice items based on page and return a new array without modifying exiting one
 * @param setting
 * @param items
 * @returns
 */
function sliceItems(page: PageState, items: Item[]): Item[] {
	let offset = page.page * page.pageSize
	if (offset >= items.length) return []

	return items.slice(offset, Math.min(items.length, offset + page.pageSize))
}

/**
 * filter item from setting and return a new array without modifying exiting one
 * @param setting 
 * @param items 
 * @returns 
 */
function applyFilter(state: ContainerState, items: Item[]): Item[] {	
	// if(!state.filter) return items

	// return items.filter(item=>state.filter?.check(item))
	return items
}

const backend_url = "http://127.0.0.1:5000/"
async function getData(type:string,setData:React.Dispatch<React.SetStateAction<Item[]>>,searchStr:string=""){
	try{
		let url=backend_url
		switch(type){
			case ContentType.BOOK:
				url +="search_books?text_search_book="+searchStr
				break
			case ContentType.USER:
				url +="search_users?text_search_user="+searchStr
				break
			default:
				return
		}

		const data = await((await fetch(url, {mode:'cors'})).json())
		// console.table(data);
		switch(type){
			case ContentType.BOOK:
				setData(data.map((d: any,i:number)=>DataConverter.convertBook(d,i)) as Item[])
				break
			case ContentType.USER:
				setData(data.map((d: any)=>DataConverter.convertUser(d)) as Item[])
				break
			default:
				return
		}
	}
	catch(e){
		console.error(e)
	}

}

export function Container(props: Props) {
	const [state, setState] = useState<ContainerState>({
		viewType: "table",
	})
	const [page,setPage] = useState<PageState>({
		page:0,
		pageSize:7
	})
	const [data,setData] = useState<Item[]>([])
	
	useEffect( () => {
		getData(props.contentType,setData,state.filterVal)
		console.log(data.length)
	  }, [state])

	const filteredItems:Item[]=applyFilter(state,data)

	return (
		<div className="container">
			<Toolbar state={state} setState={setState} contentType={props.contentType}/>
			<ContainerContent
				items={sliceItems(page, filteredItems)}
				viewType={state.viewType}
				contentType={props.contentType}
			/>
			<PageNav page={page} setPage={setPage} itemCount={filteredItems.length}/>
		</div>
	)
}

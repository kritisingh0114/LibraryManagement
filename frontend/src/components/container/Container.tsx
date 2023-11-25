import { useEffect, useState } from "react"
import { Item } from "../../types/Item"
import { PageNav } from "./PageNav"
import { Toolbar } from "./toolbar/Toolbar"
import { ContainerContent } from "./ContainerContent"
import { ContainerState as ContainerState, PageState } from "../../types/ContainerState"
import "./../../styles/container.css"

type Props = {
	items: Item[]
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
	if(!state.filter) return items

	return items.filter(item=>state.filter?.check(item))
}

export function Container(props: Props) {
	const [state, setState] = useState<ContainerState>({
		viewType: "table"
	})
	const [page,setPage] = useState<PageState>({
		page:0,
		pageSize:7
	})
	
	let filteredItems:Item[]=applyFilter(state,props.items)

	useEffect(()=>{
		filteredItems = applyFilter(state,props.items)
	},[state])

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

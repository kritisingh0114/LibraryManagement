import { useState } from "react"
import { Item } from "../../types/Item"
import { PageNav } from "./PageNav"
import { Toolbar } from "./toolbar/Toolbar"
import { ContainerContent } from "./ContainerContent"
import { ContainerState as ContainerState } from "../../types/ContainerState"
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
function sliceItems(state: ContainerState, items: Item[]): Item[] {
	let offset = state.currPage * state.pageSize
	if (offset >= items.length) return []

	return items.slice(offset, Math.min(items.length, offset + state.pageSize))
}

/**
 * filter item from setting and return a new array without modifying exiting one
 * @param setting 
 * @param items 
 * @returns 
 */
function applyFilter(state: ContainerState, items: Item[]): Item[] {	

	return items
}

export function Container(props: Props) {
	const [state, setState] = useState<ContainerState>({
		pageSize: 7,
		searchString: null,
		currPage: 0,
		viewType: "table",
	})
	const filteredItems = applyFilter(state,props.items)

	return (
		<div className="container">
			<Toolbar state={state} setState={setState} />
			<ContainerContent
				items={sliceItems(state, filteredItems)}
				viewType={state.viewType}
				contentType={props.contentType}
			/>
			<PageNav state={state} setState={setState} itemCount={filteredItems.length}/>
		</div>
	)
}

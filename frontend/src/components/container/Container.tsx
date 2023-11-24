import { useState } from "react"
import { Item } from "../../types/Item"
import { PageBtnContainer } from "./PageBtnContainer"
import { Toolbar } from "./toolbar/Toolbar"
import { ContainerContent } from "./ContainerContent"
import { ContainerSetting } from "../../types/ContainerSetting"
import "./../../styles/container.css"

type Props = {
	items: Item[]
	contentType: string
}

/**
 * slice items based on page and filters
 * @param setting
 * @param items
 * @returns
 */
function sliceItems(setting: ContainerSetting, items: Item[]): Item[] {
	let offset = setting.currPage * setting.pageSize
	if (offset >= items.length) return []

	return items.slice(offset, Math.min(items.length, offset + setting.pageSize))
}

export function Container(props: Props) {
	const [setting, setSetting] = useState<ContainerSetting>({
		pageSize: 10,
		searchString: null,
		currPage: 0,
		viewType: "table",
	})
	return (
		<div className="container">
			<Toolbar setting={setting} setSetting={setSetting} />
			<ContainerContent
				items={sliceItems(setting, props.items)}
				viewType={setting.viewType}
				contentType={props.contentType}
			/>
			<PageBtnContainer setting={setting} setSetting={setSetting} />
		</div>
	)
}

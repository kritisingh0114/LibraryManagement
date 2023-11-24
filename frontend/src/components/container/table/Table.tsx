import { Item } from "../../../types/Item"
import { TableItem } from "./TableItem"
import { TableHeader } from "./Tableheader"
import "./../../../styles/table.css"

type Props = {
	items: Item[]
	contentType: string
}
export function Table(props: Props) {
	return (
		<table className="table">
			<TableHeader contentType={props.contentType} />
            <tbody>
			{props.items.map((item) => (
				<TableItem item={item} key={item.id} />
			))}
            </tbody>
		</table>
	)
}

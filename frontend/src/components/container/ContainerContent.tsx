import { Item } from "../../types/Item"
import { Grid } from "./grid/Grid"
import { Table } from "./table/Table"

type Props = {
	items: Item[]
	viewType: string
	contentType: string
}

export function ContainerContent(props: Props) {
	return (
		<div className="container-content">
			{props.viewType === "table" && <Table items={props.items} contentType={props.contentType} />}
			{props.viewType === "grid" && <Grid items={props.items} />}
		</div>
	)
}

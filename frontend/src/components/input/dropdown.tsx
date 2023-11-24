type Props = {
	title: string
	items: string[]
    defaultItem:number
}
export function Dropdown({ title, items,defaultItem }: Props) {
	return (
		<div className="dropdown">
            <select>
                <option>{items[defaultItem]}</option>
                {items.map(item=>(<option >{item}</option>))}
            </select>
            <div className="dropdown-arrow">
            </div>
        </div>
	)
}

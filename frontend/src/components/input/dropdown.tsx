type Props = {
	title: string
	items: string[]
    onSelect:(val:string)=>void
    defaultVal?:string
}

/**
 * if defaultVal is provided, initialize with the default value selected.
 * if not, initialize with a placeholder value selected
 * @param param0 
 * @returns 
 */
export function Dropdown({ title, items,onSelect,defaultVal }: Props) {
	return (
		<div className="dropdown">
            <select onChange={(e=>onSelect(e.target.value))}>
                {
                    defaultVal?(<option value="" disabled>{title}</option>):
                    (<option value="" disabled selected>{title}</option>)
                }
                
                {items.map(item=>{
                    if(item===defaultVal){
                        return (<option key={item} selected>{item}</option>)
                    }
                    else return (<option  key={item}>{item}</option>)
                })}
            </select>
            <div className="dropdown-arrow">
            </div>
        </div>
	)
}

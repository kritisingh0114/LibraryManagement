type Props={
    title:string
    label:string
}

export function TextInput({title,label}:Props) {
	return (
		<div className="input-text">
			<input type="text" name={title}placeholder={label} />
		</div>
	)
}

import React from 'react'
import styles from './Input.module.css'

const Input = ({
	label = 'Field Label',
	type = 'text',
	id,
	name,
	value,
	onChange,
	placeholder,
	accept,
	inputLabel,
	inline = false,
}) => {
	return (
		<div
			className={styles.formGroup}
			style={inline ? { maxWidth: '30%', marginRight: '32px' } : {}}
		>
			<label htmlFor={name}>{label}</label>
			<div className={inputLabel ? `${styles.inline}` : ''}>
				<input
					type={type}
					id={id}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					accept={accept}
				/>
				{inputLabel ? <p>{inputLabel}</p> : ''}
			</div>
		</div>
	)
}

export default Input

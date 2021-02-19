import React from 'react'
import styles from './Input.module.css'

const TextArea = ({
	label,
	name,
	id,
	cols = '30',
	rows = '5',
	value,
	onChange,
	placeholder,
	maxLength = '255',
	inputLabel,
}) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor='alamat'>{label}</label>
			<textarea
				name={name}
				id={id}
				cols={cols}
				rows={rows}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				maxLength={maxLength}
			></textarea>
			<p style={{ margin: '0', marginTop: '8px' }}>{inputLabel}</p>
		</div>
	)
}

export default TextArea

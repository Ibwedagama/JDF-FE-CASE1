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
	warning,
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
				style={warning ? { border: '1px solid red' } : {}}
			></textarea>
			<div className={styles.inlineAlert}>
				{warning ? (
					<p style={{ color: 'red', padding: '0', margin: '0' }}>Data tidak boleh kosong</p>
				) : (
					''
				)}
				<p style={{ margin: '0' }}>{inputLabel}</p>
			</div>
		</div>
	)
}

export default TextArea

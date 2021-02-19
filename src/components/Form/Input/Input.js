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
	warning = false,
	limit = false,
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
					style={warning ? { border: '1px solid red' } : {}}
				/>
				{inputLabel ? <p>{inputLabel}</p> : ''}
				{warning ? (
					<p style={{ color: 'red', padding: '0', margin: '0' }}>Data tidak boleh kosong</p>
				) : (
					''
				)}
				{limit ? (
					<p style={{ color: 'red', padding: '0', margin: '0' }}>
						Ukuran file tidak boleh lebih dari 2MB
					</p>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default Input

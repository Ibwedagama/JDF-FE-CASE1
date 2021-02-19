import React from 'react'
import styles from './Input.module.css'

const LabeledInput = ({
	label = 'Field Label',
	type = 'text',
	id,
	name,
	value,
	onChange,
	placeholder,
	inputLabel,
	warning = false,
}) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.inputIcon}>
				<p className={styles.icon}>{inputLabel} </p>
				<input
					type={type}
					name={name}
					id={id}
					onChange={onChange}
					value={value}
					placeholder={placeholder}
					style={warning ? { border: '1px solid red' } : {}}
				/>
			</div>
			{warning ? (
				<p style={{ color: 'red', padding: '0', margin: '0' }}>Data tidak boleh kosong</p>
			) : (
				''
			)}
		</div>
	)
}

export default LabeledInput

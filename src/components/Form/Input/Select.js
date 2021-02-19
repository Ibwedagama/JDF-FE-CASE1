import React from 'react'
import styles from './Input.module.css'

const Select = ({
	label,
	name,
	id,
	placeholder,
	onChange,
	defaultValue,
	selectOptions,
	warning,
}) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor={name}>{label}</label>
			<select
				name={name}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={defaultValue}
				style={warning ? { border: '1px solid red' } : {}}
			>
				<option disabled hidden>
					{defaultValue}
				</option>
				{selectOptions.map((opt) => (
					<option key={opt.label} value={opt.value}>
						{opt.label}
					</option>
				))}
			</select>
			{warning ? (
				<p style={{ color: 'red', padding: '0', margin: '0' }}>Data tidak boleh kosong</p>
			) : (
				''
			)}
		</div>
	)
}

export default Select

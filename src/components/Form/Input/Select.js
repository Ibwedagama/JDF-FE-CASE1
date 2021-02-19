import React from 'react'
import styles from './Input.module.css'

const Select = ({ label, name, id, placeholder, onChange, defaultValue, selectOptions }) => {
	return (
		<div className={styles.formGroup}>
			<label htmlFor={name}>{label}</label>
			<select
				name={name}
				id={id}
				placeholder={placeholder}
				onChange={onChange}
				defaultValue={defaultValue}
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
		</div>
	)
}

export default Select

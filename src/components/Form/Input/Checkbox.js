import React from 'react'
import styles from './Input.module.css'
const Checkbox = ({ label, id, name, value, onChange }) => {
	return (
		<div className={styles.checkbox}>
			<input id={id} name={name} value={value} onChange={onChange} type='checkbox' />
			<label htmlFor='pernyataan'>{label}</label>
		</div>
	)
}

export default Checkbox

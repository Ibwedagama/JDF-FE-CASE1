import React from 'react'
import styles from './Button.module.css'

const Button = ({ type, action, label, variant }) => {
	return (
		<button
			className={variant === 'secondary' ? `${styles.button} ${styles.secondary}` : styles.button}
			type={type}
			onClick={action}
		>
			{label}
		</button>
	)
}

export default Button

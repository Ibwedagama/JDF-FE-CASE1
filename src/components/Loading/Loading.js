import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
	return (
		<main>
			<section className={styles.loading}>
				<h1 className={styles.title}>Mengirim data, mohon tunggu</h1>
				<div className={styles.ldsRing}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</section>
		</main>
	)
}

export default Loading

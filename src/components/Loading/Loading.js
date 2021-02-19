import React from 'react'
import styles from './Loading.module.css'
import Wrapper from '../Layout/Wrapper'

const Loading = () => {
	return (
		<main>
			<Wrapper>
				<section className={styles.loading}>
					<h1 className={styles.title}>Mengirim data, mohon tunggu</h1>
					<div className={styles.ldsRing}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</section>
			</Wrapper>
		</main>
	)
}

export default Loading

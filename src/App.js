import React, { useState } from 'react'
import styles from './App.module.css'
import Wrapper from './components/Layout/Wrapper'
import Input from './components/Form/Input/Input'
import TextArea from './components/Form/Input/TextArea'
import Select from './components/Form/Input/Select'
import LabeledInput from './components/Form/Input/LabeledInput'
import Checkbox from './components/Form/Input/Checkbox'
import Button from './components/Button/Button'

function App() {
	const [userData, setUserData] = useState({
		nama: {
			value: '',
			validate: false,
			touched: false,
		},
		nik: {
			value: '',
			validate: false,
			touched: false,
		},
		nomorKK: {
			value: '',
			validate: false,
			touched: false,
		},
		fotoKTP: {
			value: '',
			validate: false,
			touched: false,
		},
		fotoKK: {
			value: '',
			validate: false,
			touched: false,
		},
		umur: {
			value: '',
			validate: false,
			touched: false,
		},
		jenisKelamin: {
			value: '',
			validate: false,
			touched: false,
		},
		alamat: {
			value: '',
			validate: false,
			touched: false,
		},
		rt: {
			value: '',
			validate: false,
			touched: false,
		},
		rw: {
			value: '',
			validate: false,
			touched: false,
		},
		penghasilanBefore: {
			value: '',
			validate: false,
			touched: false,
		},
		penghasilanAfter: {
			value: '',
			validate: false,
			touched: false,
		},
		alasan: {
			value: '',
			validate: false,
			touched: false,
		},
	})

	const [pernyataan, setPernyataan] = useState(false)

	const [dataIsValid, setDataIsValid] = useState(false)

	const [alasanLainnya, setAlasanLainnya] = useState('')

	const handleUserInput = (e) => {
		let key = e.target.name
		setUserData((prevState) => ({
			...prevState,
			[key]: {
				...prevState[key],
				value: e.target.value,
				touched: true,
			},
		}))
	}

	const handlePernyataan = (e) => {
		setPernyataan(!pernyataan)
	}

	const setAlasan = (e) => {
		setAlasanLainnya(e.target.value)
		setUserData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	const handleResetForm = () => {
		setUserData({
			nama: {
				value: '',
				validate: false,
				touched: false,
			},
			nik: {
				value: '',
				validate: false,
				touched: false,
			},
			nomorKK: {
				value: '',
				validate: false,
				touched: false,
			},
			fotoKTP: {
				value: '',
				validate: false,
				touched: false,
			},
			fotoKK: {
				value: '',
				validate: false,
				touched: false,
			},
			umur: {
				value: '',
				validate: false,
				touched: false,
			},
			jenisKelamin: {
				value: '',
				validate: false,
				touched: false,
			},
			alamat: {
				value: '',
				validate: false,
				touched: false,
			},
			rt: {
				value: '',
				validate: false,
				touched: false,
			},
			rw: {
				value: '',
				validate: false,
				touched: false,
			},
			penghasilanBefore: {
				value: '',
				validate: false,
				touched: false,
			},
			penghasilanAfter: {
				value: '',
				validate: false,
				touched: false,
			},
			alasan: {
				value: '',
				validate: false,
				touched: false,
			},
			pernyataan: false,
		})
	}

	const validateForm = () => {
		userData.forEach((data) => {
			if (data.value !== '') {
				setUserData((prevState) => ({
					...prevState,
					[data]: {
						...prevState[data],
						validate: true,
					},
				}))
			}
		})
	}

	return (
		<main className={styles.home}>
			<header className={styles.header}>
				<Wrapper>
					<h1 className={styles.title}>Form Bantuan Covid-19</h1>
					<p className={styles.subtitle}>Warga Kelurahan Cipadung Kulon, Kecamatan Panyileukan</p>
				</Wrapper>
			</header>
			<section className={styles.container}>
				<Wrapper>
					<form onSubmit={validateForm} className={styles.inputForm}>
						{/* Field Nama */}
						<Input
							label='Nama'
							type='text'
							id='nama'
							name='nama'
							value={userData.nama.value}
							onChange={handleUserInput}
							placeholder='Masukkan nama anda...'
						/>
						{/* Field NIK */}
						<Input
							label='NIK'
							type='number'
							id='nik'
							name='nik'
							value={userData.nik.value}
							onChange={handleUserInput}
							placeholder='Masukkan nomor KTP anda...'
						/>
						{/* Field Nomor Kartu Keluarga */}
						<Input
							label='Nomor Kartu Keluarga'
							type='number'
							id='nomorKK'
							name='nomorKK'
							value={userData.nomorKK.value}
							onChange={handleUserInput}
							placeholder='Masukkan nomor kartu keluarga anda...'
						/>
						{/* Field Foto KTP */}
						<Input
							label='Foto KTP'
							type='file'
							id='fotoKTP'
							name='fotoKTP'
							value={userData.fotoKTP.value}
							onChange={handleUserInput}
							accept='image/png, image/jpeg, image/jpg, image/bnp'
						/>
						{/* Field Foto Kartu Keluarga */}
						<Input
							label='Foto Kartu Keluarga'
							type='file'
							id='fotoKK'
							name='fotoKK'
							value={userData.fotoKK.value}
							onChange={handleUserInput}
							accept='image/png, image/jpeg, image/jpg, image/bnp'
						/>
						{/* Field Umur */}
						<Input
							label='Umur'
							type='number'
							id='umur'
							name='umur'
							value={userData.umur.value}
							onChange={handleUserInput}
							inputLabel='Tahun'
							placeholder='Masukkan umur anda...'
						/>
						{/* Field Jenis Kelamin */}
						<Select
							name='jenisKelamin'
							id='jenisKelamin'
							placeholder='Masukkan jenis kelamin anda'
							onChange={handleUserInput}
							defaultValue='Pilih jenis kelamin anda'
							selectOptions={[
								{ label: 'Laki - laki', value: 'Laki-laki' },
								{ label: 'Perempuan', value: 'Perempuan' },
							]}
						/>
						{/* Field Alamat */}
						<TextArea
							label='Alamat'
							name='alamat'
							id='alamat'
							cols='30'
							rows='5'
							onChange={handleUserInput}
							placeholder='Masukkan alamat anda...'
							maxLength='255'
							value={userData.alamat.value}
							inputLabel='Maksimal 255 karakter'
						/>
						{/* Field RT dan RW */}
						<div className={styles.inlineForm}>
							<Input
								label='RT'
								type='number'
								name='rt'
								id='rt'
								onChange={handleUserInput}
								value={userData.rt.value}
								inline={true}
							></Input>
							<Input
								label='RW'
								type='number'
								name='rw'
								id='rw'
								onChange={handleUserInput}
								value={userData.rw.value}
								inline={true}
							/>
						</div>
						{/* Penghasilan Sebelum Pandemi */}
						<LabeledInput
							label='Penghasilan Sebelum Pandemi'
							type='number'
							name='penghasilanBefore'
							id='penghasilanBefore'
							onChange={handleUserInput}
							value={userData.penghasilanBefore.value}
							inputLabel='Rp. '
							placeholder='Masukkan penghasilan sebelum pandemi'
						/>

						{/* Penghasilan Sesudah Pandemi */}
						<LabeledInput
							label='Penghasilan Sesudah Pandemi'
							type='number'
							name='penghasilanAfter'
							id='penghasilanAfter'
							onChange={handleUserInput}
							value={userData.penghasilanAfter.value}
							inputLabel='Rp. '
							placeholder='Masukkan penghasilan setelah pandemi'
						/>

						{/* Field Alasan */}
						<div className={styles.formGroup}>
							<label htmlFor='alasan'>Alasan membutuhkan bantuan</label>
							<fieldset className={styles.radioGroup}>
								<div className={styles.groupItem}>
									<input
										id='alasan1'
										value='Kehilangan pekerjaan'
										name='alasan'
										type='radio'
										placeholder='Kehilangan pekerjaan'
										onChange={handleUserInput}
									/>
									<label htmlFor='alasan1'>Kehilangan Pekerjaan</label>
								</div>
								<div className={styles.groupItem}>
									<input
										id='alasan2'
										value='Kepala keluarga terdampak atau korban Covid'
										name='alasan'
										type='radio'
										onChange={handleUserInput}
									/>
									<label htmlFor='alasan2'>Kepala keluarga terdampak atau korban Covid</label>
								</div>
								<div className={styles.groupItem}>
									<input
										id='alasan3'
										value='Tergolong fakir/miskin semenjak sebelum Covid'
										name='alasan'
										type='radio'
										onChange={handleUserInput}
									/>
									<label htmlFor='alasan3'>Tergolong fakir/miskin semenjak sebelum Covid</label>
								</div>
								<div className={`${styles.groupItem} ${styles.customRadio}`}>
									<input
										id='alasan4'
										value={alasanLainnya}
										name='alasan'
										type='radio'
										onChange={handleUserInput}
									/>
									<div className={styles.group}>
										<label htmlFor='alasan4'>Lainnya :</label>
										<input
											type='text'
											name='alasan'
											value={alasanLainnya}
											onChange={setAlasan}
											placeholder='Masukkan alasan lainnya...'
										/>
									</div>
								</div>
							</fieldset>
						</div>

						{/* Checkbox */}
						<Checkbox
							label='	Saya menyatakan bahwa data yang diisikan adalah benar dan siap
            mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut.'
							id='pernyataan'
							name='pernyataan'
							value={userData.pernyataan}
							onChange={handlePernyataan}
							type='checkbox'
						></Checkbox>

						<section className={styles.formButtons}>
							<Button label='Kirim' type='submit' variant='primary' />
							<Button label='Reset' type='button' variant='secondary' action={handleResetForm} />
						</section>
					</form>
				</Wrapper>
			</section>
		</main>
	)
}

export default App

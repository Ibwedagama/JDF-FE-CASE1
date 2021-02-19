import React, { useState } from 'react'
import Helmet from 'react-helmet'
import styles from './App.module.css'
import Wrapper from './components/Layout/Wrapper'
import Input from './components/Form/Input/Input'
import TextArea from './components/Form/Input/TextArea'
import Select from './components/Form/Input/Select'
import LabeledInput from './components/Form/Input/LabeledInput'
import Checkbox from './components/Form/Input/Checkbox'
import Button from './components/Button/Button'
import Loading from './components/Loading/Loading'

function App() {
	const [userData, setUserData] = useState({
		nama: {
			value: '',
			warning: false,
		},
		nik: {
			value: '',
			warning: false,
		},
		nomorKK: {
			value: '',
			warning: false,
		},
		fotoKTP: {
			value: '',
			warning: false,
			limit: false,
		},
		fotoKK: {
			value: '',
			warning: false,
			limit: false,
		},
		umur: {
			value: '',
			warning: false,
		},
		jenisKelamin: {
			value: '',
			warning: false,
		},
		alamat: {
			value: '',
			warning: false,
		},
		rt: {
			value: '',
			warning: false,
		},
		rw: {
			value: '',
			warning: false,
		},
		penghasilanBefore: {
			value: '',
			warning: false,
		},
		penghasilanAfter: {
			value: '',
			warning: false,
		},
		alasan: {
			value: '',
			warning: false,
		},
	})

	const [pernyataan, setPernyataan] = useState(false)

	const [alasanLainnya, setAlasanLainnya] = useState('')

	const [loading, setLoading] = useState(false)

	const handleUserInput = (e) => {
		let key = e.target.name
		let newValue = e.target.value

		if (e.target.files) {
			const file = Math.round(e.target.files[0].size / 1024)
			if (file > 2000) {
				setUserData({
					...userData,
					[key]: {
						...userData[key],
						value: '',
						limit: true,
					},
				})
			} else {
				setUserData({
					...userData,
					[key]: {
						...userData[key],
						value: e.target.files[0],
						limit: false,
					},
				})
				console.log(userData.fotoKTP.value)
			}
		} else {
			setUserData({
				...userData,
				[key]: {
					...userData[key],
					value: newValue,
				},
			})
		}
	}

	const handlePernyataan = (e) => {
		setPernyataan(!pernyataan)
	}

	const setAlasan = (e) => {
		const newData = e.target.value
		setAlasanLainnya(newData)
		handleUserInput(e)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const dataIsValid = validateForm()
		const rate = Math.random()
		if (dataIsValid && pernyataan) {
			setLoading(true)
			setTimeout(() => {
				if (rate > 0.5) {
					setLoading(false)
					alert('Berhasil Submit Data!')
					console.log(`
					Nama : ${userData.nama.value}
					NIK : ${userData.nik.value}
					Foto KTP : ${userData.fotoKTP.value.name}
					Foto KK : ${userData.fotoKK.value.name}
					Umur : ${userData.umur.value}
					Jenis Kelamin : ${userData.jenisKelamin.value}
					Alamat : ${userData.alamat.value}
					RT : ${userData.rt.value}
					RW : ${userData.rw.value}
					Penghasilan Sebelum Pandemi : ${userData.penghasilanBefore.value}
					Penghasilan Setelah Pandemi : ${userData.penghasilanAfter.value}
					Alasan : ${userData.alasan.value}
					`)
					handleResetForm()
				} else {
					setLoading(false)
					alert('Internal Server Error')
				}
			}, 1500)
		} else {
			alert(
				'Data belum lengkap! Silahkan mengisi kembali form yang kosong dan mencentang pernyataan.'
			)
		}
	}

	const handleResetForm = () => {
		setUserData({
			nama: {
				value: '',
				warning: false,
			},
			nik: {
				value: '',
				warning: false,
			},
			nomorKK: {
				value: '',
				warning: false,
			},
			fotoKTP: {
				value: '',
				warning: false,
				limit: false,
			},
			fotoKK: {
				value: '',
				warning: false,
				limit: false,
			},
			umur: {
				value: '',
				warning: false,
			},
			jenisKelamin: {
				value: '',
				warning: false,
			},
			alamat: {
				value: '',
				warning: false,
			},
			rt: {
				value: '',
				warning: false,
			},
			rw: {
				value: '',
				warning: false,
			},
			penghasilanBefore: {
				value: '',
				warning: false,
			},
			penghasilanAfter: {
				value: '',
				warning: false,
			},
			alasan: {
				value: '',
				warning: false,
			},
		})
		setPernyataan(false)
		setAlasanLainnya('')
	}

	const validateForm = () => {
		let isValid = true
		Object.keys(userData).map(function (data) {
			if (userData[data].value.length === 0) {
				setUserData((prevState) => ({
					...prevState,
					[data]: {
						...prevState[data],
						warning: true,
					},
				}))
				return (isValid = isValid && false)
			} else {
				setUserData((prevState) => ({
					...prevState,
					[data]: {
						...prevState[data],
						warning: false,
					},
				}))
				return (isValid = isValid && true)
			}
		})

		return isValid
	}

	return (
		<main className={styles.home}>
			<Helmet>
				<meta charSet='utf-8' />
				<title>JDS-FE-CASE1 | IDA BAGUS WEDAGAMA</title>
				<meta
					name='description'
					content='Studi Case 1 Jabar Digital Service oleh Ida Bagus Wedagama'
				/>
			</Helmet>
			{loading ? <Loading /> : ''}
			<header className={styles.header}>
				<Wrapper>
					<h1 className={styles.title}>Form Bantuan Covid-19</h1>
					<p className={styles.subtitle}>Warga Kelurahan Cipadung Kulon, Kecamatan Panyileukan</p>
				</Wrapper>
			</header>
			<section className={styles.container}>
				<Wrapper>
					<form onSubmit={handleSubmit} className={styles.inputForm}>
						{/* Field Nama */}
						<Input
							label='Nama'
							type='text'
							id='nama'
							name='nama'
							value={userData.nama.value}
							onChange={handleUserInput}
							placeholder='Masukkan nama anda...'
							warning={userData.nama.warning}
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
							warning={userData.nik.warning}
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
							warning={userData.nomorKK.warning}
						/>
						{/* Field Foto KTP */}
						<Input
							label='Foto KTP'
							type='file'
							id='fotoKTP'
							name='fotoKTP'
							onChange={handleUserInput}
							accept='image/png, image/jpeg, image/jpg, image/bnp'
							warning={userData.fotoKTP.warning}
							limit={userData.fotoKTP.limit}
						/>
						{/* Field Foto Kartu Keluarga */}
						<Input
							label='Foto Kartu Keluarga'
							type='file'
							id='fotoKK'
							name='fotoKK'
							onChange={handleUserInput}
							accept='image/png, image/jpeg, image/jpg, image/bnp'
							warning={userData.fotoKK.warning}
							limit={userData.fotoKK.limit}
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
							warning={userData.umur.warning}
						/>
						{/* Field Jenis Kelamin */}
						<Select
							label='Jenis Kelamin'
							name='jenisKelamin'
							id='jenisKelamin'
							placeholder='Masukkan jenis kelamin anda'
							onChange={handleUserInput}
							defaultValue='Pilih jenis kelamin anda'
							selectOptions={[
								{ label: 'Laki - laki', value: 'Laki-laki' },
								{ label: 'Perempuan', value: 'Perempuan' },
							]}
							warning={userData.jenisKelamin.warning}
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
							warning={userData.alamat.warning}
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
								warning={userData.rt.warning}
							></Input>
							<Input
								label='RW'
								type='number'
								name='rw'
								id='rw'
								onChange={handleUserInput}
								value={userData.rw.value}
								inline={true}
								warning={userData.rw.warning}
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
							warning={userData.penghasilanBefore.warning}
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
							touched={userData.penghasilanAfter.touched}
							warning={userData.penghasilanAfter.warning}
						/>

						{/* Field Alasan */}
						<div className={styles.formGroup}>
							<label htmlFor='alasan'>Alasan membutuhkan bantuan</label>
							<fieldset
								className={styles.radioGroup}
								style={userData.alasan.warning ? { border: '1px solid red' } : {}}
							>
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
										onChange={setAlasan}
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
							{userData.alasan.warning ? (
								<p style={{ color: 'red', padding: '0', margin: '0' }}>Data tidak boleh kosong</p>
							) : (
								''
							)}
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

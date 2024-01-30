import React from 'react'
import { useFormik } from 'formik'
import httpRequest, { fetchOptions } from '../../utils/http'
import { styles } from '../../assets/style'

const API_URL = import.meta.env.VITE_API_URL
const initialValues = {
	name: 'Anonymous',
	message: '',
	role: '',
	company: '',
	github: '',
}

const Reviews = () => {
	const { values, setValues, handleSubmit } = useFormik({
		initialValues: { ...initialValues },
		onSubmit,
	})

	async function onSubmit(values) {
		const { name, message, role, company, github } = values
		if (!name || !message || !role || !company) throw new Error('Please fill all the fields')

		const response = await httpRequest(`${API_URL}/v1/reviews`, fetchOptions({
			body: { name, message, role, company, github },
			method: 'POST',
		}))

		return response?.result || response?.error
	}

	function handleChange(e) {
		const { name, value } = e.target
		setValues(prevValues => ({ ...prevValues, [name]: value }))
	}

	// generate beautiful review form here
	// i need these data: name, message, job position, company, github url
	return (
		<section className="mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<div className="w-full flex flex-col items-center justify-center">
				<p className={styles.sectionSubText}>Write your feedback for me</p>
				<h2 className={styles.sectionHeadText}>Review</h2>

				<form className="w-full px-10 lg:p-0 lg:max-w-3/4 block space-y-8" onSubmit={handleSubmit}>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name *</span>

						<input
							type="text"
							name="name"
							value={values.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<div className="w-full flex space-x-5">
						<label className="w-1/2 flex flex-col">
							<span className="text-white font-medium mb-4">Your Role *</span>

							<input
								type="text"
								name="role"
								value={values.role}
								onChange={handleChange}
								placeholder="What's your email?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>

						<label className="w-1/2 flex flex-col">
							<span className="text-white font-medium mb-4">Your Company *</span>

							<input
								type="text"
								name="company"
								value={values.company}
								onChange={handleChange}
								placeholder="What's your email?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
					</div>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message *</span>

						<textarea
							rows="7"
							name="message"
							value={values.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your GitHub</span>

						<input
							type="text"
							name="github"
							value={values.github}
							onChange={handleChange}
							placeholder="What's your GitHub?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	)
}

export default Reviews
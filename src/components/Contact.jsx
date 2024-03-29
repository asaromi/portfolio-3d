import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

import { styles } from '../assets/style.js'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import httpRequest, { fetchOptions } from '../utils/http'

const apiUrl = import.meta.env.VITE_API_URL

const Contact = () => {
	const formRef = useRef()
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	})
	const [loading, setLoading] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target

		setForm((prevForm) => ({ ...prevForm, [name]: value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!form?.name || !form?.email || !form?.message) return

		setLoading(() => true)

		try {
			const response = await httpRequest(
				`${apiUrl}/email/send`,
				fetchOptions({
					body: form,
					method: 'POST',
				}),
			).then(async (res) => {
				const text = await res.text()
				const status = !res.ok ? 'ERROR' : 'OK'
				return { status, text }
			})

			if (response.status === 'ERROR') throw new Error(response.text)
		} catch (err) {
			console.error(err)
		} finally {
			setLoading(() => false)
			setForm(() => ({
				name: '',
				email: '',
				message: '',
			}))
		}
	}

	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className="flex-[0.7] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Get in touch</p>
				<h2 className={styles.sectionHeadText}>Contact.</h2>

				<form
					className="mt-12 flex flex-col gap-8"
					ref={formRef}
					onSubmit={handleSubmit}
				>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your email?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows="7"
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What do you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
						onClick={handleSubmit}
					>
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas/>
			</motion.div>
		</div>
	)
}

export default SectionWrapper(Contact, 'contact')

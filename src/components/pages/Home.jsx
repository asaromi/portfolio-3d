import React from 'react'
import { About, Contact, Experience, Feedbacks, Navbar, Hero, StarsCanvas, Tech, Works } from '../index.js'

const Home = () => {
	return (
		<div className="relative z-0 bg-primary">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar/>
				<Hero/>
			</div>

			<About/>
			<Experience/>
			<Tech/>
			<Works/>
			<Feedbacks/>
			<div className="relative z-0">
				<Contact/>
				<StarsCanvas/>
			</div>
		</div>
	)
}

export default Home
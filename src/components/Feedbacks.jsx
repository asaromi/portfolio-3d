import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

import { styles } from '../assets/style.js'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../utils/constant'

const FeedbackCard = ({ company, role, image, index, name, testimonial }) => (
	<motion.div
		variants={fadeIn('', 'spring', index * 0.5, 0.75)}
		className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
	>
		<p className="text-white font-black text-[48px]">{`"`}</p>
		<div className="mt-1">
			<p className="text-white tracking-wider text-[18px]">{testimonial}</p>

			<div className="mt-7 flex justify-between items-center gap-1">
				<div className="flex-1 flex flex-col">
					<p className="text-white font-medium text-[16px]">
						<span className="blue-text-gradient">@</span> {name}
					</p>
					<p className="mt-1 text-secondary text-[12px]">
						{role} of {company}
					</p>
				</div>

				<img
					alt={`feedback-by-${name}`}
					className="w-10 h-10 rounded-full object-cover"
					src={image ?? `https://ui-avatars.com/api?background=random&name=${name}`}
				/>
			</div>
		</div>
	</motion.div>
)

FeedbackCard.propTypes = {
	company: PropTypes.string,
	role: PropTypes.string,
	image: PropTypes.string,
	index: PropTypes.number,
	name: PropTypes.string,
	testimonial: PropTypes.string,
}

const Feedbacks = () => {
	return testimonials.length > 0 && (
		<div className="mt-12 bg-black-100 rounded-[20px]">
			<div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>What others say</p>
					<h2 className={styles.sectionHeadText}>Testimonials.</h2>
				</motion.div>
			</div>

			<div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
				{testimonials.map((testimonial, index) => (
					<FeedbackCard
						key={testimonial.name}
						index={index}
						{...testimonial}
					/>
				))}
			</div>
		</div>
	)
}

export default SectionWrapper(Feedbacks, '')

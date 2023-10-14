import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import {motion} from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import PropTypes from 'prop-types'

import {styles} from '../style'
import {experiences} from '../constants'
import {textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ExperienceCard = ({company_name, date, icon, iconBg, points, title}) => (
  <VerticalTimelineElement
    contentStyle={{color: '#fff', background: '#1d1836'}}
    contentArrowStyle={{borderRight: '7px solid  #232631'}}
    date={date}
    iconStyle={{background: iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={icon}
          alt={company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{company_name}</p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

ExperienceCard.propTypes = {
  company_name: PropTypes.string,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date), PropTypes.func]),
  icon: PropTypes.string,
  iconBg: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experiences.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')

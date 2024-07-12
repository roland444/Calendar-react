import React, { useState, useMemo } from 'react'
import { Month } from '../Month'
import './Year.css'
import type { CalendarExternalProps } from '../Calendar/calendar.types'
import { CalendarType } from '../Calendar/calendar.const'

enum Months {
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
}

export type YearProps = CalendarExternalProps

const Year = ({ onTypeChange }: YearProps) => {
	const [date, setDate] = useState(new Date())

	const year = useMemo(() => date.getFullYear(), [date])

	const goToYear = (el: number) => setDate(new Date(date.setFullYear(el)))

	return (
		<>
			<div className='year-component-year'>
				<button className='year-btn' onClick={() => goToYear(year - 1)}>
					{'<'}
				</button>
				<a href='#' className='year-link' onClick={() => onTypeChange(CalendarType.Decade) }>
					Year {date.getFullYear()}
				</a>
				<button className='year-btn' onClick={() => goToYear(year + 1)}>
					{'>'}
				</button>
			</div>
			<div className='year-component-months'>
				{Array(12)
					.fill(0)
					.map((_, index) => index)
					.map(i => (
						<div key={i}>
							<a className='monthsOfTheYear' onClick={() => onTypeChange(CalendarType.Month)}>
								{Months[i]} {date.getFullYear()}
							</a>
							<Month key={i} date={new Date(date.setMonth(i))} />
						</div>
					))}
			</div>
		</>
	)
}

export default Year

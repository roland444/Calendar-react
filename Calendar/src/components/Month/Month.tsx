import { useState, useMemo } from 'react'
import { Day } from '../Day'

enum DayOfWeek {
	'Sun',
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat',
}

const Month = () => {
	const [date, setDate] = useState(new Date())

	// Opcja I - korzystamy z funkcji
	const getYear = (t_date: Date) => {
		return t_date.getFullYear()
	}

	// Opcja II - korzystamy z memoization (lepsze)
	const year = useMemo(() => date.getFullYear(), [date])

	const month = useMemo(() => date.getMonth(), [date])

	const currentMonth = useMemo(() => date.toDateString().slice(4, 7), [date])

	const daysInMonth = new Date(getYear(date), month, 0).getDate()
	const startingDay = new Date(year, month).getDay()

	// Zasada DRY - Don't Repeat Yourself !
	// const goToPreviousMonth = () => setDate(new Date(date.setMonth(month - 1)))
	// const goToNextMonth = () => setDate(new Date(date.setMonth(month + 1)))

    // poczytać o Date dokumentacje
    // jak wprowadzać terminarze 
    // naprawic przeskakujący kalendarz (w gridzie)
    // wprowadzić opcje zmiany daty

	const goToMonth = (el: number) => setDate(new Date(date.setMonth(el)))

	return (
		<>
			<div className='month-bar'>
				<button onClick={() => goToMonth(month - 1)}>{'<'}</button>
				<h2>
					{currentMonth} {year}
				</h2>
				<button onClick={() => goToMonth(month + 1)}>{'>'}</button>
			</div>
			<div className='days-container'>
				{Array(7)
					.fill(0)
					.map((_, index) => index)
					.map(val => (
						<div className='days-of-week-container'>{DayOfWeek[val]}</div>
					))}
				{Array(startingDay)
					.fill(0)
					.map(() => (
						<div />
					))}
				{Array.from({ length: daysInMonth }).map((_, index) => (
					<Day day={index + 1} />
				))}
			</div>
		</>
	)
}

export default Month

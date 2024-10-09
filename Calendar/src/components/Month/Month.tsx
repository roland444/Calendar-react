import { useMemo, useRef, useState } from 'react'
import { Day } from '../Day'
import './Month.css'
import { CalendarExternalProps } from '../Calendar/calendar.types'
import { CalendarType } from '../Calendar/calendar.const'

enum DayOfWeek {
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat',
	'Sun',
}

export type MonthProps = Partial<CalendarExternalProps> & {
	date: Date
}

/*
Destrukturyzacja obiektu, np.
const x = { y: 7, z: 9 }
let { y, z } = x
console.log(y, z)
y = 8 // !!! NIE SPOWODUJE ZMIANY WARTOŚCI W OBIEKCIE 'x' !!!
*/

const Month = ({ date, onTypeChange }: MonthProps) => {
	const getYear = (t_date: Date) => {
		return t_date.getFullYear()
	}

	const month = useMemo(() => date.getMonth(), [date])
	const year = useMemo(() => date.getFullYear(), [date])

	const daysInMonth = new Date(getYear(date), month + 1, 0).getDate()
	const startingDay = new Date(year, month).getDay()

	// 'test'!.substring(1)!.substring(2)!.substring(3)

	const getWeekNumber = (date: Date) => {
		const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

		currentDate.setDate(currentDate.getDate() + 4 - (currentDate.getDay() || 7))

		const yearStart = new Date(currentDate.getFullYear(), 0, 1)
		const weekNumber = Math.ceil(((currentDate.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
		console.log(weekNumber)

		return weekNumber
	}

	const goToDay = (date: Date, day: number) => new Date(date.setDate(1 + day))

	const goToMonth = (date: Date, el: number) => new Date(date.setMonth(el))

	//const testDate = date // shallow copy --> kolejny wskaźnik do pamięci

	const testDate = new Date(date) // deep copy

	const showWeeks = (firstWeek: number, lastWeek: number) => {
		console.log(firstWeek, lastWeek)
		if (firstWeek >= 52) {
			firstWeek = 1
			lastWeek += 1
			// Kazdy miesiąc musi być przesunięty w ten sam sposób
		}
		if (lastWeek < firstWeek) lastWeek += 52
		return Array.from({ length: lastWeek - firstWeek + 1 }, (_, index) => firstWeek + index)
	}

	// do debuggowania uzyć useState

	// grid area
	return (
		<div className='month-container'>
			<div className='weeks-container'>
				{showWeeks(
					getWeekNumber(new Date(testDate.setDate(1))),
					getWeekNumber(new Date(goToMonth(testDate, testDate.getMonth() + 1).setDate(0)))
				).map((week, index) => (
					<div className='week' key={index}>
						<a href='#' onClick={() => onTypeChange?.(CalendarType.Week)}>
							{week}
						</a>
					</div>
				))}
			</div>
			<div className='days-container'>
				{Array(7)
					.fill(0)
					.map((_, index) => index)
					.map(val => (
						<div
							key={val}
							className='days-of-week-container'
							onClick={() => {
								onTypeChange?.(CalendarType.Year)
							}}>
							{DayOfWeek[val]}
						</div>
					))}

				{Array(startingDay === 0 ? 6 : startingDay - 1)
					.fill(0)
					.map((_, index) => (
						<div key={`empty-${index}`} />
					))}
				{Array.from({ length: daysInMonth }).map((_, index) => (
					<Day key={index} day={index + 1} />
				))}
			</div>
		</div>
	)
}

export default Month

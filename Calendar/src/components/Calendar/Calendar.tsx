import { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { Week } from '../Week'
import { Month } from '../Month'
import { Year } from '../Year'
import { Decade } from '../Decade'
import { CalendarType, MonthsOfYear } from './calendar.const'

const Calendar = () => {
	const [date, setDate] = useState(new Date())
	const [type, setType] = useState(CalendarType.Month)
	const testRef = useRef<HTMLDivElement | null>(null)

	const month = useMemo(() => date.getMonth(), [date])

	const goToMonth = (el: number) => setDate(new Date(date.setMonth(el)))

	const onTypeChange = (type: CalendarType) => {
		setType(type)
	}
	
	const componentSwitch = () => {
		switch (type) {
			case CalendarType.Month:
				return <Month date={date} />
			case CalendarType.Year:
				return <Year onTypeChange={onTypeChange} />
			case CalendarType.Decade:
				return <Decade onTypeChange={onTypeChange}/>
			case CalendarType.Week:
				return <Week onTypeChange={onTypeChange}/>
			default:
				return <></>
		}
	}
	// zadanie: Wprowadzić komponent dekady

	// zadanie dodatkowe: do widoku miesiąca dodać tygodnie

	return (
		<>
			<div className={type === CalendarType.Month ? 'month-bar' : 'none'} ref={testRef}>
				<button onClick={() => goToMonth(month - 1)}>{'<'}</button>
				<div className='date-container'>
					<a className='link-container' href='#' onClick={() => setType(CalendarType.Year)}>
						<p className='currentMonthAndYear'>{MonthsOfYear[date.getMonth()]}</p>
						<p className='currentMonthAndYear'>{date.getFullYear()}</p>
					</a>
				</div>
				<button onClick={() => goToMonth(month + 1)}>{'>'}</button>
			</div>
			{/* MIEJSCE NA WYŚWIETLANIE KOMPONENTU DLA TRYBU KALENDARZA */}
			{componentSwitch()}
		</>
	)

	//=================

	// funkcja Component switch wygląda jakby była wywoływana tylko raz w komponencie Calendar

	//=================

	// Stara logika - deprecated!!!
	//const [x, _setX] = useState<RefObject<HTMLDivElement> | null>(null)

	// useEffect(() => {
	// 	console.log('nic tu nie ma', testRef)
	// 	if (!testRef?.current) return
	// 	console.log(testRef.current)

	// 	testRef.current.onmouseover = () => {
	// 		console.log('hi')
	// 	}
	// }, [testRef])

	// const year = useMemo(() => date.getFullYear(), [date])

	// const currentMonth = useMemo(() => date.toDateString().slice(4, 7), [date])

	// const myLoneComponent = (
	// 	<>
	// 		<Month date={date} />
	// 	</>
	// )

	// jak typować funkcje

	// const myNewComponent = () => (
	// 	<>
	// 		{type === CalendarType.Month && <Month date={date} />}
	// 		{type === CalendarType.Year && <Year date={date}/>}
	// 	</>
	// )
}

export default Calendar

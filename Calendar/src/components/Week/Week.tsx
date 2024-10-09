import type { CalendarExternalProps } from '../Calendar/calendar.types'
import './Week.css'
// import { CalendarType } from '../Calendar'

export type WeekProps = CalendarExternalProps

enum DayOfWeek {
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat',
	'Sun',
}

const Week = ({}: WeekProps) => {
	let tego = 1930

	return (
		<div>
			{/* {Array(7)
				.fill(0)
				.map((_, index) => (
					<div>
						<div key={`day-${index}`} className='timetable-day'>
							{(index += 1)}
						</div>
						<div key={`bracket-${index}`} className='timetable-bracket'>
							{Array(24)
								.fill(0)
								.map((_, i) => (
									<div key={`time${index}`} className='bracket'>
										{i}
									</div>
								))}
						</div>
					</div>
				))} */}

			<div className='week-container'>
				<div style={{ gridArea: 'Hour' }}>0</div>
				{Array(7)
					.fill(0)
					.map((_, index) => (
						<div key={`day-${index}`} className='timetable-day' style={{ gridArea: DayOfWeek[index] }}>
							{DayOfWeek[index]}
						</div>
					))}

				{/* {Array(24)
					.fill(0)
					.map((_, index) => (
						<div style={{ gridArea: 'Hour' }}>{`${(index += 1)}:00`}</div>
					))} */}

				{Array(7)
					.fill(0)
					.map((_, index) => (
						<>
							{/* <div style={{ gridArea: 'Hour' }}>123456</div> */}
							<div className='timetable-bracket' style={{ gridArea: 'Hour' }}>{`${index + 1}:00`}</div>
							<div key={`bracket-${index}`} className='timetable-bracket'>
								{Array(1)
									.fill(0)
									.map((_, i) => (
										<div key={`time-${index}-${i}`} style={{ gridArea: DayOfWeek[index] }}>
											{i}
										</div>
									))}
							</div>
						</>
					))}
			</div>
		</div>
	)
}

export default Week

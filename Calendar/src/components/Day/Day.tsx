import './Day.css'


export type DayProps = {
	day: number
}

const Day = ({ day }: DayProps) => {
	return <div className='day-container'>{day}</div>
}

export default Day

// let z = 7
// const x = () => 2
// const y = () => (z = 9)

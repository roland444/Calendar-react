import { useState } from 'react'
import './App.css'
import { Month } from '@/components/Month'
import { Calendar } from '@/components/Calendar'

// { 'dog': 'pies' }
// 'dog' --> klucz, słowo kluczowe, które niesie za sobą pewną wartość
// 'pies' --> wartość, która jest ściśle powiązana z słow(em/ami) kluczowym(-/i)

//type X = string | number

// enum - enumerate, enumeruj
// 0: 'x', 1: 'y', 2: 'z'
// 0, 1, 2, 3, 4, 5, 6, 7...

//const z: DayOfWeek = 2
// const n = 'Fri'
//const y: string = 'Tue'

// type Y = typeof DayOfWeek
// typeof DayOfWeek => type Y = { [key: 'Sun' | 'Mon' | ... ]: number }

//console.log(DayOfWeek[y as keyof typeof DayOfWeek], DayOfWeek[z], DayOfWeek.Tue, 'test')
// as --> ja wiem lepiej!, ta zmienna jest typu X a nie innego (X => keyof typeof DayOfWeek)
// keyof --> klucz pewnego typu
// typeof --> typ pewnego obiektu (typeof DayOfWeek --> zamień ten obiekt na typ)

// Zasada DRY - Don't Repeat Yourself !
// const goToPreviousMonth = () => setDate(new Date(date.setMonth(month - 1)))
// const goToNextMonth = () => setDate(new Date(date.setMonth(month + 1)))

function App() {

	return (
		<>
			{/* <span>Miesiąc={month}</span>
				<br></br>
				<span>Dzień tygodnia={startingDay}</span>
				<br></br>
				<span>Dni w miesiącu: {daysInMonth}</span> */}
			{/* {0 == [] ? 'y' : 'n'} */}
			{/* {0 == '0' ? 'y' : 'n'} */}
			{/* {[] == '0' ? 'y' : 'n'} */}
			{/* {NaN == true ? 'y' : 'n\n'} */}
			{/* {undefined == NaN ? 'y' : 'n'} */}
			{/* JS: ('0' == (0) == []) */}
			{/* JS: 0 == [], number i array 0 --> false, [] --> 0 --> false, false == false OK */}
			{/* JS: 0 == '0', number i string, 0 --> false, '0' --> 0 --> false, false == false OK */}
			{/* JS: [] == '0', array i string, [] --> 0 --> false, '0' --> 0 --> false, false != false ??? */}
			{/* <div style={{ display: 'flex', gap: '0.4rem' }}>
					{Array(7)
						.fill(0)
						.map((_, index) => index)
						.map(val => (
							<p>{DayOfWeek[val]}</p>
						))}
				</div> */}

			{/* Zadanie: Rozpocznij miesiąc od właściwego miejsca (nd-sb) */}
			{/* {new Date().getDay()}-{new Date().getDate()} */}
			{/* <Month date={new Date()} /> */}
			<Calendar />
		</>
	)
}

export default App

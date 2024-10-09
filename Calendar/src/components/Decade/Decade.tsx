import './Decade.css';
import { useMemo, useState } from 'react'
import type { CalendarExternalProps } from '../Calendar/calendar.types'
import { CalendarType } from '../Calendar';

export type DecadeProps = CalendarExternalProps

const Decade = ({ onTypeChange }: DecadeProps) => {
    const [date, setDate] = useState(new Date())
    const [startYear, setStartYear] = useState(2020)
    
    //const decade = useMemo(() =>   ,[date])
    
    return (
        <>
            <div className='decade-component-bar'>
                <button className='decade-bar-btn' onClick={() => setStartYear(startYear - 10)}>{"<"}</button>
                <a href="#"> {startYear} - {startYear + 9} </a>
                <button className='decade-bar-btn' onClick={() => setStartYear(startYear + 10)}>{">"}</button>
            </div>
            <div className='decade-component-years'>
                {Array(10)
                .fill(0)
                .map((_, index) => (
                    <a href="#" className='year-of-decade' onClick={() => onTypeChange(CalendarType.Year)}>
                        {`Year ${startYear + index}`}
                    </a>
                ))
                }
            </div>
        </>
    )
}

export default Decade
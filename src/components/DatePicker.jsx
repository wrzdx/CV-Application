import { useState } from 'react'

import './../styles/DatePicker.css'
import calendarSvg from './../assets/calendar.svg'
import angleDownSvg from './../assets/angle-down.svg'
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns'

function Calendar({ setDate, date, lowerBound, upperBound }) {
  const today = new Date()
  const [dateToShow, setDateToShow] = useState(date)

  const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

  const firstDay = startOfMonth(dateToShow)
  const startDate = startOfWeek(firstDay, { weekStartsOn: 1 })
  const lastDay = endOfMonth(dateToShow)
  const endDate = endOfWeek(lastDay, { weekStartsOn: 1 })
  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  })

  const handlePrevMonthBtnClick = () => {
    const prevMonthFirstDay = startOfMonth(subMonths(dateToShow, 1))
    setDateToShow(prevMonthFirstDay)
  }

  const handleNextMonthBtnClick = () => {
    const nextMonthFirstDay = startOfMonth(addMonths(dateToShow, 1))
    setDateToShow(nextMonthFirstDay)
  }

  return (
    <div className="calendar-popover">
      <div className="month-year-container">
        <button
          type="button"
          className="prev-month-year"
          onClick={handlePrevMonthBtnClick}
        >
          <img
            src={angleDownSvg}
            style={{ transform: 'rotate(90deg)' }}
            alt="previous month"
          />
        </button>
        <p className="month-year">{format(dateToShow, 'LLLL yyyy')}</p>
        <button
          type="button"
          className="next-month-year"
          onClick={handleNextMonthBtnClick}
        >
          <img
            src={angleDownSvg}
            style={{ transform: 'rotate(-90deg)' }}
            alt="next month"
          />
        </button>
      </div>
      <div className="calendar-container">
        <div className="week-days">
          {weekDays.map((weekDay) => (
            <p key={weekDay} className="week-day">
              {weekDay}
            </p>
          ))}
        </div>
        <div className="calendar-days">
          {calendarDays.map((day) => (
            <p
              key={day}
              className={
                'calendar-day' +
                (isSameDay(day, today) ? ' today' : '') +
                (isSameDay(day, date) ? ' selected' : '') +
                (day < firstDay || day > lastDay ? ' fromAnotherMonth' : '') +
                (day > today ? ' fromFuture' : '') +
                ((lowerBound && day < lowerBound) ||
                (upperBound && day > upperBound)
                  ? ' unavailable'
                  : '')
              }
              onClick={() => {
                if (day > today) return
                if (
                  (lowerBound && day < lowerBound) ||
                  (upperBound && day > upperBound)
                )
                  return

                setDate(day)
                setDateToShow(day)
              }}
            >
              {format(day, 'dd')}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function DatePicker({
  name,
  children,
  lowerBound = null,
  upperBound = null,
  date,
  setDate,
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="date-picker-container">
      <input type="hidden" name={name} value={date || ''} />
      <p onClick={() => setIsOpen(!isOpen)}>{children}</p>
      <button
        type="button"
        className="date-picker-trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="date">{format(date, 'dd/MM/yyyy')}</p>
        <img src={calendarSvg} alt="calendar" className="date-picker-icon" />
      </button>

      {isOpen && (
        <>
          <div className="backdrop" onClick={() => setIsOpen(false)} />

          <Calendar {...{ setDate, date, lowerBound, upperBound }} />
        </>
      )}
    </div>
  )
}

import React, { useEffect, useState } from 'react'

export const Datepicker = () => {
  const today = new Date()

  const [selectedDate, setSelectedDate] = useState({
    weekDay: today.getDay(),
    month: today.getMonth(),
    year: today.getFullYear(),
    day: today.getUTCDate(),
  })

  const [nbDayInFebruary, setNbDayInFebruary] = useState(28)

  const days = [
    { name: 'Lundi', abreviation: 'L' },
    { name: 'Mardi', abreviation: 'M' },
    { name: 'Mercredi', abreviation: 'M' },
    { name: 'Jeudi', abreviation: 'J' },
    { name: 'Vendredi', abreviation: 'V' },
    { name: 'Samedi', abreviation: 'S' },
    { name: 'Dimanche', abreviation: 'D' },
  ]
  const months = [
    { name: 'janvier', nbDays: 31 },
    { name: 'fevrier', nbDays: nbDayInFebruary },
    { name: 'mars', nbDays: 31 },
    { name: 'avril', nbDays: 30 },
    { name: 'mai', nbDays: 31 },
    { name: 'juin', nbDays: 30 },
    { name: 'juillet', nbDays: 31 },
    { name: 'août', nbDays: 31 },
    { name: 'septembre', nbDays: 30 },
    { name: 'octobre', nbDays: 31 },
    { name: 'novembre', nbDays: 30 },
    { name: 'decembre', nbDays: 31 },
  ]
  // const daysNb = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  // ]

  const isLeapYear = (year: number) => {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
  }

  const handleYear = (direction: 'previous' | 'next') => {
    direction === 'previous'
      ? setSelectedDate(() => ({
          ...selectedDate,
          year: selectedDate.year - 1,
        }))
      : setSelectedDate(() => ({
          ...selectedDate,
          year: selectedDate.year + 1,
        }))
  }

  const handleMonth = (direction: 'previous' | 'next') => {
    direction === 'previous'
      ? setSelectedDate(() => ({
          ...selectedDate,
          month: selectedDate.month === 0 ? 11 : selectedDate.month - 1,
          year:
            selectedDate.month === 0
              ? selectedDate.year - 1
              : selectedDate.year,
        }))
      : setSelectedDate(() => ({
          ...selectedDate,
          month: selectedDate.month === 11 ? 0 : selectedDate.month + 1,
          year:
            selectedDate.month === 11
              ? selectedDate.year + 1
              : selectedDate.year,
        }))
  }

  const creatDaysTable = (month: number, year: number) => {
    const firstDateOfTheMonth = new Date(
      `${month + 1} / 1 / ${year}`
    ).getUTCDay()
    const lastDateOfTheMonth = new Date(
      `${month + 1} / ${months[month].nbDays} / ${year}`
    ).getUTCDay()

    console.log(firstDateOfTheMonth)
    console.log(lastDateOfTheMonth)
    return [[firstDateOfTheMonth], [2], [3], [4], [5], [6], [7]]
  }

  useEffect(() => {
    isLeapYear(selectedDate.year)
      ? setNbDayInFebruary(29)
      : setNbDayInFebruary(28)
    creatDaysTable(selectedDate.month, selectedDate.year)
  }, [selectedDate.year, selectedDate.month])

  // console.log(
  //   'today :',
  //   `${days[selectedDate.weekDay - 1].name} ${selectedDate.day} ${
  //     months[selectedDate.month].name
  //   } ${selectedDate.year}`
  // )
  // console.log(
  //   'today :',
  //   `${selectedDate.day}/${selectedDate.month < 9 ? 0 : ''}${
  //     selectedDate.month + 1
  //   }/${selectedDate.year}`
  // )

  console.log(months[1])
  // console.log(new Date('4 / 1 / 2022').getUTCDay())
  // console.log(new Date('4 / 30 / 2022').getUTCDay())

  return (
    <div id="myDatepicker" className="datepicker">
      <div className="date">
        <label htmlFor="id-textbox-1">Date</label>
        <input
          type="text"
          placeholder="mm/dd/yyyy"
          id="id-textbox-1"
          aria-autocomplete="none"
        />
        <button className="icon" aria-label="Choose Date">
          <span className="fa fa-calendar-alt fa-2x">open</span>
        </button>
      </div>
      <div
        id="id-datepicker-1"
        className="datepickerDialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="id-dialog-label"
      >
        <div className="header">
          <button
            className="prevYear"
            aria-label="previous year"
            onClick={() => handleYear('previous')}
          >
            <span className="fas fa-angle-double-left fa-lg">{'<<'}</span>
          </button>
          <button
            className="prevMonth"
            aria-label="previous month"
            onClick={() => handleMonth('previous')}
          >
            <span className="fas fa-angle-left fa-lg">{'<'}</span>
          </button>
          <h2 id="id-dialog-label" className="monthYear" aria-live="polite">
            {`${months[selectedDate.month].name} ${selectedDate.year}`}
          </h2>
          <button
            className="nextMonth"
            aria-label="next month"
            onClick={() => handleMonth('next')}
          >
            <span className="fas fa-angle-right fa-lg">{'>'}</span>
          </button>
          <button
            className="nextYear"
            aria-label="next year"
            onClick={() => handleYear('next')}
          >
            <span className="fas fa-angle-double-right fa-lg">{'>>'}</span>
          </button>
        </div>
        <table
          id="myDatepickerGrid"
          className="dates"
          role="grid"
          aria-labelledby="id-dialog-label"
        >
          <thead>
            <tr>
              {days.map((day) => (
                <th scope="col" abbr={day.name} key={day.name}>
                  {day.abreviation}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  25
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  26
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  27
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  28
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  29
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  30
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  1
                </button>
              </td>
            </tr>
            <tr>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  2
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  3
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  4
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  5
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  6
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  7
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  8
                </button>
              </td>
            </tr>
            <tr>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  9
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  10
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  11
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  12
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  13
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={0}>
                  14
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  15
                </button>
              </td>
            </tr>
            <tr>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  16
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  17
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  18
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  19
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  20
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  21
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  22
                </button>
              </td>
            </tr>
            <tr>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  23
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  24
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  25
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  26
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  27
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  28
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  29
                </button>
              </td>
            </tr>
            <tr>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  30
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1}>
                  31
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  1
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  2
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  3
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  4
                </button>
              </td>
              <td className="dateCell">
                <button className="dateButton" tabIndex={-1} disabled>
                  5
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="dialogButtonGroup">
          <button className="dialogButton" value="cancel">
            Cancel
          </button>
          <button className="dialogButton" value="ok">
            OK
          </button>
        </div>
      </div>
    </div>
  )
}

import { CaretLeft } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styled'
import { getWeekDays } from '../../utils/get-week-days'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle></CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretLeft />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <CalendarDay>1</CalendarDay>
          </td>
          <td>
            <CalendarDay>2</CalendarDay>
          </td>
          <td>
            <CalendarDay>3</CalendarDay>
          </td>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}

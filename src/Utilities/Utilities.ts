import { addWeeks } from "date-fns";

export function getShortWeekName(weekname: string): string {
  if (weekname) {
    if (weekname.toLowerCase().includes('week')) {
      return weekname.replace('week ', '').trim()
    } else if (weekname.toLowerCase() === 'consolidation') {
      return 'C'
    }
  }
  return ''
}

export function getEndDate(startDate: Date): Date {
  return addWeeks(startDate, 1)
}

export  function getCurrentDate(): Date {
  return new Date()
}
import { format } from 'date-fns'

const convertText = (text) => text
  .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, '')
  .replace(/<[^>]+?>/g, '')
  .replace(/\s+/g, ' ')
  .replace(/ /g, ' ')
  .replace(/>/g, ' ')
  .replace(/\*/g, ' ')
  .split(' ')
  .filter((item, i) => i < 50)
  .join(' ') + '...'

const convertDate = (date, newDate) => format(new Date(date), newDate)

export default {
  convertText,
  convertDate
}

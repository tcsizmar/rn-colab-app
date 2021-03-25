export const formatDate = (date, pathern = 'dd/mm/yyyy') => {
  const d = new Date(date)

  let month = '' + (d.getMonth() + 1) //Month from 0 to 11
  let day = '' + d.getDate()
  const year = d.getFullYear()
  if (month.length < 2) {
    month = '0' + month
  }
  if (day.length < 2) {
    day = '0' + day
  }

  let aux = ''
  switch (pathern) {
    case 'yyyy-mm-dd':
      aux = [year, month, day].join('-')
      break
    case 'dd/mm/yyyy':
      aux = [day, month, year].join('/')
      break
    case 'mm-dd-yyyy':
      aux = [month, day, year].join('/')
      break
  }
  return aux
}

export const formatTime = date => {
  const d = new Date(date)
  let hour = '' + (d.getHours())
  let minute = '' + d.getMinutes()
  if (minute < 10) {
    minute = '0' + minute
  }
  if (hour < 10) {
    hour = '0' + hour
  }
  return [hour, minute].join(':')
}

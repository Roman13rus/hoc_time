
export default function timeForm(date) {
    let timeDifference =  new Date() - new Date(date)
    let days = Math.round((timeDifference / (24*60*60*1000)))
    let hours = Math.round((timeDifference / (60*60*1000)))
    let minits = Math.round((timeDifference / (60*1000)))
    let seconds = Math.round((timeDifference / 1000))
    let dateForm
    if (days) {
        dateForm = `${days} дней назад`
    } else if (hours) {
        dateForm = `${hours} часов назад`
    } else if (minits) {
        dateForm = `${minits} минут назад`
    } else {
        dateForm = `${seconds} секунд назад`
    }
    return dateForm
}
    
  
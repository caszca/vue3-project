import dayjs from 'dayjs'
//格式化日期
export const formatDate = (date) => {
    return dayjs(date).format('MM月DD天')
}

export const addOneDay = (date) => {
    return dayjs(date).add(1, 'day').format('MM月DD天')
}

export const getstayDay = (startDate, endDate) => {
    return dayjs(endDate).diff(startDate, "day")
}
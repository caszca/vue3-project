import dayjs from 'dayjs'
//格式化日期
export const formatDate = (date, formating = 'MM月DD天') => {
    return dayjs(date).format(formating)
}

export const addOneDay = (date) => {

    return dayjs(date).add(1, 'day')
}

export const getstayDay = (startDate, endDate) => {
    return dayjs(endDate).diff(startDate, "day")
}
import dayjs from 'dayjs';

// const getDate = () => dayjs().toISOString();
const formatDate = (date, formatTemplate) => dayjs(date).format(formatTemplate);
const compareDate = (dateA, dateB) => dayjs(dateA).diff(dayjs(dateB));


export {formatDate, compareDate};

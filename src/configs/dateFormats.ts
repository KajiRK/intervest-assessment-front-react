import moment from 'moment';

export const lastDate = (format?: string) => {
    return moment().subtract(1, "days")
    .format(format ? format : 'YYYY-MM-DD');
};

export const currentDate = (format?: string) => {
    return moment()
    .format(format ? format : 'YYYY-MM-DD');
};

export const startOfWeek = (format?: string) => {
    return moment().startOf('week')
    .format(format ? format : 'YYYY-MM-DD');
};

export const startOfMonth = (format?: string) => {
    return moment().startOf('month')
    .format(format ? format : 'YYYY-MM-DD');
};

export const convertUnix = (unix: number, format: string) => {
    return moment(unix)
    .format(format);
};
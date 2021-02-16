export const YEAR = "YEAR";
export const MONTH = "MONTH";
export const WEEK = "WEEK";
export const DAY = "DAY";

export const year = (state) => {
    return {
        type: YEAR,
        payload: 'Year'
    };
};

export const month = (state) => {
    return {
        type: MONTH,
        payload: 'Month'
    };
};

export const week = (state) => {
    return {
        type: WEEK,
        payload: 'Week'
    };
};

export const day = (state) => {
    return {
        type: DAY,
        payload: 'Day'
    };
};

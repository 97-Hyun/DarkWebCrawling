export const ALL = "ALL";
export const ASIA = "ASIA";
export const EUROPE = "EUROPE";
export const NORTHAMERICA = "NORTHAMERICA";
export const SOUTHAMERICA = "SOUTHAMERICA";
export const AFRICA = "AFRICA";
export const MIDDLEEAST = "MIDDLEEAST";

export const all = (state) => {
    return {
        type: ALL,
        payload: 'All'
    };
};

export const asia = (state) => {
    return {
        type: ASIA,
        payload: 'Asia'
    };
};

export const europe = (state) => {
    return {
        type: EUROPE,
        payload: 'Europe'
    };
};

export const northamerica = (state) => {
    return {
        type: NORTHAMERICA,
        payload: 'North America'
    };
};
export const southamerica = (state) => {
    return {
        type: SOUTHAMERICA,
        payload: 'South America'
    };
};
export const africa = (state) => {
    return {
        type: AFRICA,
        payload: 'Africa'
    };
};
export const middleeast = (state) => {
    return {
        type: MIDDLEEAST,
        payload: 'Middle East'
    };
};

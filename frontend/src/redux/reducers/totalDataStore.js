import { YEAR, MONTH, WEEK, DAY } from '../actions/date';
import { ALL, ASIA, EUROPE, NORTHAMERICA, SOUTHAMERICA, AFRICA, MIDDLEEAST} from '../actions/continent';
import { combineReducers } from 'redux';

const ininState = {
    continent: 'All',
    date: 'Year',
};

const search = (state = ininState, action) => {
    switch (action.type) {
        case YEAR:
            return {...state, date: action.payload};
        case MONTH:
            return {...state, date: action.payload};
        case WEEK:
            return {...state, date: action.payload};
        case DAY:
            return {...state, date: action.payload};
        case ALL:
            return {...state, continent: action.payload};
        case ASIA:
            return {...state, continent: action.payload};
        case EUROPE:
            return {...state, continent: action.payload};
        case NORTHAMERICA:
            return {...state, continent: action.payload};
        case SOUTHAMERICA:
            return {...state, continent: action.payload};
        case AFRICA:
            return {...state, continent: action.payload};
        case MIDDLEEAST:
            return {...state, continent: action.payload};
        default:
            return state;
    }
    
};

const totalDataReducer = combineReducers({search});

export default totalDataReducer;
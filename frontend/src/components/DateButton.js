import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/date';

// 기본 값은 년.
const DateButton = () => {
    
    const dispatch = useDispatch();
    const changeState = useSelector((store) => store.search);

    useEffect(() => {
        const yearBtn = document.getElementById('yearBtn');
        const monthBtn = document.getElementById('monthBtn');
        const weekBtn = document.getElementById('weekBtn');
        const dayBtn = document.getElementById('dayBtn');
    
        if(changeState.date === 'Year'){
            yearBtn.className = 'button_click_on';
            monthBtn.className = 'button';
            weekBtn.className = 'button';
            dayBtn.className = 'button';
        }
        else if(changeState.date === 'Month'){
            monthBtn.className = 'button_click_on';
            yearBtn.className = 'button';
            weekBtn.className = 'button';
            dayBtn.className = 'button';
        }
        else if(changeState.date === 'Week'){
            weekBtn.className = 'button_click_on';
            monthBtn.className = 'button';
            yearBtn.className = 'button';
            dayBtn.className = 'button';
        }
        else if(changeState.date === 'Day'){
            dayBtn.className = 'button_click_on';
            monthBtn.className = 'button';
            weekBtn.className = 'button';
            yearBtn.className = 'button';
        }
    }, [changeState.date]);
   
    return (
        <div className="total-data_button date_button">
            <input type="button" id="yearBtn" className="button" value="년" onClick={() => dispatch(actions.year(changeState.date))}></input>
            <input type="button" id="monthBtn" className="button" value="월" onClick={() => dispatch(actions.month(changeState.date))}></input>
            <input type="button" id="weekBtn" className="button" value="주" onClick={() => dispatch(actions.week(changeState.date))}></input>
            <input type="button" id="dayBtn" className="button" value="일" onClick={() => dispatch(actions.day(changeState.date))}></input>
        </div>
    );
}

export default DateButton;
import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../redux/actions/continent';

// 기본 값은 전체
const ContinentButton = () => {

    const dispatch = useDispatch();
    const changeState = useSelector((store) => store.search);

    useEffect(() => {
        const allBtn = document.getElementById('allBtn');
        const asiaBtn = document.getElementById('asiaBtn');
        const europeBtn = document.getElementById('europeBtn');
        const northAmericaBtn = document.getElementById('northAmericaBtn');
        const southAmericaBtn = document.getElementById('southAmericaBtn');
        const africaBtn = document.getElementById('africaBtn');
        const middleEastBtn = document.getElementById('middleEastBtn');
    
        if(changeState.continent === 'All'){
            allBtn.className = 'button_click_on';
            asiaBtn.className = 'button';
            europeBtn.className = 'button';
            northAmericaBtn.className = 'button';
            southAmericaBtn.className = 'button';
            africaBtn.className = 'button';
            middleEastBtn.className = 'button';
        }
        else if(changeState.continent === 'Asia'){
            allBtn.className = 'button';
            asiaBtn.className = 'button_click_on';
            europeBtn.className = 'button';
            northAmericaBtn.className = 'button';
            southAmericaBtn.className = 'button';
            africaBtn.className = 'button';
            middleEastBtn.className = 'button';
        }
        else if(changeState.continent === 'Europe'){
            allBtn.className = 'button';
            asiaBtn.className = 'button';
            europeBtn.className = 'button_click_on';
            northAmericaBtn.className = 'button';
            southAmericaBtn.className = 'button';
            africaBtn.className = 'button';
            middleEastBtn.className = 'button';
        }
        else if(changeState.continent === 'North America'){
            allBtn.className = 'button';
            asiaBtn.className = 'button';
            europeBtn.className = 'button';
            northAmericaBtn.className = 'button_click_on';
            southAmericaBtn.className = 'button';
            africaBtn.className = 'button';
            middleEastBtn.className = 'button';
        }
        else if(changeState.continent === 'South America'){
            allBtn.className = 'button';
            asiaBtn.className = 'button';
            europeBtn.className = 'button';
            northAmericaBtn.className = 'button';
            southAmericaBtn.className = 'button_click_on';
            africaBtn.className = 'button';
            middleEastBtn.className = 'button';
        }
        else if(changeState.continent === 'Africa'){
            allBtn.className = 'button';
            asiaBtn.className = 'button';
            europeBtn.className = 'button';
            northAmericaBtn.className = 'button';
            southAmericaBtn.className = 'button';
            africaBtn.className = 'button_click_on';
            middleEastBtn.className = 'button';
        }
        else if(changeState.continent === 'Middle East'){
            allBtn.className = 'button';
            asiaBtn.className = 'button';
            europeBtn.className = 'button';
            northAmericaBtn.className = 'button';
            southAmericaBtn.className = 'button';
            africaBtn.className = 'button';
            middleEastBtn.className = 'button_click_on';
        }
    }, [changeState.continent]);

    return (
        <div className="total-data_button">
            <input type="button" id="allBtn" className="button" value="전체" onClick={() => dispatch(actions.all(changeState.continent))}></input>
            <input type="button" id="asiaBtn" className="button" value="아시아" onClick={() => dispatch(actions.asia(changeState.continent))}></input>
            <input type="button" id="europeBtn" className="button" value="유럽" onClick={() => dispatch(actions.europe(changeState.continent))}></input>
            <input type="button" id="northAmericaBtn" className="button" value="북미" onClick={() => dispatch(actions.northamerica(changeState.continent))}></input>
            <input type="button" id="southAmericaBtn" className="button" value="남미" onClick={() => dispatch(actions.southamerica(changeState.continent))}></input>
            <input type="button" id="africaBtn" className="button" value="아프리카" onClick={() => dispatch(actions.africa(changeState.continent))}></input>
            <input type="button" id="middleEastBtn" className="button" value="중동" onClick={() => dispatch(actions.middleeast(changeState.continent))}></input>
        </div>
    );
}

export default ContinentButton;
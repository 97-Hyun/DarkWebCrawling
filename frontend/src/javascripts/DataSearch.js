import { useSelector } from 'react-redux';

// component 목록
import DataTable from '../components/DataTable';
import LineGraph from '../components/LineGraph';

// json 파일 목록
import data from "../datafile/data";
import data2 from "../datafile/data2";
import data3 from "../datafile/data3";
import data4 from "../datafile/data4";

export function DataSearch() {
   
    const selectedData = useSelector((store) => store.search);
   
    let weaponJson = JSON.stringify(data);
    let weaponObj = JSON.parse(weaponJson);

    let drugJson = JSON.stringify(data2);
    let drugObj = JSON.parse(drugJson);

    let hackJson = JSON.stringify(data3);
    let hackObj = JSON.parse(hackJson);

    let pornoJson = JSON.stringify(data4);
    let pornoObj = JSON.parse(pornoJson);

    const totalDataArray = [weaponObj, drugObj, hackObj, pornoObj];
    
    let year = String(new Date().getFullYear());

    let month = new Date().getMonth() + 1;
    month = month >= 10 ? String(month) : '0' + month;
    
    let day = new Date().getDate(); 
    day = day >= 10 ? String(day) : '0' + day;

    let whatToday = new Date().getDay();
    let weekStartDay = 0;
    let weekEndDay = 0;
    // 이번주의 첫번째 날과 마지막날을 구하는 것.
    weekStartDay = String(Number(day) - whatToday);
    weekEndDay = String(Number(day) + (6 - whatToday));

    let tableDataArray = [];
    let graphDataArray = [];
    let totalDataCnt = 0 ;
    let totalDataPastCnt = 0;
    let totalDataGrowthRate = 0;

    let pastDay = '';
    let nowDay = '';

    for(let dataKind of totalDataArray){

        let dataCnt = 0;
        let dataPastCnt = 0;
        let dataGrowthRate = 0;
        
        if(selectedData.date === 'Year') {
            for(let searchKey of dataKind){
                if(selectedData.continent === 'All') {
                    if(Number(searchKey.Date.substr(0,4)) === Number(year)) {
                        dataCnt++;   
                    }
                    else if(Number(searchKey.Date.substr(0,4)) === (Number(year) - 1)){
                        dataPastCnt++;
                    } 
                }
                else {
                    if(Number(searchKey.Date.substr(0,4)) === Number(year) && searchKey.country === selectedData.continent) {
                        dataCnt++;   
                    }
                    else if(Number(searchKey.Date.substr(0,4)) === (Number(year) - 1) && searchKey.country === selectedData.continent){
                        dataPastCnt++;
                    } 
                }
            }
            pastDay = String(Number(year) - 1);
            nowDay = year;
            dataGrowthRate = (dataCnt - dataPastCnt) / dataPastCnt * 100;
            totalDataCnt += dataCnt;
            totalDataPastCnt += dataPastCnt;
        }
        else if (selectedData.date === 'Month') {
    
            let tmpYear = 0;
            let yearMonth = Number(year + month);
            let yearPastMonth = yearMonth - 1;
    
            // 만약 이번달이 1월달이면 전년도 12월달 데이터를 가져오게하기.
            if(month === '01') {
                tmpYear = Number(year);
                tmpYear--;
                tmpYear = String(tmpYear);
                yearPastMonth = Number(tmpYear + '12');
            }
            
            for(let searchKey of dataKind){
                if(selectedData.continent === 'All') {
                    if(Number(searchKey.Date.substr(0,6)) === yearMonth) {
                        dataCnt++;   
                    }
                    else if(Number(searchKey.Date.substr(0,6)) === yearPastMonth){
                        dataPastCnt++;
                    } 
                }
                else {
                    if(Number(searchKey.Date.substr(0,6)) === yearMonth && searchKey.country === selectedData.continent) {
                        dataCnt++;   
                    }
                    else if(Number(searchKey.Date.substr(0,6)) === yearPastMonth && searchKey.country === selectedData.continent){
                        dataPastCnt++;
                    } 
                }
               
            }
            pastDay = String(yearPastMonth);
            nowDay = String(yearMonth);
            dataGrowthRate = (dataCnt - dataPastCnt) / dataPastCnt * 100;
            totalDataCnt += dataCnt;
            totalDataPastCnt += dataPastCnt;
        }
        else if (selectedData.date === 'Week') {
            let monthLastDay = String(new Date(year, month, 0).getDate());
            let tmpMonth = Number(month);
            let tmpYear = Number(year);
            let startDay = '';
            let endDay = '';
            let startPastDay = '';
            let endPastDay = '';
            
            startDay = Number(year + month + weekStartDay);
            endDay = Number(year + month + weekEndDay);
            startPastDay = Number(year + month + String(Number(weekStartDay) - 7));
            endPastDay = Number(year + month + String(Number(weekEndDay) - 7));
    
            if(Number(weekStartDay) < 0 ) {
                tmpMonth--;
                let monthPastLastDay = String(new Date(year, month - 1, 0).getDate());
                if(tmpMonth < 1) {
                    tmpYear--;
                    tmpMonth = 12
                    monthPastLastDay = '31';
                    tmpMonth = String(tmpMonth);
                    weekStartDay = String(Number(monthPastLastDay) + (Number(weekStartDay) + 1));
                    startDay = Number(tmpYear + tmpMonth + weekStartDay);
                    startPastDay = Number(tmpYear + tmpMonth + String(Number(weekStartDay) - 7));
                }
                tmpMonth = String(tmpMonth);
                weekStartDay = String(Number(monthPastLastDay) + (Number(weekStartDay) + 1));
    
                startDay = Number(year + tmpMonth + weekStartDay);
                startPastDay = Number(year + tmpMonth + String(Number(weekStartDay) - 7));
    
            }
    
            if(Number(weekEndDay) > Number(monthLastDay)){
                tmpMonth++;
                if(tmpMonth > 12) {
                    tmpYear++;
                    tmpMonth = 1
                    tmpMonth = String(tmpMonth);
                    weekEndDay = String(Number(weekEndDay) - Number(monthLastDay));
                    endDay = Number(tmpYear + tmpMonth + weekEndDay);
                    endPastDay = Number(tmpYear + tmpMonth + String(Number(weekEndDay) - 7));
                }
                tmpMonth = String(tmpMonth);
                weekEndDay = String(Number(weekEndDay) - Number(monthLastDay));
    
                endDay = Number(year + tmpMonth + weekEndDay);
                endPastDay = Number(year + tmpMonth + String(Number(weekEndDay) - 7));
            }
           
            for(let searchKey of dataKind){
                if(selectedData.continent === 'All') {
                    if(Number(searchKey.Date) >= startDay && Number(searchKey.Date) <= endDay) {
                        dataCnt++;   
                    }
                    else if(Number(searchKey.Date) >= startPastDay && Number(searchKey.Date) <= endPastDay){
                        dataPastCnt++;
                    } 
                }
                else {
                    if(Number(searchKey.Date) >= startDay && Number(searchKey.Date) <= endDay  && searchKey.country === selectedData.continent) {
                        dataCnt++;   
                    }
                    else if(Number(searchKey.Date) >= startPastDay && Number(searchKey.Date) <= endPastDay && searchKey.country === selectedData.continent){
                        dataPastCnt++;
                    } 
                }
                
            }
            pastDay = String(startPastDay) + ' ~ ' + String(endPastDay);
            nowDay = String(startDay) + ' ~ ' + String(endDay);
            dataGrowthRate = (dataCnt - dataPastCnt) / dataPastCnt * 100;
            totalDataCnt += dataCnt;
            totalDataPastCnt += dataPastCnt;
        }
        else {
    
            let yearMonthDay = Number(year + month + day);
            let yearMonthPastDay = yearMonthDay - 1;
            let tmpYear = 0;
            let tmpMonth = 0;
            let tmpDay = 0;
    
            if((month === '01') && (day === '01')){
                tmpYear = Number(year);
                tmpYear--;
                tmpYear = String(tmpYear);
                tmpMonth = '12';
                tmpDay = '31';
    
                yearMonthPastDay = Number(tmpYear + tmpMonth + tmpDay);
            }
            else if(day === '01'){
    
                // 월별 일수, 2월은 윤년 계산해서 넣기.
                let numberOfDaysPerMonth = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                numberOfDaysPerMonth[1] = (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) ? 29 : 28;
            
                tmpMonth = Number(month);
                tmpMonth--;
                tmpDay = numberOfDaysPerMonth[tmpMonth - 1];
                tmpMonth = String(tmpMonth);
                tmpDay = String(tmpDay);
    
                yearMonthPastDay = Number(year + tmpMonth + tmpDay);
    
            }
           
            for(let searchKey of dataKind){
                if(selectedData.continent === 'All') {
                    if(Number(searchKey.Date) === yearMonthDay) {
                        dataCnt++;   
                    }
                    else if(Number(searchKey.Date) === yearMonthPastDay){
                        dataPastCnt++;
                    } 
                }
                else {
                    if(Number(searchKey.Date) === yearMonthDay  && searchKey.country === selectedData.continent) {
                        dataCnt++;   
                    }
                    else if(Number(searchKey.Date) === yearMonthPastDay && searchKey.country === selectedData.continent){
                        dataPastCnt++;
                    } 
                }
                
            }
            pastDay = String(yearMonthPastDay);
            nowDay = String(yearMonthDay);
            dataGrowthRate = (dataCnt - dataPastCnt) / dataPastCnt * 100;
            totalDataCnt += dataCnt;
            totalDataPastCnt += dataPastCnt;
        }
        tableDataArray.push(dataCnt);
        tableDataArray.push(dataGrowthRate);

        graphDataArray.push(dataPastCnt);
        graphDataArray.push(dataCnt);
        
    }
    totalDataGrowthRate = (totalDataCnt - totalDataPastCnt) / totalDataPastCnt * 100;
    tableDataArray.unshift(totalDataGrowthRate);
    tableDataArray.unshift(totalDataCnt);

    graphDataArray.unshift(totalDataCnt);
    graphDataArray.unshift(totalDataPastCnt);

    DataTable(tableDataArray);
    LineGraph(graphDataArray, pastDay, nowDay);
}

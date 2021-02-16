import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function DataTable(tableDataArray) {
    
    const selectedData = useSelector((store) => store.search);

    useEffect(() => {   


        let html = '';
        const tableThead = document.getElementById('totalDataThead');
        const tableTbody = document.getElementById('totalDataTbody');
        const weapon_kind = ['전체 거래', '무기', '마약', '해킹', '포르노'];
        const dataGrowthRateName = ['전 일 대비 성장률', '전 주 대비 성장률', '전 월 대비 성장률', '전 년 대비 성장률'];
        let dataGrowthRateNum = 3;
        
        if(selectedData.date === 'Year'){
            dataGrowthRateNum = 3;
        }
        else if(selectedData.date === 'Month'){
            dataGrowthRateNum = 2;
        }
        else if(selectedData.date === 'Week'){
            dataGrowthRateNum = 1;
        }
        else if(selectedData.date === 'Day'){
            dataGrowthRateNum = 0;
        }
      
        html +=  `<td>불법 거래 종류</td>
                  <td className="total-data_table_center-td">불법 거래량</td>
                  <td>${dataGrowthRateName[dataGrowthRateNum]}</td>`;
    
        tableThead.innerHTML = html;
        html = '';

        for(let tbodyTrCreateNum = 0, dataCnt = 0; tbodyTrCreateNum < weapon_kind.length; tbodyTrCreateNum++, dataCnt += 2){
            html += `<tr>
                        <td>${weapon_kind[tbodyTrCreateNum]}</td>
                        <td class="total-data_table_center-td">${tableDataArray[dataCnt]}</td>`;
                    if(tableDataArray[dataCnt + 1] == Infinity || isNaN(tableDataArray[dataCnt + 1])){
                        html += `<td>0%</td>`;
                    }
                    else{
                        if(tableDataArray[dataCnt + 1] < 0){
                            html += `<td>${tableDataArray[dataCnt + 1]}%</td>`;
                        }
                        else{
                            html += `<td>+${tableDataArray[dataCnt + 1]}%</td>`;
                        }
                    }
                    
            html += `</tr>`;
        }

        tableTbody.innerHTML = html;

    }, [tableDataArray]);

    return(
        <table className="total-data_table">
            <thead >
            <tr id="totalDataThead">
            </tr>
            </thead>
            <tbody id="totalDataTbody">
            </tbody>
        </table>
    );
}
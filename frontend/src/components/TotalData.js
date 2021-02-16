// component 파일 목록
import ContinentButton from './ContinentButton';
import DateButton from './DateButton';
import DataTable from './DataTable';
import LineGraph from './LineGraph';

// js 파일 목록
import * as Search from '../javascripts/DataSearch';

// css 파일 목록
import '../TotalData.css';

export default function TotalData() {

    Search.DataSearch();

    return ( 
        <div className="total-data_div">
            <div className="total-data_div-table">
            <ContinentButton></ContinentButton>
            <DateButton></DateButton>
            <DataTable></DataTable>
            </div>
            <div className="total-data_div-graph">
            <LineGraph></LineGraph>
            </div>
        </div>
    );
}



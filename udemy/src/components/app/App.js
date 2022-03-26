import './App.css';
import {AppInfo} from "../app-info/app-info";
import {SearchPanel} from "../search-panel/search-panel";
import {AppFilter} from "../app-filter/app-filter";
import {EmployeesList} from "../empoyees-list/employees-list";
import {EmployeesAddForm} from "../employees-add-form/employees-add-form";

function App() {
    const data = [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Alex M..', salary: 3000, increase: true, id: 2},
        {name: 'Jackson S.', salary: 5000, increase: false, id: 3},
        {name: 'Dinara T.', salary: 4000, increase: true, id: 4},
        {name: 'Hrayr T..', salary: 10000, increase: true, id: 5},
        {name: 'Rocky T.', salary: 500, increase: false, id: 6},
    ];
    return (
        <div className="App">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;

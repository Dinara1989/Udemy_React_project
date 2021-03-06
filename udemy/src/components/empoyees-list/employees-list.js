import React from 'react';
import {EmployeesListItem} from "../employees-list-item/employees-list-item";
import './employees-list.css'

export const EmployeesList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem key={id} {...itemProps}/>
        )
    })
    return (
        <div>
            <ul className="app-list list-group">
                {elements}
            </ul>
        </div>
    );
};


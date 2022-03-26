import React from 'react';
import './app-filter.css'

export const AppFilter = () => {
    return (
        <div className="btn-group">
            <button type="button" className="btn btn-light">
                Все сотрудники
            </button>
            <button type="button" className="btn btn-outline-lite">
                На повышение
            </button>
            <button type="button" className="btn btn-outline-lite">
                З/П больше 1000$
            </button>
        </div>
    );
};


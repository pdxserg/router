import React from 'react';
import {Outlet} from "react-router-dom";

export const Crosses = () => {
    return (
        <div>
            <div>Headereeee</div>
            <Outlet/>
            <div>Foter</div>
        </div>
    );
};


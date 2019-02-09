import React from 'react';
import { format } from 'date-fns'

const today = format(new Date(), 'MMMM Do YYYY');

const TodaysDate = (props) => {
    return (
        <div>
            <p>{today}</p>
        </div>
    );
}



export { TodaysDate }
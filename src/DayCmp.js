import React from 'react';
const DayCmp = (props) => {
    let dayOfWeek = ["Sunday", "Monday", "Tuesay", "Wednesday", "Thursday", "Friday", "Saturday"];
    let curDate = props.dt;
    let currentDay = dayOfWeek[curDate.getDay()];
    return (
        <>
            <p>Today is: {currentDay}</p>
        </>
    )
}

export default DayCmp;
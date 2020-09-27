
import React from "react";
import buildRow, { getHour, getDay } from '../../utils/shared';
import { days, partOfDay, shortPartOfDay, planets, shortPlanets, mapping, categoryMapping } from '../../utils/constants'
import './grid.css';

const DataCmp = ({ day, horraiArr, isToday, find }) => {
    let hour = getHour();
    let pod = (hour < 6 || hour >= 18) ? 1 : 0; // to get the part of day from time
    let convertedHour = hour > 12 ? hour % 12 : hour;
    let rowNumber = convertedHour < 6 ? convertedHour + 6 : convertedHour - 6;

    const content = partOfDay.map((pd, k) => {
        return (
            <React.Fragment key={`p${k}`}>
                <div className="flex-container">
                    <HeadCol day={day} pd={pd} className='long-text' />
                    <HeadCol day={day} pd={shortPartOfDay[k]} className='short-text grow-2' />
                    {horraiArr[k].map((horrai, key) => {
                        let isActive = (isToday && rowNumber === key && pod === k) ? true : false;
                        let addFindClass = categoryMapping[horrai].do.includes(parseInt(find)) ? ` hightlight` : ``;
                        console.log("addFindClass====", addFindClass)
                        console.log("find====", find)
                        console.log("cc====", categoryMapping[horrai].do.includes(find))
                        return (
                            <React.Fragment key={`h${key}`}>
                                <HourCol text={horrai} order={key + 2} key={`LH${key}`} className={isActive ? `active-horai long-text${addFindClass}` : `long-text${addFindClass}`} />
                                <HourCol text={shortPlanets[horrai]} order={key + 2} key={`SH${key}`} className={isActive ? `active-horai short-text${addFindClass}` : `short-text${addFindClass}`} />
                            </React.Fragment>
                        );
                    })}

                </div>
            </React.Fragment>
        )
    })
    return content;
}

const HeadCol = ({ day, pd, className }) => {
    return (
        <>
            <div className={`flex-item ${className}`} style={{ order: 1 }} >{day}</div>
            <div className={`flex-item ${className}`} style={{ order: 2 }} >{pd}</div>
        </>
    );
};

const HourCol = (props) => {
    let { order, text } = props;
    return (
        <>
            <div className={`flex-item ${props.className}`} style={{ order: order }}>{text}</div>
        </>
    )
}

const TableHeader = () => {
    let startAt = 6;
    let max = 12;
    let findTime = (key) => (key + startAt) % max;
    let timings = Array.from({ length: 12 }, (_, key) => findTime(key) === 0 ? `${max}-${max + 1}` : `${findTime(key)}-${findTime(key) + 1}`)
    let row = timings.map((timing, key) => {
        return <HourCol text={timing} order={key + 2} key={`T${key}`} />
    })
    return (
        <>
            <div className="flex-container">
                <HourCol className='long-text' text="கிழமை" order={0} />
                <HourCol className='short-text grow-2' text="கி" order={0} />
                <HourCol className='long-text' text="காலம்" order={1} />
                <HourCol className='short-text' text="கா" order={1} />
                {row}
            </div>
        </>
    )
}
function GridCmp({ find }) {
    console.log("find====", find)
    const content = days.map((day, key) => {
        let firstRow = buildRow(planets, mapping[key]);
        let secondRow = buildRow(planets, planets.indexOf(firstRow[firstRow.length - 1]) + 1);
        let today = getDay();
        return (
            <React.Fragment key={`F${key}`}>
                <DataCmp day={day} horraiArr={[firstRow, secondRow]} today={today} isToday={today === key} key={`D${key}`} find={find} />
            </React.Fragment>
        )
    });
    return (
        <>
            <TableHeader />
            {content}
        </>
    )

}

export default GridCmp;
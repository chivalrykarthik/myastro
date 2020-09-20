
import React from "react";
import buildRow from './util';
import './grid.css';

const days = ["ஞா", "தி", "செ", "பு", "வி", "வெ", "ச"];
const partOfDay = ['பகல்', 'இரவு'];
const planets = [
    "சூரி",
    "சுக்",
    "புத",
    "சந்",
    "சனி",
    "குரு",
    "செ"
]
const mapping = [0, 3, 6, 2, 5, 1, 4];
/*
    mapping[day] = map[0]
    
*/
const DataCmp = ({ day, horraiArr }) => {
    const content = partOfDay.map((pd, k) => {
        return (
            <React.Fragment key={`p${k}`}>
                <div className="flex-container">
                    <HeadCol day={day} pd={pd} />
                    {horraiArr[k].map((horrai, key) => {
                        return <HourCol text={horrai} order={key + 2} key={`H${key}`} />
                    })}

                </div>
            </React.Fragment>
        )
    })
    return content;
}

const HeadCol = ({ day, pd }) => {
    return (
        <>
            <div className="flex-item" style={{ order: 1 }} >{day}</div>
            <div className="flex-item" style={{ order: 2 }} >{pd}</div>
        </>
    );
};

const HourCol = (props) => {
    let { order, text } = props;
    return (
        <>
            <div className="flex-item" style={{ order: order }}>{text}</div>
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
                <HourCol text="கிழமை" order={0} />
                <HourCol text="காலம்" order={1} />
                {row}
            </div>
        </>
    )
}
function GridCmp() {
    const content = days.map((day, key) => {
        let firstRow = buildRow(planets, mapping[key]);
        let secondRow = buildRow(planets, planets.indexOf(firstRow[firstRow.length - 1]) + 1);
        return (
            <React.Fragment key={`D${key}`}>
                <DataCmp day={day} horraiArr={[firstRow, secondRow]} />
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
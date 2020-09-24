const buildRow = (source, start = 0, ar = []) => {
    let limit = 12;
    if (ar.length < limit) {
        let cmb = source.slice(start, limit - ar.length);
        ar = [...ar, ...cmb];
        return buildRow(source, 0, ar);
    }
    return ar;
}

export const getHour = () => new Date().getHours();
export const getDay = () => new Date().getDay();
export default buildRow;
// let ar = [0, 1, 2, 3, 4, 5, 6];

// console.log(buildRow(ar, 6))
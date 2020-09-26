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
export function dateToNum(date) {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();

    return ymdToNum(y, m, d);
}

export function ymdToNum(y, m, d) {
    return y * 10000 + m * 100 + d;
}
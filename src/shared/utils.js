export function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    const areKeysEqual = (keys1.length === keys2.length) &&
        keys1.every((element) =>
            {return keys2.includes(element);}
        );
    if (!areKeysEqual) {
        return false;
    }

    for (const key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        if (val1 !== val2) {
            return false;
        }
    }

    return true;
}

export function dateToNum(date) {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();

    return ymdToNum(y, m, d);
}

export function ymdToNum(y, m, d) {
    return y * 10000 + m * 100 + d;
}
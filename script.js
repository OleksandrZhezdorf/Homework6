/*Задача 1*/

let clone = (object) => {
    const newObj = {};
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            newObj[key] = element;
        }
    }
    return newObj;
}

/*Задача 2*/


const human = (object) => {
    let sum = 0;
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            sum += (object[key]).length;
        }
    }
    return sum;
};




// class test {

// }

// export default test;


const uniq = arr => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === undefined) {
            map[arr[i]] = arr[i];
        }
    }

    return Object.values(map)
}

console.log(uniq([1,2,3,4,2,1,23,1,3,1,2,68,9,90,6,453,5]));
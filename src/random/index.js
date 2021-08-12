function randomArrVal(arr) {
    let randomNum = Math.floor(Math.random() * arr.length);
    return arr[randomNum];
}
export { randomArrVal };
module.exports = (timeStamp) => {
    const curDate = new Date(timeStamp);
    let dateArr = [];
    dateArr.push(fixDigits(curDate.getDay()));
    dateArr.push(fixDigits(curDate.getMonth()));
    dateArr.push(fixDigits(curDate.getFullYear()));
    const date = dateArr.join('/');

    let timeArr = [];
    const timeStr = curDate.toLocaleTimeString('en-US');
    timeArr.push(fixDigits(timeStr.split(':')[0]));
    timeArr.push(fixDigits(timeStr.split(':')[1]));
    const time = timeArr.join(':');

    return date + ' at ' + time + ' ' + timeStr.slice(-2);
};

function fixDigits(num, digit) {
    let fixDigit = digit || 2;
    if(num.toString().length < fixDigit) {
        return `0${num}`;
    }
    return num;
}
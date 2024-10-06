// The getDateParser returns a closure that parses the dates according the given format
//the value of format B, L or M
// B – big-endian (year, month, day), e.g. 2021-03-31
// L – little-endian (day, month, year), e.g. 31-03-2021
// M – middle-endian (month, day, year), e.g. 03-31-2021
function getDateParser(format) {
    // Define a function that takes an arbitrariy number of strings containing dates to be parsed according to the given format
    // the date components are sperated by dashes (-)
    // returns a stringified array of objects containing the parsed dates
    // the order of the properties in each object should be day, month, year, regardless of the orginial format
    return function (...dateStrings) {
        const parsedDates = [];

        for (let dateString of dateStrings) {
            let [first, second, third] = dateString.split("-");

            let day, month, year;

            if (format === 'B') {
                year = first;
                month = second;
                day = third;
            } else if (format === 'L') {
                day = first;
                month = second;
                year = third;
            } else if (format === 'M') {
                month = first;
                day = second;
                year = third;
            } else {
                throw new Error("Invalid format! Please use 'B', 'L', or 'M'.")
            }

            parsedDates.push({
                day: day,
                month: month, 
                year: year
            });
        }
        return JSON.stringify(parsedDates)
    }
}

// add an assignment for each of the following bindings so that it would be point at a closure of the corresponding format 
let bigEndianParser = getDateParser('B');
let littleEndianParser = getDateParser('L');
let middleEndianParser = getDateParser('M');

// Please don't change these lines
module.exports.bigEndianParser = bigEndianParser;
module.exports.littleEndianParser = littleEndianParser;
module.exports.middleEndianParser = middleEndianParser;

/*
   If you would like to run the tests locally to check your work before submission you need to following the following steps
- Open a terminal inside the working directory
- Run the command `npm install` (only needed once)
- Run the command `npm test` (everytime you would like to run the tests)
*/
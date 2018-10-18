// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considerred overlapping.

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
 var merge = function(intervals) {
    intervals.sort((a,b) => a.start - b.start);
    let i = 0;
    while (i < intervals.length - 1) {
        if (intervals[i].end >= intervals[i + 1].start) {
            intervals[i].end = Math.max(intervals[i].end, intervals[i + 1].end);
            intervals.splice(i + 1,1);
        } else i++;
    }
    return intervals;
}
const convertToIntervals = (data) => {
    let intervals = [];
    for (let i = 0; i < data.length; i++) {
        intervals.push(new Interval(data[i][0], data[i][1]));
    }
    return intervals;
}

let data1 = [[1,3],[2,6],[8,10],[15,18]];
let data2 = [[1,4],[4,5]];

let input1 = convertToIntervals(data1);
let input2 = convertToIntervals(data2);

console.log(merge(input1));
console.log(merge(input2));

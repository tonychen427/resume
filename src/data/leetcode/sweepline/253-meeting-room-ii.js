/*
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei),
 
    find the minimum number of conference rooms required.
* For example,
* Given [[0, 30],[5, 10],[15, 20]], return 2.
*/
//
// [0............................................30]
//      [5..........10]           
//          [7....................20]
//                                     [23.....27]
//                                        [24................ 40]
//                                             [25........35]   
// ------------------------------------------------ 
//
// // [5,15], [10, 20],[15, 40],[20, 30]
// // [5..........15]
// //      [10...............20]
// //                   [15................................40]
// //                       [20............30]
// [5,t]  + 1 
// [10,t] + 1 2
// [15,f] - 1 1
// [15,t] + 1 2
// [20,f] - 1 1
// [20,t] + 1 2
// [30,f] - 1 1
// [40,f] - 1 0
class Interval {
    constructor(val, isStart) {
        this.val = val;
        this.isStart = isStart;
    }
}

const minMeetingRooms = intervals => {
    if (intervals.length === 0) return 0;

    let meetings = [];
    let maxRoom = 0;
    let room = 0;

    for (let i = 0; i < intervals.length; i++) {
        meetings.push(new Interval(intervals[i][0], true));
        meetings.push(new Interval(intervals[i][1], false));
    }

    meetings.sort((a,b) => a.val - b.val || a.isStart);
console.log(meetings);
    for (let j = 0; j < meetings.length; j++) {
        room = meetings[j].isStart ? room + 1 : room - 1;
        maxRoom = Math.max(room, maxRoom)
    }
    return maxRoom;

    // version 2. 
    // var map = {};
    // let room = 0;
    // let meetingRoom = 0;

    // for (let i = 0; i < meetings.length; i++) {
    //     map[meetings[i].start] = map[meetings[i].start] || 0;
    //     map[meetings[i].start]++;
    //     map[meetings[i].end] = map[meetings[i].end] || 0;
    //     map[meetings[i].end]--;
    // }

    // for (let m in map) {
    //     room += map[m];
    //     meetingRoom = Math.max(room, meetingRoom);
    // }
    // return meetingRoom;
}
console.log(minMeetingRooms([ [0, 30], [5, 10], [7, 20], [23,27], [24, 40], [25, 35]]));
console.log(minMeetingRooms([ [0, 30], [5, 10], [7, 20]]));
console.log(minMeetingRooms([ [20, 30], [10, 20],[5,15], [15, 40] ]));
console.log(minMeetingRooms([ [0, 10], [15, 20], [25, 30]]));

class t extends Map {
    constructor(capacity) {
        super();
        this.c = capacity;
        this.set('a','a');
    }
}

const test = new t('1');

console.log(test.get('a'));
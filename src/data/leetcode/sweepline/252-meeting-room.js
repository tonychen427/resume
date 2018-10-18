// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), 
// determine if a person could attend 

// For example,
// Given [[0, 30],[5, 10],[15, 20]],
// return false.
// --------------------- 
// 作者：fantasiasango 
// 来源：CSDN 
// 原文：https://blog.csdn.net/fantasiasango/article/details/52698405 
// 版权声明：本文为博主原创文章，转载请附上博文链接！

// sweepline
// brute force

// interval = (start, end)
//          interva1  inverval2  interval3
// input2 : [0, 10],  [15, 20],  [0, 30], [5, 8]


// [0..........10]
//                     [15.....20]                    
// [0.................................30]
//        [5..8]
// ---------------------------------------------       
// [0..........10]
//                  [11]..................30]
//                   ^   
//                    [15.....20]                    


// public boolean canAttendMeetings(Interval[] intervals) {
//     o(log n)  > o(n)
//     Arrays.sort(intervals, new Comparator<Interval>() {
//         public int compare(Interval a, Interval b) {
//             return a.start - b.start;
//         };
//     });
//     // sorted interal array 
//     // sweepline
//     for (int i = 1; i < intervals.length; i++) {
//         if (intervals[i - 1].end > intervals[i].start) {
//             return false;
//         }
//     }
// }

function Interval(start, end) {
     this.start = start;
     this.end = end;
}

var canAttendMeetings = function(intervals) {
    let data = [];
    for (let i = 0; i < intervals.length; i++) {
        data.push(new Interval(intervals[i][0],intervals[i][1]));
    }
    data.sort((a,b) => {
        return a.start > b.start ? 1 : -1;
    });
    for(var i = 1; i < data.length; i++) {
        if(data[i - 1].end > data[i].start) {
            return false;
        }
    }
    return true;
};

console.log(canAttendMeetings([[5, 10],[0, 30],[15, 20]]));
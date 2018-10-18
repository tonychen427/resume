const data = [  
    {  
       "date":"2018-01-29",
       "category":"apple",
       "count":"1"
    },
    {  
       "date":"2018-01-29",
       "category":"apple",
       "count":"1"
    },
    {  
       "date":"2018-01-28",
       "category":"apple",
       "count":"2"
    },
    {  
       "date":"2018-01-27",
       "category":"apple",
       "count":"1"
    },
    {  
       "date":"2018-01-29",
       "category":"banana",
       "count":"2"
    },
    {  
       "date":"2018-01-27",
       "category":"banana",
       "count":"3"
    },
    {  
       "date":"2018-01-27",
       "category":"banana",
       "count":"2"
    },
    {  
       "date":"2018-01-28",
       "category":"orange",
       "count":"1"
    },
    {  
       "date":"2018-01-29",
       "category":"orange",
       "count":"4"
    },
    {  
       "date":"2018-01-24",
       "category":"orange",
       "count":"5"
    }
 ];


 const groupCategory = () => {
  let result = {};
  for (let i = 0; i < data.length; i++) {
    if (result[data[i].category] === undefined) {
      result[data[i].category] = [ {date: data[i].date, count: data[i].count} ]
    } else {
      let temp = result[data[i].category];
      let match = false;
      for (let j = 0; j < temp.length; j++) {
          if (temp[j].date === data[i].date) {
              temp[j].count = (parseInt(temp[j].count) + parseInt(data[i].count)).toString();
              match = true;
          }
      }
      if (!match) {
          temp.push({date: data[i].date, count: data[i].count});
      }
    }
  }
  return result;
}
 console.log(groupCategory());
   
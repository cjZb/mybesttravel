export const telphone = () => {

}

// 获取年月日
export const time = (time) => {
  // console.log(time)
  let formatTime = (a) => parseInt(a) < 10 ? '0' + parseInt(a) : parseInt(a)
  let t = new Date(time);
  let year = t.getFullYear();
  let month = formatTime(t.getMonth()+1);
  let day = formatTime(t.getDate());
  let hours = formatTime(t.getHours());
  let minutes = formatTime(t.getMinutes());
  let seconds = formatTime(t.getSeconds());
  return [year,month,day,hours,minutes,seconds]
}

export const sortList = (arr) =>{
  var that = this;
  var hash={};
  var list = [];
  var n=-1;
  var $sort = arr; // .sort(that.compare('class_id'))

  for(var i=0;i<$sort.length;i++){
    if(!hash[$sort[i].letter]){
      n++;
      hash[$sort[i].letter]=true;
      list[n]=[];
    };
    list[n].push($sort[i]);
  }
  // console.log(list);
  return list
}

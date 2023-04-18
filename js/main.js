
let addTime = +prompt('Enter ...')

let timeFormat = (function() {
  function num(val){
      val = Math.floor(val);
      return val < 10 ? '0' + val : val;
  }
  return function (ms){
      let sec = ms / 1000
        , hours = sec / 3600  % 24
        , minutes = sec / 60 % 60
        , seconds = sec % 60
      ;

      return num(hours) + ":" + num(minutes) + ":" + num(seconds);
  };
})();

alert(timeFormat);

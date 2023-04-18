let addTime = +prompt('Enter number of hours');
let result = addTime * 3600;

if (addTime > 24) {
  alert(`WHAT!?`)
} else {
  alert(`You correct enter - ${result}`);
}

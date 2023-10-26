alert("projekt3");
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
theList.shift();
theList.pop();
theList.splice(0, 0, 'PIERWSZY');
theList[3] = 'Witaj, świecie';
theList[2] = 'ŚRODKOWY';
theList.splice(4, 3, 'OSTATNI');
console.log(theList);
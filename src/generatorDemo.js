function * gen(){
  var result1 = yield 'hello';
  var result2 = yield 'world';
  return result1 + result2;
}
var g = gen();
console.log(g.next());
//{value : 'hello', done : false}
console.log(g.next(2));
//{value : 'world', done : false}
console.log(g.next(3));
//{value : 3, done: true}
console.log(g.next(8));
//{value : undefined, done: true}



// ----------------------

var myArray = {
  0: '你',
  1: '的',
  2: '名字',
  length: 3
};

myArray[Symbol.iterator] = function * (){
  for(var i = 0; i < this.length; i++) {
    yield this[i];
  }
};

for(var item of myArray) {
  console.log(item);
}

// ----------------------
function * gen1() {
  yield console.log(1)
  yield console.log(2)
  console.log(3)
}

const g1 = gen1()
console.log(g1.next())
console.log(g1.next())
console.log(g1.next())

export default g;
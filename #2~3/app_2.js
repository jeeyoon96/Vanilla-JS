const a = 1;   
const b = 2;  //바꿀 수 없음


let myName = 'jy';  //바꿀 수 있음.
console.log(myName);
myName = 'jeeyoon';
console.log(myName);


var c = '';  //아무런 규칙이 없음. --> 코드만 보고 알 수 없음.
//항상 const를 쓰고, 필요할 때는 let 을 쓰자. var은 노노.


const amIFat = null;  //null 비어있음.
let something;  //undefined 메모리에 만들어졌지만 값이 없음.
console.log(amIFat, something);
//null은 자연적으로 일어나는게 아님. 우리가 넣어주니까.
// variable 안에 값이 "없다"는 확신을 위해 쓰는 것.


const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const nonsense = [1, 2, "hello", false, null, true, undefined, 'nico'];
console.log(daysOfWeek, nonsense);

console.log(daysOfWeek[4]); //array 에 있는 item 가져오기 (index 0부터 시작)
daysOfWeek.push('sun');  //array에 요소 추가


// object
const player = {
    'name':'nico', 
    'points':10,
    'handsome':true, 
    'fat':true};
console.log(player);
console.log(player.name);
console.log(player['name']);

player.fat = false;     
player.lastName = 'potato';
player.points = player.points + 15;
console.log(player)
//object 안의 내용을 수정,추가하는 것은 가능. constants 는 'player' 라는 object. player = "kkk" 로 변경하면 error.



//function
function sayHello(nameOfPerson, age){
    console.log('hello. my name is ' + nameOfPerson + ". My age is " + age);
}
sayHello('jy', 27);


const player2 = {
    'name':'jy',
    sayHello : function(otherPersonName){
        console.log("hello " + otherPersonName + ". Nice to meet you.");
    }
}
console.log(player2.name);
player2.sayHello('dy');



const calculator = {
    plus : function (a, b){ 
        return a+b;
    },
    minus : function(a,b){ 
        return a-b;
    },
    times : function(a,b){ 
        return a*b;
    },
    divide : function(a,b){ 
        return a/b;
    },
    powerof : function(a,b){ 
        return a**b;
    }   
}
const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult,10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.powerof(divideResult, minusResult);


//
/*
const age = prompt("How old are you?");
console.log(age, parseInt(age));  // parseInt() 에 숫자가 들어가지 않으면, NaN(Not a Number) 을 뱉음
console.log(typeof age, typeof parseInt(age));  
*/

const age = parseInt(prompt("How old are you?"));
if (isNaN(age) || age <0) {
    console.log("Please write a number");
} else if(age < 18) {
    console.log("You are too young.")
} else if (age >= 18 && age <=50) {
    console.log("You can drink.")
} else if (age >50 && age <=80){
    console.log("You should exercise.")
} else if (age >80){
    console.log("You can do whatever you want.")
} 

/* ==  : 동등연산자, 값만 같으면 true.
   === : 일치연산자, 값과 값의 Data Type 모두 비교. 같으면 true, 다르면 false */
if (age === 100) {
    console.log("age is 100");
}
if (age !== 100) {
    console.log("age is not 100");
}
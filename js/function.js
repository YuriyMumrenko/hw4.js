//---------task1-------------------
let buttonTask1 = document.querySelector('.enter_Task1');
buttonTask1.addEventListener('click' , markAllP);

function markAllP(){
	let allP = document.querySelectorAll('p'); 
	for (let i = 0; i < allP.length; i++) {
		allP[i].style.backgroundColor='red';
	}
}

//---------task2-------------------
let buttonTask2 = document.querySelector('.enter_Task2');
buttonTask2.addEventListener('click' , ImageShadow);


function ImageShadow(){
	let allImg = document.querySelectorAll('img'); 
	for (let i = 0; i < allImg.length; i++) {
		allImg[i].style.boxShadow= '3px 3px 7px #020202';
	}
}

//---------task3-------------------
let buttonTask3 = document.querySelector('.enter_Task3');
buttonTask3.addEventListener('click' , outputNumberParagraph);

function outputNumberParagraph(){

	let allP = document.querySelectorAll('p'); 
	for (let i = 0; i < allP.length; i++) {
		let numberParagraph  = '- абзац № ' + (i+1) + ' - ';
		allP[i].textContent = numberParagraph + allP[i].textContent ;
	}
}
//---------task4-------------------
var buttonCount1 = 1, buttonCount2 = 1; 
var buttoms = document.querySelectorAll('.enter_count');

let outQuantityClick1 = document.querySelector('.c1');
let outQuantityClick2 = document.querySelector('.c2');

for(let i = 0; i < buttoms.length; i++){
    buttoms[i].addEventListener('click', quantityClick);
}

function quantityClick (elem) {
	let button = elem.target;
	if (button === buttoms[0]){

	outQuantityClick1.textContent = "кнопка 1: количество кликов =  " + buttonCount1;
	buttonCount1++;
	}
	else if (button === buttoms[1]) {
		outQuantityClick2.textContent = "кнопка 2: количество кликов =  " + buttonCount2;
	buttonCount2++;
	}
}

//---------task5-------------------


let buttonTask5 = document.querySelector('.enter_Task5');
buttonTask5.addEventListener('click' , outResPower);


let inpNum = document.querySelector('.inpNum');
let inpPower = document.querySelector('.inpPower');


function whatIsPower(a, b){
	let res = Math.pow(a, b);
	return (res);
}

function outResPower(){
	whatIsPower();
	alert (whatIsPower(inpNum.value, inpPower.value));

}

//---------task6-------------------
let buttonTask6 = document.querySelector('.enter_Task6');
buttonTask6.addEventListener('click' , markAllElem);

let inputTag = document.querySelector ('.inputTag');

function markAllElem(){

let elements = document.querySelectorAll(inputTag.value);
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.textDecoration = 'underline';
	}
}

//---------task7-------------------
let buttonTask7 = document.querySelector('.enter_Task7');
buttonTask7.addEventListener('click' , outCheckAge);

let inputAge1 = document.querySelector('.inputAge1');

function checkAge(age) {

	if (age > 16) {
		alert( 'Добро пожаловать!' );
	} else {
		alert( 'Вы еще молоды!' );
	}
}
function outCheckAge (){
	checkAge(inputAge1.value);
}
//---------task8-------------------

let buttonTask8 = document.querySelector('.enter_Task8');
buttonTask8.addEventListener('click' , outCheckAge2);

let inputAge2 = document.querySelector('.inputAge2');

function checkAge2(age) {

	age = age || parseInt (prompt ('Введите возраст'));

   // -----2-ой вариант проверки на undefined-----

   // if (age===undefined); {
   // 	age = parseInt (prompt ('Введите возраст'));
   // }
   //--------------------------------------------

   if (age > 16) {
   	alert( 'Добро пожаловать!' );

   } else {
   	alert( 'Вы еще молоды!' );
   }

}

function outCheckAge2 (){
	checkAge2(inputAge2.value);
}

//---------task9-------------------

let buttonTask9 = document.querySelector('.enter_Task9');
buttonTask9.addEventListener('click' , outlengthArray);

function lengthArray (arr){

	if (arr===undefined) {
		arr = (alert ('Ошибка!'));
	}
	else {

		for (let i = 0; i < arr.length; i++){
			let res = arr.length  ;

			alert( "длина массива = " + res );
			return res;
		}
	}
}
function outlengthArray (){

    
 lengthArray( [ 2, 8, "koko", true]);
 // lengthArray( ); // аргумент не задан
}


//---------task10-------------------

let buttonTask10 = document.querySelector('.enter_Task10');
buttonTask10.addEventListener('click' , outcheckNum);


let inputNumber = document.querySelector('.inputNum_Task10');
let outCheckNum = document.querySelector('.out_checkNum');
let resCheckNum;

function checkNum(number){

	if (inputNumber.value  > 10 ) {

		resCheckNum = Math.pow(inputNumber.value, 2);
		return (resCheckNum);

	} else if (inputNumber.value  < 7){
		resCheckNum = 'Вы ввели число меньше 7 ';
		return (resCheckNum);

	} else if (inputNumber.value ==8){
		resCheckNum = 7 ;
		return (resCheckNum);


	} else if (inputNumber.value ==9) {
		resCheckNum = 8 ;
		return (resCheckNum);
	}

}
function outcheckNum(){
	checkNum();
	outCheckNum.textContent =  resCheckNum ;

}

//---------task11-------------------

let buttonTask11 = document.querySelector('.enter_Task11');
buttonTask11.addEventListener('click' , guessNum);


let inputNum, randomNum, out, count, answer, stop;

randomNum = Math.floor((Math.random() * 10) + 1);
stop = '';
count = 1;


function guessNum(){

	inputNum = document.querySelector('.inputNum_Task11');
	
	out = document.querySelector('.out_guessNum');

	if (inputNum.value  == randomNum) {
		answer = 'Вы угадали ';	

	} else if (inputNum.value  > randomNum) {
		answer = 'Вы ввели число больше чем нужно ';
		
	} else {
		answer = 'Вы ввели число меньше чем нужно ';
		
	}
	if   (count == 3){
		stop = '- кол-во попыток исчерпано ' ;
		out.style.backgroundColor = 'orange';

	} else if (count >3) {

		location.reload();
	}

	out.innerHTML =  answer  +'<p>'+   " попытка № " + count + stop;
	count++;
}


//-------------очистка результатов вывода на экран----------

let buttonCleanUp = document.querySelector('.enter_CleanUp');
buttonCleanUp.addEventListener('click' , cleanUp);

function cleanUp (){

	location.reload();

}

//------------------------------------------------------------










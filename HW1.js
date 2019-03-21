*//Задание 1

*//1. Получить первую и последнюю буквы строки//*

let string = 'some test string';
console.log(string.charAt(0));

let string = 'some test string';
console.log("string".slice(-1));

*//2. Сделать первую и последнюю буквы в верхнем регистре//*

let string = 'some test string';
console.log(string.charAt(0).toUpperCase());

let string = 'some test string';
console.log("string".slice(-1).toUpperCase());

*//Найти положение слова ‘string’ в строке//*

let string = 'some test string';
console.log(string.indexOf("string"));

*//4. Найти положение второго пробела (“вручную” ничего не считать)//*

let str = 'some test string';
let value;
value = str.lastIndexOf(' ');
alert(value);

*//5. Получить строку с 5-го символа длиной 4 буквы*//

let str = 'some test string';
alert(str.substr(5,4));

*// 6. Получить строку с 5-го по 9-й символы*//

let str = 'some test string';
alert(str.substring(5,9));

*//7. Получить новую строку из исходной путем удаления последних 6-и символов*//

let str = 'some test string';
alert( "some test string".slice( 0, -6) );


*//8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
*//содержаться текст “2016”

let str1 = "20";
let str2 = "16";
let res = str1.concat(str2); 
console.log(res);

*// Числа
*//1. Получить число pi из Math и округлить его до 2-х знаков после точки

let n = Math.PI;
alert( Math.round(n * 100) / 100 );

*// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

Math.min(...[5, 11, 16, 12, 51, 12, 13, 51]);
Math.max(...[5, 11, 16, 12, 51, 12, 13, 51]);



*// Получить случайное число и округлить его до двух цифр после запятой

let x = 57;
let randRounded = Math.round(Math.random() * x *100)/100;
alert(randRounded);

 *// Получить случайное целое число от 0 до X. X - любое произвольное число. 

let x = 57;
let rand = Math.floor(Math.random()*x) + 0.5578;
console.log(rand);

*// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

alert( (0.6 * 10 + 0.7 * 10) / 10 ); 

*//5. Получить число из строки ‘100$’


let string = '100$';
alert(parseInt(string,10));

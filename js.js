//1 Завдання
function Exercise1 (){
const number = []
for(let i = 10; i <= 20;i++){
 number.push(i)
}
return number.join(', ')
}


//2 Завдання
function Exercise2 (){
const number2 = [10,11,12,13,14,15,16,17,18,19,20]
let result = []
for(let i = 0 ; i < number2.length;i++){
   number2[i] *= number2[i]
  }
return number2.join(', ')
}

// // 3 Завдання
debugger
function Exercise3() {
    let mult = [];

    for (let i = 1; i <= 10; i++) {
        mult.push(i * 7);
    }

    return mult.join(', ');  
}

// // 4 Завдання

 function Exercise4(){
     let num = 0
for(let i = 0; i <= 15;i++){
     num += i
 }
return num
 }
// // 5 Завдання
function Exercise5 (){
let num2 = 1
for(let i = 1; i <= 15;i++){
    num2 *= i
}
return num2
}
// // 6 Завдання
function Exercise6(){
const numSecond = 500
const nums = 1
let resultAv = 0
for(let i = nums ; i<=numSecond; i++){
     resultAv += i
    
 }
 return resultAv = resultAv/numSecond
}
 // // 7 Завдання
function Exercise7(){
let parnSum = 0
for(let i = 30; i <= 80; i++){
    if( i% 2 ===0){
        parnSum +=i
    }
}
return parnSum
}
// // 8 Завдання
function Exercise8(){
let parnSum2 = 100
let parnSum3 = 200
let sumNum = 0
for(let i = parnSum2; i<=parnSum3; i++){
    if(i%3 === 0){
   sumNum += i
    
}}
return sumNum
}
// // 9 Завдання
function Exercise9(){
let naturalNum = 26
const naturalRes = []
for( let i = 1; i<=naturalNum;i++){
    if(naturalNum%i === 0){
        naturalRes.push(i) 
    }
}
return naturalRes.join(', ')
}
// // 9-10-11 Завдання

function Exercise10 (){
let num1 = [];
let num2 = [];
let num3 = 0;
let num4 = 26
for(let i = 1;i<= num4;i++){
    if(num4 % i === 0){
        num1.push(i);
        if(i%2 ===0){
             num2.push(i);
             num3 += i;
        }
    }
}
 return `9.Дільник числа ${num4} : ${num1}
10.Кількість парних дільників : ${num2.length}
11.Cума парних дільників : ${num3}`}

// // 12 Завдання
function Exercise11(){
    let tablMult = ''
for( let i =1; i <=10;i++){
    for(let j =1; j <=10;j++){
       tablMult += `${i} * ${j} = ${i * j}\n`
    }
}
console.log(tablMult)
return tablMult
}



alert(`
1.Вивести на сторінку в один рядок через кому числа від 10 до 20 : ${Exercise1()};
2.Вивести квадрати чисел від 10 до 20: ${Exercise2()};
3.Вивести таблицю множення на 7: ${Exercise3 ()};
4.Знайти суму всіх цілих чисел від 1 до 15: ${Exercise4()};
5.Знайти добуток усіх цілих чисел від 15 до 35: ${Exercise5 ()};
6.Знайти середнє арифметичне всіх цілих чисел від 1 до 500: ${Exercise6()};
7.Вивести суму лише парних чисел в діапазоні від 30 до 80: ${Exercise7()};
8.Вивести всі числа в діапазоні від 100 до 200 кратні 3: ${Exercise8()};
${Exercise10 ()};
12.Надрукувати повну таблицю множення від 1 до 10: ${Exercise11()}.`)
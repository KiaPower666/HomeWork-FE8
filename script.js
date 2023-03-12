// Пользователь вводит ТРИ числа вывести в консоль наибольшее из них.
//  В этой задаче необходимо сделать проверку на число (нужно убедиться, что пользователь ввел именно число)

// let numberOne = Number(prompt());
// let numberTwo = Number(prompt());
// let numberThree = Number(prompt());

// if (numberOne > numberTwo && numberOne > numberThree) {
//     console.log("Первое число " + numberOne);
//     console.log(typeof numberOne);
// } else if (numberTwo > numberOne && numberTwo > numberThree) {
//     console.log("Второе число " + numberTwo);
//     console.log(typeof numberTwo);
// } else {
//     console.log("Третье число " + numberThree);
//     console.log(typeof numberThree);
// }

// Используя конструкцию switch, напишите программу, которая переводит числа в слова. 
// Например: пользователь вводит число 2, программа выводит «Два». Программу необходимо сделать для цифр от 0 до 5 (включительно)

// let numberToSwitch = Number(prompt());

// switch (numberToSwitch){
//     case 0:  0 === numberToSwitch
//         console.log('Ноль');
//         break;
//     case 1:  1 === numberToSwitch
//         console.log('Один');
//         break;
//     case 2:  2 === numberToSwitch
//         console.log('Два');
//         break;
//     case 3: 3 === numberToSwitch
//         console.log('Три');
//         break;
//     case 4: 4 === numberToSwitch
//         console.log('Четыре');
//         break;
//     case 5: 5 === numberToSwitch
//         console.log('Пять');
//         break;
// }

// Дан следующий код: (Необходимо переписать этот код используя тернарный оператор)

    // let age = 30;

    // if (age < 10) {
    //     console.log('hi!');
    // } else if (age < 20) {
    //     console.log('hello!');
    // } else {
    //     console.log('good day!');
    // }


    // Решение

// let age = 30;
// console.log( age < 10 ? 'hello' :age < 20 ? 'hi!': 'good day!');

// Написать программу для проверки таблицы умножения:
// Пользователь вводит число a
// Пользователь вводит число b
// Пользователь вводит ответ на a * b
// Нам необходимо проверить ответ пользователя на корректность,
//  если пользователь ответил неправильно то выводим ответ вида: Ошибка! Правильный ответ: correctAnswer

// Где correctAnswer - это переменная, в которой находится правильный ответ

// Если пользователь ввел правильный ответ, то выводим сообщение вида: Правильно!

// let a = Number(prompt("Первое число"));
// let b = Number(prompt("Второе число"));
// let userResponse = Number(prompt("Ответ"));
// let correctAnswer = Number(a * b);

// if (correctAnswer === userResponse) {
//     console.log("Правильно!");
// } else {
//     console.log("Ошибка! Правильный ответ:" + correctAnswer);
// }



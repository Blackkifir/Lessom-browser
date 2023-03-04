// function funcVarOne () {
    
//     let localVarOne = 10;
//     let localVarTwo = 20;
//     console.log(localVarOne);
//     console.log(localVarTwo);

// }
// funcVarOne(); 

// function funcVarTwo () {

//     let localFunctionOne = 'Меня зовут Ник'; 
//     let localFunctionTwo = 'Привет, а меня Кифир';
//     console.log(localFunctionOne);
//     console.log(localFunctionTwo);
// }
// funcVarTwo () ;
// * Step (F9) – сделать следующий шаг в обычном (синхронном) порядке исполнения кода;

// * Step over next function call (F10) – если нашим следующим шагом должен стать вход в некоторую функцию,
//  то при нажатии на эту клавишу мы перешагнём через вызов (функция будет "мгновенно" исполнена в обычном режиме и вернёт результат/исключение);

// * Step into next function call (F11) – то же самое, что Step (F9), с одним важным отличием: если на пути встречается асинхронный код
//  (таймауты/интервалы, сетевые запросы), отладчик дожидается его срабатывания и заходит внутрь callback'а;

// * Step out of current function (Shift + F11) – выйти из функции, внутри которой мы находимся, на предыдущий уровень стека вызовов.



// ...Рабочий опрос
// let login = prompt('Какой ваш логин?', '');

//  if (login == 'Админ') {

//     alert('Хорошо, введите пароль');
//     let password = prompt('Введите пароль', '');
            
//         if (password == 'Мне можно') {
//             alert('Принято!');
//             let mission = prompt('Введите число больше 18 "создатель"', 18);
//             let result = (mission > 18) ? 'Открыта ещё одна дверь' : 'Вы не пройшли';
//             alert(result);
             
//                let animal = confirm('Кто громче рычит: (если тигр то истинна) (если олень то ложь)');

//                if (animal == true) {
//                    alert('Вы умный!');
                
//                 alert('Следуйщий вопрос на математику');
//                 alert('Вы готовы?!');
//                 let questionMathTrue = prompt('45 * 21 сколько будет?', '') ;
//                 switch (questionMathTrue) {

//                     case '945': 
//                     alert('Я в шоке, у вас IQ Енштейна ?');
//                     break;

//                     case '4521': 
//                     alert('Не правильно! :(');
//                     break;

//                     case '923': 
//                     alert('Ну почти же былооо');
//                     break;

//                     case '943': 
//                     alert('Вы почти умный, не в обиду');
//                     break;
                    
//                     default:
//                     alert('Попробуйте ещё раз в другой раз');
//                     break;
//                 }



//                } else {
//                    alert('Здесь вы ошиблись');
//                }

//         } else {
//             alert('Отмена действий');
//         }

// } else {
//     alert('Не правильно ввели логин');
// }


// function typeFuncGlobal (question, yes, no) {
//    question = prompt('Какая кличка владельца этого ноутбука', '');
//    if (question == 'Кефир') {
//        yes();
//    } else {
//        no();
//    }

// }

// function typeYes () {
//    alert('Верно!');
// }
// function typeNo () {
//    alert('Не верно!');
// }

// typeFuncGlobal('', typeYes, typeNo); 


// let welcome = (question, yes, no) => {
//     if (prompt(question)){
//         yes();
//     } 
//     else {
//         no();
//     }

// }
// welcome (
//     'Как зовут владельца этого ноутбука?',
//     () => alert('Верно!'),
//     () => alert('Не верно!')
// );



// function funct (more, less) {
//     let trainQuestion = prompt('more and less much 18 ?', 18);
//     if (trainQuestion > 18) {
//         more();
//     } 
//     else {
//         less(); 
//     }
// }

// function More () {
//     alert('Верно!');
// }  
// function Less () {
//     alert('Не верно!');
// }

// let resultMoreAndLess = funct(More, Less);
// alert(resultMoreAndLess);

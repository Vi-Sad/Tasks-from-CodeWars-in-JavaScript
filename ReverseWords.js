// Обратные слова

// Завершите работу функции, которая принимает строковый параметр и меняет местами каждое слово в строке. 
// Все пробелы в строке должны быть сохранены.

// Примеры:

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// --------------------------------------------------------------------------------------------------------

// Решение:

function reverseWords(str) {
    str = str + ' ';
    str_array = [];
    str_array_reverse = [];
    let word = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ') {
            str_array.push(word);
            word = '';
        } else {
            word += str[i];
        }
    }
    for (let i = 0; i < str_array.length; i++) {
        str_array_reverse.push(str_array[i].split('').reverse().join(''))
    }
    return str_array_reverse.join(' ');
}

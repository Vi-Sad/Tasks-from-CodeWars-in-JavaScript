// Кому это нравится?

// Вы, вероятно, знакомы с системой "лайков" на Facebook и других страницах. 
// Люди могут ставить "лайки" публикациям в блоге, картинкам или другим элементам. 
// Мы хотим создать текст, который должен отображаться рядом с таким элементом.

// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. 
// Он должен возвращать отображаемый текст, как показано в примерах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Примечание: Для 4 или более имен число в "and 2 others" просто увеличивается.

// ------------------------------------------------------------------------------------------------------

// Решение:

function likes(names) {
    if (names.length >= 0 && names.length <= 3) {
        if (names.length == 0) {
            return 'no one likes this';
        } else if (names.length == 1) {
            return `${names.at(0)} likes this`;
        } else if (names.length == 2) {
            return `${names.at(0)} and ${names.at(1)} like this`;
        } else {
            return `${names.at(0)}, ${names.at(1)} and ${names.at(2)} like this`;
        }
    } else {
        return `${names.at(0)}, ${names.at(1)} and ${names.length - 2} others like this`;
    }
}

// Rot13

// ROT13 - это простой шифр замены букв, который заменяет букву буквой, следующей за ней в алфавите на 13 букв. 
// ROT13 - это пример шифра Цезаря.

// Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. 
// Если в строку включены цифры или специальные символы, они должны быть возвращены в том виде, в каком они есть. 
// Сдвигать следует только буквы латинского / английского алфавита, как в оригинальной Rot13 "реализации".

// ----------------------------------------------------------------------------------------------------------------

// Решение:

function rot13(message) {
    let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newMessage = []
    for (let i of message) {
        if (words.includes(i.toUpperCase())) {
            if (words.indexOf(i.toUpperCase()) + 13 < words.length) {
                if (i == i.toUpperCase()) {
                    newMessage.push(words[words.indexOf(i) + 13])
                } else {
                    newMessage.push(words[words.indexOf(i.toUpperCase()) + 13].toLowerCase())
                }
            } else {
                if (i == i.toUpperCase()) {
                    newMessage.push(words[(words.indexOf(i) + 13) - (words.length)])
                } else {
                    newMessage.push(words[(words.indexOf(i.toUpperCase()) + 13) - (words.length)].toLowerCase())
                }
            }
        } else {
            newMessage.push(i)
        }
    }
    return newMessage.join('');
}

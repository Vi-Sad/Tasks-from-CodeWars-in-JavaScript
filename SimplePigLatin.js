// Простая Свинячья латынь

// Переместите первую букву каждого слова в конец, затем добавьте "ay" в конце слова. Знаки препинания оставьте нетронутыми.

// Примеры:
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// ----------------------------------------------------------------------------------------------------------------------------

// Решение:

function pigIt(str) {
    str = str.split(' ')
    newStr = []
    for (let i = 0; i < str.length; i++) {
        strMini = str[i].split('')
        strMiniIndex0 = strMini[0]
        strMini.shift()
        if (strMiniIndex0 == '!' || strMiniIndex0 == '?') {
            newStr.push(strMiniIndex0)
        } else {
            newStr.push(`${strMini.join('')}${strMiniIndex0}ay`)
        }
    }
    return newStr.join(' ')
}
